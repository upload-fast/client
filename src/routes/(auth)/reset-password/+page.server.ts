import { fail } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';
import { AUTH_ENDPOINTS } from '$lib/config/api';

export const load: PageServerLoad = async ({ locals }) => {
	// If user is already logged in, redirect to dashboard
	const session = await locals.auth();
	
	if (session?.user) {
		return { alreadyLoggedIn: true };
	}
	
	return {};
};

export const actions: Actions = {
	default: async ({ request, fetch }) => {
		const data = await request.formData();
		const email = data.get('email')?.toString();
		
		if (!email) {
			return fail(400, { message: 'Email is required' });
		}
		
		try {
			const response = await fetch(AUTH_ENDPOINTS.PASSWORD_RESET_REQUEST, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({ email })
			});
			
			// Return success even if the email doesn't exist (for security)
			return { success: true };
		} catch (error) {
			// Still return success (for security)
			return { success: true };
		}
	}
};