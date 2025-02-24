import mongoose from 'mongoose';


export const connectToDb = async (uri: string) => {
	try {
		if (process.env.NODE_ENV !== 'production') {
			if ((globalThis as any).cachedConnection && mongoose.connection.readyState === 1) {
				console.log('Using cached test db connection')
				return (globalThis as any).cachedConnection
			}
			(globalThis as any).cachedConnection = await mongoose.connect(uri, { dbName: 'uploadfast-test' })
			console.log('Connected to test db!')
			return (globalThis as any).cachedConnection
		}
		await mongoose.connect(uri, { dbName: 'Uploadfast' })
	} catch (e) {
		console.log(e);
	}
};
