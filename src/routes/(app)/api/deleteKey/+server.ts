import { Key } from '$lib/models/api-keys.js';

export async function POST({ request }) {
	const { key } = await request.json();

	if (!key) {
		return new Response('No key included in request body');
	}

	try {
		const existingKey = await Key.findOneAndDelete({ value: key });
		if (!existingKey) {
			return new Response('Key not found', { status: 400, statusText: 'Key not found' });
		}
		return Response.json({ message: `Key - ${key} deleted successfully` });
	} catch (e) {
		return new Response('Failed to delete key', {
			status: 500
		});
	}
}
