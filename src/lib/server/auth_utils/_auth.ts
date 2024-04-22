import { SvelteKitAuth } from '@auth/sveltekit';
import Github from '@auth/sveltekit/providers/github';
import { MongoDBAdapter } from '@auth/mongodb-adapter';
import clientPromise from './mongo';

export const { handle } = SvelteKitAuth({
	providers: [Github],
	adapter: MongoDBAdapter(clientPromise, { databaseName: 'Uploadflare' })
});
