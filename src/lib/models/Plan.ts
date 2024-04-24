import mongoose, { Types } from 'mongoose';

const { Schema } = mongoose;

export const planSchema = new Schema(
	{
		active: Boolean,
		plan_type: {
			type: String,
			enum: ['Trial', 'Tier 1', 'Tier 2']
		},
		storageCap: {
			type: Types.Decimal128,
			default: function () {
				switch (this.plan_type) {
					case 'Trial':
						return 512000;
					case 'Tier 1':
						return 5242880;
					case 'Tier 2':
						return 10485760;
				}
			}
		},
		storageUsed: Number,
		paid: { type: Boolean, default: false },
		user: Types.ObjectId,
		name: String
	},
	{
		timestamps: true
	}
);

const PlanModel = () => mongoose.model('projects', planSchema);
export const Project = (mongoose.models['projects'] || PlanModel()) as ReturnType<typeof PlanModel>;
