import { Project } from '$lib/models/plan.js';
import { fail, redirect, error } from '@sveltejs/kit';

export async function load({ locals }) {
	const session = await locals.auth();

	return {
		session
	};
}

export const actions = {
	createProject: async ({ request, locals }) => {
		try {
			const data = await request.formData();
			const name = data.get('name');
			const plan = data.get('plan')?.toString();
			const usr = await locals.auth();

			if (!usr || !name) {
				return fail(400, { error: true, payload: 'Missing required values' });
			}
			await Project.create({
				name,
				user: usr?.user?.id,
				plan_type: plan,
				storageUsed: 0,
				storageCap: 512000
			});
			redirect(302, '/dashboard/files');
		} catch (e: any) {
			console.log(e);
			return fail(400, { error: true, payload: e.message });
		}
	}
};
