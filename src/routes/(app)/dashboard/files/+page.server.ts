import { UFile } from '$lib/models/files';
import { format } from '@auth/mongodb-adapter';
import type { Ufile } from './types';
import { User } from '$lib/models/user';
import { convertObjectIds } from '$lib/server/auth_utils/_auth';

export async function load({ locals }) {
	const session = await locals.auth();
	let user = null;

	if (session) {
		user = await User.findOne({ email: session?.user?.email }).exec();
	}

	//@ts-expect-error
	const files = await UFile.find({ plan_id: user?.plan?._id });

	const serializableFiles = files.map((item) => {
		const res = item.toObject();
		return convertObjectIds(res) as Ufile;
	});

	return {
		files: serializableFiles
	};
}
