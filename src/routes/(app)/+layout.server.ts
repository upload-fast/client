import { connectToDb } from '$lib/db';
import { MONGO_URI } from '$env/static/private';

export async function load() {
	await connectToDb(MONGO_URI);
}
