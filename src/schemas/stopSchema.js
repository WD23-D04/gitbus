import mongoose from 'mongoose';

export const stopSchema = new mongoose.Schema(
  {
    name: String,
    room: Number,
    notes: [Strings],
  },
  {
    timestamps: true,
  }
);

export const Stop = mongoose.model('Stop', stopSchema);