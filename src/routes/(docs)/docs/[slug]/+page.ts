import { error } from '@sveltejs/kit';

export async function load({ params }) {
	try {
		const comps = import.meta.glob('../content/*.svx');
		const res: any = await comps[`../content/${params.slug}.svx`]();

		return {
			content: res.default,
			meta: res.metadata
		};
	} catch (e) {
		console.log(e);
		error(404, `Could not find that page - ${params.slug}`);
	}
}
