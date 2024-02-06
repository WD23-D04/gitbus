import mongoose from 'mongoose';

export const routeStopSchema = new mongoose.Schema({
  stop: { type: mongoose.Types.ObjectId, ref: 'Stop' },
  arrival: Date,
  departure: Date,
});
