import mongoose from 'mongoose';

export const busSchema = new mongoose.Schema(
  {
    manufactur: String,
    model: String,
    specialPackage: [String],
    buyedOn: { type: Date, default: new Date() },
    seat: String,
    seatQuantity: Number,
  },
  { collection: 'bus', timestamps: true }
);

export const Bus = mongoose.model('Bus', busSchema);
