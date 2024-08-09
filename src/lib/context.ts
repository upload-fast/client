import { get, writable, type Writable } from 'svelte/store';
import type { UserType } from '../app';

type UserContextType = Pick<UserType, 'name' | 'email'> & { apiKeys: any };

export const userContext = writable<UserContextType | null>(null);

export function setUserContext(dataInput: UserContextType) {
	userContext.set(dataInput);
}

export function getUserContext() {
	return get(userContext);
}
