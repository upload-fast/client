// See https://kit.svelte.dev/docs/types#app

import type { User } from '$lib/models/user';
import type { Document, ObjectId } from 'mongoose';
import type { Hanning } from './hooks.server';

export type UserType = {
	name: string;
	_id: string | ObjectId;
	email: string;
	image: string;
	emailVerified: boolean;
	plan: {
		name: string;
		plan_type: string;
		_id: string | ObjectId;
		createdAt: NativeDate;
		updatedAt: NativeDate;
		storageUsed: number;
		storageCap: number;
		uploadCap: number;
		paid: boolean;
	};
};

// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
		interface Locals {
			_user: User;
		}
	}
}

export {};
