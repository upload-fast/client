import data from '$lib/server/plans.json';

export async function load() {
	return {
		pricingData: data
	};
}
