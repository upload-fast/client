import mongoose from 'mongoose';

const { Schema } = mongoose;

export const planSchema = new Schema(
	{
		active: Boolean,
		plan_type: {
			type: String,
			required: true
		},
		storageCap: {
			type: Number,
			default: function (this) {
				//@ts-expect-error
				switch (this.plan_type) {
					case 'Test Tier':
						return 1048576;
					case 'Tier 1':
						return 5242880;
					case 'Tier 2':
						return 10485760;
					default:
						return '1048576';
				}
			}
		},
		storageUsed: Number,
		paid: { type: Boolean, default: false },
		name: String,
		uploadCap: {
			type: Number,
			default: function (this) {
				//@ts-expect-error
				switch (this.plan_type) {
					case 'Test Tier':
						return 500;
					case 'Tier 1':
						return 5000;
					case 'Tier 2':
						return 100000;
					default:
						return 500;
				}
			}
		}
	},
	{
		timestamps: true
	}
);

export const PlanModel = () => mongoose.model('projects', planSchema);
export const Project = (mongoose.models['projects'] || PlanModel()) as ReturnType<typeof PlanModel>;
