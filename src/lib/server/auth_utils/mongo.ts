import { MONGODB_URI } from '$env/static/private';
import { mongo } from 'mongoose';

import mongoose from 'mongoose';

if (!MONGODB_URI) {
	throw new Error('Invalid or Missing environment variable: "MONGODB_URI"');
}

const uri: string = MONGODB_URI;
const options = {} as mongo.MongoClientOptions;

let client;
let clientPromise: Promise<mongo.MongoClient>;

if (process.env.NODE_ENV === 'development') {
	// In development mode, use a global variable so that the value
	// is preserved across module reloads caused by HMR (Hot Module Replacement).
	if (!(globalThis as any)._mongoClientPromise) {
		client = new mongoose.mongo.MongoClient(uri, options);
		(globalThis as any)._mongoClientPromise = client.connect();
	}
	clientPromise = (globalThis as any)._mongoClientPromise;
} else {
	clientPromise = new mongo.MongoClient(uri, options).connect();
}

// Export a module-scoped MongoClient promise. By doing this in a
// separate module, the client can be shared across functions.
export default clientPromise;
