import { connectToDb } from '$lib/db';
import { User } from '$lib/models/user';
import { handle as authHandle } from '$lib/server/auth_utils/_auth';
import type { Handle } from '@sveltejs/kit';
import { sequence } from '@sveltejs/kit/hooks';
import mongoose from 'mongoose';
import { MONGODB_URI } from '$env/static/private';

//@ts-ignore
async function setUserContext({ event, resolve }) {
	if (mongoose.connection.readyState !== 1) {
		await connectToDb(MONGODB_URI);
	}
	const session = await event.locals.auth();

	const userFromDb = await User.findOne({ email: session?.user?.email }).exec();

	event.locals._user = userFromDb;

	const response = await resolve(event);

	return response;
}

export const handle: Handle = sequence(authHandle, setUserContext);
