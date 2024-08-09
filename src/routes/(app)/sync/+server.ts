import { WEBHOOK_SECRET } from '$env/static/private';
import crypto from 'crypto';
import { User } from '$lib/models/user.js';
import { Key } from '$lib/models/api-keys.js';
import type { PlanModel, planSchema } from '$lib/models/plan.js';

async function buffer(readable: any) {
	const chunks = [];
	for await (const chunk of readable) {
		chunks.push(typeof chunk === 'string' ? Buffer.from(chunk) : chunk);
	}
	return Buffer.concat(chunks);
}

const EVENTS = [
	'order_created',
	'subscription_created',
	'subscription_updated',
	'subscription_cancelled',
	'subscription_renewed',
	'subscription_payment_failed',
	'subscription_payment_recovered',
	'subscription_payment_refunded',
	'subscription_payment_success',
	'subscription_expired'
] as const;

export interface ResBody {
	body: {
		meta: {
			event_name: (typeof EVENTS)[number];
			custom_data: {
				// this is where any custom checkout parameters will be accessible
				// details: https://docs.lemonsqueezy.com/api/checkouts#create-a-checkout
				userId: string;
			};
		};
		data: {
			id: string;
			attributes: {
				identifier: string;
				status: string;
				variant_name: string;
				card_last_four: string;
				first_order_item: {
					variant_name: string;
					test_mode: boolean;
				};
				urls: {
					update_payment_method?: string;
					customer_portal?: string;
				};
				renews_at: string;
			};
		};
	};
}

export async function POST({ request }) {
	const rawBody = await buffer(request.body);
	const hmac = crypto.createHmac('sha256', WEBHOOK_SECRET);
	const digest = Buffer.from(hmac.update(rawBody).digest('hex'), 'utf8');
	const signature = Buffer.from(request.headers.get('x-signature') || '', 'utf8');

	if (!crypto.timingSafeEqual(digest, signature)) {
		return Response.json(
			{
				message: 'Invalid signature'
			},
			{
				status: 400
			}
		);
	}

	const payload: ResBody['body'] = JSON.parse(rawBody.toString('utf-8'));

	const userId = payload['meta']['custom_data']['userId'];
	const eventName = payload['meta']['event_name'];

	const userToUpdate = await User.findByIdAndUpdate(userId);

	switch (eventName) {
		case 'order_created': {
			if (userToUpdate) {
				userToUpdate!.plan!.paid = true;

				if (payload['data']['attributes']['first_order_item']) {
					userToUpdate!.plan!.plan_type =
						payload['data']['attributes']['first_order_item']['variant_name'] ??
						userToUpdate!.plan!.plan_type;
				}
				await userToUpdate?.save();
			}
		}

		case 'subscription_created': {
			if (userToUpdate) {
				userToUpdate!.plan!.plan_type =
					payload['data']['attributes']['variant_name'] ?? userToUpdate!.plan!.plan_type;

				await userToUpdate?.save();
			}
		}

		case 'subscription_updated': {
			const plan_type = payload['data']['attributes']['variant_name'] as
				| 'Trial'
				| 'Tier 1'
				| 'Tier 2';

			const customer_portal_url = payload['data']['attributes']['urls']['customer_portal']!;

			// The only event that matter
			const sub_status = payload['data']['attributes']['status'] as
				| 'on_trial'
				| 'active'
				| 'expired';

			if (userToUpdate) {
				const plan_updates = { customer_portal_url, sub_status, plan_type } as any;
				switch (plan_type) {
					case 'Tier 1': {
						plan_updates['storageCap'] = 10485760;
						plan_updates['uploadCap'] = 5000;
						break;
					}
					case 'Tier 2': {
						plan_updates['storageCap'] = 125829120;
						plan_updates['uploadCap'] = 100000;
						break;
					}
				}

				switch (sub_status) {
					case 'on_trial': {
						plan_updates['paid'] = true;
						const res = await Key.updateMany({ user_id: userId }, { $set: { active: true } });
						console.log(res);
						break;
					}
					case 'active': {
						plan_updates['paid'] = true;
						const res = await Key.updateMany({ user_id: userId }, { $set: { active: true } });
						console.log(res);
						break;
					}

					case 'expired': {
						plan_updates['paid'] = false;
						const res = await Key.updateMany({ user_id: userId }, { $set: { active: false } });
						console.log(res);
						break;
					}
				}

				Object.assign(userToUpdate!.plan!, plan_updates);

				await userToUpdate.save();
			}
		}
	}

	return new Response('Ok', {
		status: 200
	});
}
