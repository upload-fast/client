import { UPLOADFAST_API_KEY } from '$env/static/private';
import { createClient } from '@uploadfast/client';

export async function POST({ request }) {
	const formData = await request.formData();

	try {
		const UPLOAD_KEY = request.headers.get('api-key');

		if (!UPLOAD_KEY) {
			throw new Error(`Upload API key not passed to request`);
		}

		// TODO: Use SDK.
		// const fast = createClient({ apiKey: UPLOAD_KEY });

		// const files = formData.getAll('file');

		const requestOptions: RequestInit = {
			method: 'POST',
			body: formData,
			headers: {
				'api-key': UPLOAD_KEY!
			}
		};
		const response = await fetch('https://uploadfast-server.fly.dev/upload', requestOptions);
		const uploadResponse = await response.json();
		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status} \n ${response.body}`);
		}
		return new Response(uploadResponse);
	} catch (e) {
		console.log(e);
	}
}
