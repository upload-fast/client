import { writable } from 'svelte/store';
import type { Ufile } from './types';

export const createWritableFilesData = (files: Ufile[]) => {
	return writable(files);
};
