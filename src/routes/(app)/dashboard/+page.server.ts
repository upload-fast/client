import { Project } from '$lib/models/plan.js';
import { User } from '$lib/models/user.js';
import { fail, redirect, error } from '@sveltejs/kit';
import { format } from '@auth/mongodb-adapter';

export async function load({ locals }) {
	const session = await locals.auth();
	let user = null;

	if (session) {
		user = await User.findOne({ email: session?.user?.email }).exec();
	}

	return {
		session,
		plan: user ? (JSON.parse(JSON.stringify(user?.plan)) as typeof user.plan) : null
	};
}

export const actions = {
	createProject: async ({ request, locals }) => {
		try {
			const data = await request.formData();
			const name = data.get('name');
			const plan = data.get('plan')?.toString();
			const session = await locals.auth();

			if (plan === 'undefined' || !name) {
				return fail(400, { error: true, payload: 'Missing required values' });
			}

			if (!session) {
				return fail(400, { error: true, payload: 'No user found' });
			}

			const newProject = { name, plan_type: plan?.toString(), storageUsed: 0 };

			await User.findOneAndUpdate({ name: session?.user?.name }, { plan: new Project(newProject) })
				.exec()
				.then();
		} catch (e: any) {
			return fail(400, { error: true, payload: e.message });
		}
		redirect(307, '/dashboard/files');
	}
};
