import { Lucia } from 'lucia';
import { MongodbAdapter } from '@lucia-auth/adapter-mongodb';
import mongoose from 'mongoose';

await mongoose.connect(import.meta.env.MONGO_URI).then(() => console.log('Auth models connected!'));

export const adapter = new MongodbAdapter(
	mongoose.connection.collection('users'),
	mongoose.connection.collection('sessions')
);
