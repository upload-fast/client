import mongoose from 'mongoose';
import { MONGO_URI } from '$env/static/private';

export const connectToDb = async () => {
	try {
		//@ts-ignore
		await mongoose.connect(process.env.MONGO_URI!, { dbName: 'Uploadflare' });
		console.log('Connected!');
	} catch (e) {
		console.log(e);
	}
};
