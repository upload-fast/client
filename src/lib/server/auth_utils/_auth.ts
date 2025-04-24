import { SvelteKitAuth } from '@auth/sveltekit';
import GitHub from '@auth/sveltekit/providers/github';
import { MongoDBAdapter } from '@auth/mongodb-adapter';
import clientPromise from './mongo';
import { Types } from 'mongoose';

// Export the auth handler directly
export const { handle: authHandle } = SvelteKitAuth({
  providers: [GitHub],
  // @ts-ignore
  adapter: MongoDBAdapter(clientPromise, { databaseName: 'Uploadflare' }),
  callbacks: {
    async session({ session, token, user }) {
      // Forward to our custom session
      return session;
    }
  }
});

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