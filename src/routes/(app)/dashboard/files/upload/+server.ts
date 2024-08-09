import { UPLOADFAST_API_KEY } from '$env/static/private';

export async function POST({ request }) {
	const formData = Object.fromEntries(await request.formData());

	const UPLOAD_KEY = request.headers.get('uf-api-key');

	const { file } = formData as { file: File };

	const forml = new FormData();
	forml.append('file', file);

	try {
		const requestOptions: RequestInit = {
			method: 'POST',
			body: forml,
			headers: {
				'api-key': UPLOAD_KEY ?? UPLOADFAST_API_KEY
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
