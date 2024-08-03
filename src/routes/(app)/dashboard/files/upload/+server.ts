import { UPLOADFAST_API_KEY } from '$env/static/private';

export async function POST({ request }) {
	const formData = Object.fromEntries(await request.formData());

	const { file } = formData as { file: File };

	const forml = new FormData();
	forml.append('file', file);

	try {
		const requestOptions: RequestInit = {
			method: 'POST',
			body: forml,
			headers: {
				'api-key': 'ufl_3nolirydf6zybr0f9npu'
			}
		};
		const response = await fetch('https://uploadfast-server.fly.dev/upload', requestOptions);
		const uploadResponse = await response.json();
		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}
		console.log(JSON.stringify(uploadResponse));
		return new Response(uploadResponse);
	} catch (e) {
		console.log(e);
	}
}
