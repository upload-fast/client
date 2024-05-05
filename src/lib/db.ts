import mongoose from 'mongoose';

let isConnected = false;

export const connectToDb = async (uri: string) => {
	try {
		if (!isConnected) {
			if (mongoose.connection.readyState !== 1) {
				//@ts-ignore
				await mongoose.connect(uri, { dbName: 'Uploadflare', maxPoolSize: 10 });
				isConnected = true;
				console.log('Connected!');
			} else {
				console.log('Already connected!');
			}
		}
	} catch (e) {
		console.log(e);
	}
};
