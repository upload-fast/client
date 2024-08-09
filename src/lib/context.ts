import { get, readable, writable, type Readable, type Writable } from 'svelte/store';
import { getContext, setContext } from 'svelte';
import type { UserType } from '../app';

type UserContextType = Pick<UserType, 'name' | 'email'> & {apiKeys: any };
type UserContext = Writable<UserContextType>;

export const userContext = writable<UserContextType | null>(null);

export function setUserContext(dataInput: UserContextType) {
	userContext.set(dataInput);
}

export function getUserContext() {
	return get(userContext);
}
