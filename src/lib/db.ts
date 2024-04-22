import mongoose from 'mongoose';

export const connectToDb = async (uri: string) => {
	try {
		//@ts-ignore
		await mongoose.connect(uri, { dbName: 'Uploadflare' });
		console.log('Connected!');
	} catch (e) {
		console.log(e);
	}
};
