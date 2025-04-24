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
  default: async ({ request, cookies, fetch }) => {
    try {
      const data = await request.formData();
      const email = data.get('email')?.toString();
      const password = data.get('password')?.toString();
      
      if (!email || !password) {
        return fail(400, { message: 'Email and password are required' });
      }
      
      console.log('Attempting login for:', email);
      
      const response = await fetch(AUTH_ENDPOINTS.LOGIN, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password }),
        credentials: 'include'
      });
      
      console.log('Login response status:', response.status);
      
    
      const responseText = await response.text();
      console.log('Login response body:', responseText);
      
      // parse the response as JSON
      let responseData;
      try {
        responseData = JSON.parse(responseText);
      } catch (e) {
        console.error('Failed to parse response as JSON:', e);
        return fail(500, { message: 'Invalid server response' });
      }
      
      if (!response.ok) {
        return fail(response.status, { 
          message: responseData.statusMessage || 'Login failed' 
        });
      }
      
      // return success with navigation URL
      return { success: true, redirectTo: '/dashboard' };
    } catch (error) {
      console.error('Login error:', error);
      
      
      if (error instanceof Error) {
        return fail(500, { message: `Error: ${error.message}` });
      }
      return fail(500, { message: 'An unexpected error occurred' });
    }
  }
};