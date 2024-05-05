import { connectToDb } from '$lib/db.js';
import { MONGODB_URI } from '$env/static/private';
import { User } from '$lib/models/user.js';

export async function load({ locals }) {
	await connectToDb(MONGODB_URI);

	const session = await locals.auth();
	return {
		session,
		user: locals._user ? (JSON.parse(JSON.stringify(locals._user)) as typeof locals._user) : null
	};
}
