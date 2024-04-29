import { UFile } from '$lib/models/files.js';
import { Project } from '$lib/models/plan.js';
import { User } from '$lib/models/user.js';
import { fail, redirect, error } from '@sveltejs/kit';

interface ApiReqBody {
	user_id: string;
}

export async function load({ locals }) {
	const session = await locals.auth();
	let user = null;

	if (session) {
		user = await User.findOne({ email: session?.user?.email }).exec();
	}
	//@ts-ignore
	const count = await UFile.countDocuments({ plan_id: user?.plan?._id });

	return {
		fileCount: count
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
	},

	createKey: async ({ locals }) => {
		const session = await locals.auth();

		const userId = await User.findOne({ email: session?.user?.email })
			.select('_id')
			.exec();

		const reqBody = {
			user_id: userId?._id.toString()
		};

		try {
			const response = await fetch('http://localhost:3000/api-key', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(reqBody)
			});

			if (!response.ok) {
				return fail(400, { error: true, payload: response.body });
			} else {
				return { data: await response.json() };
			}
		} catch (e) {
			console.log(e);
			return fail(400, { error: true, payload: e });
		}
	}
};
