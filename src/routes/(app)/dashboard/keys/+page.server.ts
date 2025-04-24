import { Key } from '$lib/models/api-keys';
import { redirect } from '@sveltejs/kit';

export async function load({ locals, depends }) {
	depends('app:keys');
	const session = await locals.auth();

	// Redirect if not authenticated
	if (!session && !locals._user) {
		redirect(307, '/dashboard/');
	}

	let user = locals._user;

	if(!user)[
		redirect(307, 'login')
	]
	const keys = await Key.find({ user_id: user._id });

	return {
		keys: JSON.parse(JSON.stringify(keys)),
		user: locals._user ? (JSON.parse(JSON.stringify(locals._user)) as typeof locals._user) : null
	};
}

export const actions = {
	createKey: async ({ locals }) => {
		const user = locals._user;
		const reqBody = {
			user_id: user?._id?.toString()
		};

		const response = await fetch('https://uploadfast-server.fly.dev/api-key', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(reqBody)
		});

		if (!response.ok) {
			return { error: true, payload: response.statusText };
		}

		const { payload } = await response.json();

		return {
			error: false,
			payload
		};
	}
};
