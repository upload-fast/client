import { WEBHOOK_SECRET } from '$env/static/private';
import crypto from 'crypto';
import { User } from '$lib/models/user.js';
import { Key } from '$lib/models/api-keys.js';

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
				variant_name: string;
				first_order_item: {
					variant_name: string;
					test_mode: boolean;
				};
				urls?: {
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
	const keys = await Key.find({ user_id: userId });

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

				userToUpdate!.plan = {
					...userToUpdate.plan,
					// @ts-ignore
					payment_meta: payload['data']['attributes'] ?? null
				};
				await userToUpdate?.save();
			}
		}

		case 'subscription_payment_success': {
			if (userToUpdate) {
				userToUpdate!.plan = {
					...userToUpdate.plan,
					// @ts-ignore
					payment_meta: payload['data']['attributes'] ?? null
				};
				await userToUpdate?.save();
			}

			for (const key of keys) {
				key.active = true;
				await key.save();
			}
		}

		case 'subscription_expired': {
			if (userToUpdate) {
				userToUpdate!.plan!.paid = false;
			}

			for (const key of keys) {
				key.active = false;
				await key.save();
			}
		}
	}

	return new Response(rawBody);
}
