import { connectToDb } from '$lib/db';

export async function load() {
	await connectToDb();
}
