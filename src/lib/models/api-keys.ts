import mongoose from 'mongoose';

const { Schema } = mongoose;

export const KeySchema = new Schema(
	{
		value: { type: String },
		user_id: { type: mongoose.SchemaTypes.ObjectId, index: true },
		active: { type: Boolean, default: true }
	},
	{ timestamps: true }
);

const KeyModel = () => mongoose.model('api-keys', KeySchema);
export const Key = (mongoose.models['api-keys'] || KeyModel()) as ReturnType<typeof KeyModel>;
