import { UFile } from '$lib/models/files';
import { format } from '@auth/mongodb-adapter';
import type { Ufile } from './types';
import { User } from '$lib/models/user';
import { convertObjectIds } from '$lib/server/auth_utils/_auth';
import { redirect } from '@sveltejs/kit';
import { createClient } from '@uploadfast/client';
import { LucideFastForward } from 'lucide-svelte';
import { UPLOADFAST_API_KEY } from '$env/static/private';
import { Key } from '$lib/models/api-keys';

export async function load({ locals }) {
	// Get session
	const session = await locals.auth();

	// Redirect if not authenticated
	if (!session) {
		redirect(307, '/dashboard/');
	}

	let user = locals._user;

	const files = await UFile.find({ plan_id: user?.plan?._id }).sort({ createdAt: 'desc' });
	const keys = await Key.find({ user_id: user._id });

	const serializableFiles = files.map((item) => {
		const res = item.toObject();
		return convertObjectIds(res) as Ufile;
	});

	return {
		files: serializableFiles
	};
}

export const actions = {};
