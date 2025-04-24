import { fail } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';
import { AUTH_ENDPOINTS } from '$lib/config/api';

export const load: PageServerLoad = async ({ locals, params }) => {
	// If there's no token, return error
	if (!params.token) {
		return { error: 'Invalid or missing token' };
	}
	
	return { token: params.token };
};

export const actions: Actions = {
	default: async ({ request, fetch, params }) => {
		const data = await request.formData();
		const token = params.token;
		const password = data.get('password')?.toString();
		const confirmPassword = data.get('confirmPassword')?.toString();
		
		if (!token || !password || !confirmPassword) {
			return fail(400, { message: 'All fields are required' });
		}
		
		if (password.length < 8) {
			return fail(400, { message: 'Password must be at least 8 characters long' });
		}
		
		if (password !== confirmPassword) {
			return fail(400, { message: 'Passwords do not match' });
		}
		
		try {
			const response = await fetch(AUTH_ENDPOINTS.PASSWORD_RESET, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({ token, password })
			});
			
			if (!response.ok) {
				const errorData = await response.json();
				return fail(response.status, { 
					message: errorData.statusMessage || 'Failed to reset password' 
				});
			}
			
			return { success: true };
		} catch (error) {
			return fail(500, { message: 'An unexpected error occurred' });
		}
	}
};