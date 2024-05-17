import { UFile } from '$lib/models/files';
import { format } from '@auth/mongodb-adapter';
import type { Ufile } from './types';
import { User } from '$lib/models/user';
import { convertObjectIds } from '$lib/server/auth_utils/_auth';
import { redirect } from '@sveltejs/kit';
import { UploadFast } from '@uploadfast/client';

export async function load({ locals }) {
	// Get session
	const session = await locals.auth();

	// Redirect if not authenticated
	if (!session) {
		redirect(307, '/dashboard/');
	}

	// Acess locals._user! Completely type safe
	let user = locals._user;

	const files = await UFile.find({ plan_id: user?.plan?._id });

	const serializableFiles = files.map((item) => {
		const res = item.toObject();
		return convertObjectIds(res) as Ufile;
	});

	return {
		files: serializableFiles
	};
}
