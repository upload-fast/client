import { Key } from '$lib/models/api-keys.js';
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

	const lastWeek = new Date();
	lastWeek.setDate(lastWeek.getDate() - 7); // Set the date to 7 days ago

	if (session) {
		user = await User.findOne({ email: session?.user?.email }).exec();
	}
	//@ts-ignore
	const count = await UFile.countDocuments({ plan_id: user?.plan?._id });
	const countWithinWeek = await UFile.countDocuments({
		//@ts-ignore
		plan_id: user?.plan?._id,
		createdAt: { $gte: lastWeek }
	});

	const keys = await Key.find({ user_id: user?._id });

	return {
		fileCount: { total: count, thisWeek: countWithinWeek },
		apiKeys: JSON.parse(JSON.stringify(keys))
	};
}

export const actions = {
	createProject: async ({ request, locals }) => {
		const session = await locals.auth();

		const data = await request.formData();
		const name = data.get('name');
		const plan = data.get('plan')?.toString();

		if (!data || plan === 'undefined' || !name) {
			return fail(400, { error: true, payload: 'Missing required values' });
		}

		if (name.toString().length < 3) {
			return fail(400, { error: true, payload: 'Project name should be 3 characters or more' });
		}

		if (!session) {
			return fail(400, { error: true, payload: 'No user found' });
		}

		try {
			const newProject = { name, plan_type: plan?.toString(), storageUsed: 0 };

			await User.findOneAndUpdate({ name: session?.user?.name }, { plan: new Project(newProject) })
				.exec()
				.then();
		} catch (e: any) {
			console.log(e);
			return fail(400, { error: true, payload: e.message });
		}
		redirect(307, '/dashboard/files');
	},

};
