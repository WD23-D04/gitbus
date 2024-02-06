import mongoose from 'mongoose';

export const stopSchema = new mongoose.Schema(
  {
    name: String,
    standingRoom: Number,
    notes: [String],
  },
  {
    timestamps: true,
  }
);

export const Stop = mongoose.model('Stop', stopSchema);
