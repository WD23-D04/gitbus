import mongoose from 'mongoose';

export const routeStopSchema = new mongoose.Schema({
  stop: { type: mongoose.Types.ObjectId, red: 'Stop' },
  arrival: Date,
  departure: Date,
});
