import { fail, redirect } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';
import { AUTH_ENDPOINTS } from '$lib/config/api';

export const load: PageServerLoad = async ({ locals }) => {
	// If user is already logged in, redirect to dashboard
	const session = await locals.auth();
	
	if (session?.user) {
		throw redirect(303, '/dashboard');
	}
};

export const actions: Actions = {
	default: async ({ request, fetch }) => {
		const data = await request.formData();
		const name = data.get('name')?.toString();
		const email = data.get('email')?.toString();
		const password = data.get('password')?.toString();
		
		if (!name || !email || !password) {
			return fail(400, { message: 'All fields are required' });
		}
		
		if (password.length < 8) {
			return fail(400, { message: 'Password must be at least 8 characters long' });
		}
		
		try {
			const response = await fetch(AUTH_ENDPOINTS.REGISTER, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({ name, email, password }),
				credentials: 'include'
			});
			
			if (!response.ok) {
				const errorData = await response.json();
				return fail(response.status, { 
					message: errorData.statusMessage || 'Registration failed' 
				});
			}
			
			const responseData = await response.json();
			
			// Return success data
			return { success: true, user: responseData.user };
		} catch (error) {
			return fail(500, { message: 'An unexpected error occurred' });
		}
	}
};