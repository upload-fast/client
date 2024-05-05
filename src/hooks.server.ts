import { User } from '$lib/models/user';
import { handle as authHandle } from '$lib/server/auth_utils/_auth';
import type { Handle } from '@sveltejs/kit';
import { sequence } from '@sveltejs/kit/hooks';

//@ts-ignore
async function setUserContext({ event, resolve }) {
	const session = await event.locals.auth();

	const userFromDb = await User.findOne({ email: session?.user?.email }).exec();

	event.locals._user = userFromDb;

	return resolve(event);
}

export const handle: Handle = sequence(authHandle, setUserContext);
