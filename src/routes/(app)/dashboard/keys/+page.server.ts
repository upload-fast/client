import { Key } from '$lib/models/api-keys';
import { redirect } from '@sveltejs/kit';

export async function load({ locals }) {
	const session = await locals.auth();

	// Redirect if not authenticated
	if (!session) {
		redirect(307, '/dashboard/');
	}

	let user = locals._user;

	const keys = await Key.find({ user_id: user._id });
}
