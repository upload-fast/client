import { connectToDb } from '$lib/db';
import { redirect, type Handle } from '@sveltejs/kit';
import { sequence } from '@sveltejs/kit/hooks';
import mongoose from 'mongoose';
import { MONGODB_URI } from '$env/static/private';
import { authHandle } from '$lib/server/auth_utils/_auth';
import { AUTH_ENDPOINTS } from '$lib/config/api';

// Custom auth handler
async function handleAuth({ event, resolve }) {
	// Connect to DB if not connected
	if (mongoose.connection.readyState !== 1) {
	  await connectToDb(MONGODB_URI);
	}
	
	// Check if this is a protected route
	const protectedRoutes = ['/dashboard'];
	
	if (protectedRoutes.some(route => event.url.pathname.startsWith(route))) {
	  // Check for cookie
	  const authCookie = event.cookies.get('auth_session');
	  console.log('Auth cookie found:', authCookie);
	  
	  if (!authCookie) {
		console.log('No auth cookie, redirecting to login');
		throw redirect(303, '/login');
	  }
	  
	  try {
		console.log('Validating cookie with backend');
		const response = await fetch(AUTH_ENDPOINTS.ME, {
		  headers: {
			Cookie: `auth_session=${authCookie}`
		  },
		  credentials: 'include'
		});
		
		const data = await response.json();
		console.log('Auth validation response:', data);
		
		if (!data.authenticated) {
		  console.log('Auth validation failed, redirecting to login');
		  // Clear cookie and redirect
		  event.cookies.delete('auth_session', { path: '/' });
		  throw redirect(303, '/login');
		}
		
		console.log('Auth validation successful, setting user in locals');
		// Set user in locals
		event.locals._user = data.user;

		if (event.locals._user) {
			// Add the verification status to the event locals
			event.locals.isEmailVerified = !!event.locals._user.isEmailVerified;
		  }
	  } catch (error) {
		console.error('Auth validation error:', error);
		throw redirect(303, '/login');
	  }
	}
	
	return resolve(event);
  }

export const handle = sequence(handleAuth, authHandle);