import { UFile } from '$lib/models/files';
import { format } from '@auth/mongodb-adapter';
import type { Ufile } from './types';

export async function load() {
	const files = await UFile.find({ file_name: 'slide1.jpg' });

	return {
		files: files.map((item) => format.from(item.toObject()) as Ufile)
	};
}
