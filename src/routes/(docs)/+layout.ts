const capitalizeString = (str: string) => {
	return str.charAt(0).toUpperCase() + str.slice(1);
};
const extractPrefix = (str: string) => {
	const lastSlashIndex = str.lastIndexOf('/');
	const extensionIndex = str.lastIndexOf('.svx');

	if (lastSlashIndex === -1 || extensionIndex === -1 || extensionIndex <= lastSlashIndex) {
		return '';
	}

	return capitalizeString(str.substring(lastSlashIndex + 1, extensionIndex));
};

function createSubarraysByPrefix(array: any[], prefix: string) {
	return array.reduce((subarrays, obj) => {
		let key = obj[prefix];

		if (!key || typeof key === 'undefined') {
			key = 'Get started';
		}

		if (!subarrays[key]) {
			subarrays[key] = [];
		}

		subarrays[key].push(obj);
		return subarrays;
	}, {});
}

export async function load() {
	const paths = import.meta.glob('./docs/content/*.svx', { eager: true });
	let content = [];

	for (const path in paths) {
		const file = paths[path] as any;
		const meta = {
			...file.metadata,
			name: file.metadata.name ? file.metadata.name : extractPrefix(path),
			url: `${path.replace('.', '').replace('/content', '').replace('.svx', '')}`
		};
		content.push(meta);
		content.sort((a, b) => a.order - b.order);
	}

	return {
		content,
		formatted: createSubarraysByPrefix(content, 'prefix')
	};
}
