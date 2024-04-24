import { connectToDb } from '$lib/db.js';
import { MONGODB_URI } from '$env/static/private';

export async function load({ locals }) {
	await connectToDb(MONGODB_URI);
	const session = await locals.auth();

	return {
		session
	};
}
