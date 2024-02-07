import mongoose from 'mongoose';

export const busSchema = new mongoose.Schema(
  {
    manufactur: {
      type: String,
      required: true,
      minLength: 3,
      maxLength: [50, "The manufactur field may contain up to 50 characters"],
      trim: true,
      lowercase: true,
    },
    model: String,
    specialPackage: [String],
    buyedOn: { type: Date, default: new Date() },
    seat: String,
    quantity: {
      type: Number,
      min: 3,
      max: 300,
    },
  },
  { collection: 'bus', timestamps: true }
);

export const Bus = mongoose.model('Bus', busSchema);
