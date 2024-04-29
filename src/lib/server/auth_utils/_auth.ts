import { SvelteKitAuth } from '@auth/sveltekit';
import Github from '@auth/sveltekit/providers/github';
import { MongoDBAdapter } from '@auth/mongodb-adapter';
import clientPromise from './mongo';

export const { handle } = SvelteKitAuth({
	providers: [Github],
	adapter: MongoDBAdapter(clientPromise, { databaseName: 'Uploadflare' })
});

import { Types } from 'mongoose';

/**
 * Converts any ObjectId instances in the given value to serializable strings.
 * @param {unknown} value - The value to convert.
 * @returns {unknown} The converted value.
 */
export function convertObjectIds(value: Record<string, any>): unknown {
	const result: { [key: string]: unknown } = {};

	for (const [key, val] of Object.entries(value)) {
		if (val instanceof Types.ObjectId) {
			result[key] = val.toString();
		} else {
			result[key] = val;
		}
	}
	return result;
}
