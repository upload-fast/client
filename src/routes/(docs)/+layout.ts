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

export async function load() {
	const paths = import.meta.glob('./docs/content/*.svx', { eager: true });
	let content = [];

	for (const path in paths) {
		const file = paths[path] as any;
		const meta = {
			...file.metadata,
			name: extractPrefix(path),
			url: `${path.replace('.', '').replace('/content', '').replace('.svx', '')}`
		};
		content.push(meta);
	}

	return {
		content
	};
}
