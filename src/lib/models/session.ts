import mongoose from 'mongoose';

export const SessionSchema = new mongoose.Schema(
	{
		_id: {
			type: String,
			required: true
		},
		user_id: {
			type: String,
			required: true
		},
		expires_at: {
			type: Date,
			required: true
		}
	} as const,
	{ _id: false }
);

const sessionModel = () => mongoose.model('sessions', SessionSchema);
export const Session = (mongoose.models['sessions'] || sessionModel()) as ReturnType<
	typeof sessionModel
>;
