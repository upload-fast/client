import { UFile } from '$lib/models/files';
import type { Ufile } from './types';
import { convertObjectIds } from '$lib/server/auth_utils/_auth';
import { redirect } from '@sveltejs/kit';
import { Key } from '$lib/models/api-keys';
import type { UserType } from '../../../../app';

export async function load({ locals }) {
	// Get session
	const session = await locals.auth();

	// Redirect if not authenticated
	if (!session && !locals._user) {
		redirect(307, '/dashboard/');
	  }
	

	let user = locals._user;

	if (!user) {
		redirect(307, '/login');
	  }

	const files = await UFile.find({ plan_id: user?.plan?._id }).sort({ createdAt: 'desc' });

	const keys = await Key.find({ user_id: user._id });

	// Helper to POJO-ize mongo docs
	function serialize<T>(entity: {}[]): T[] {
		return entity.map((item: any) => {
			const res = item.toObject();
			return convertObjectIds(res) as T;
		});
	}

	return {
		files: serialize<Ufile>(files),
		keys: serialize<{ value: string }>(keys),
		user: { name: user.name, email: user.email, isEmailVerified: user.isEmailVerified  }
	};
}

export const actions = {};
