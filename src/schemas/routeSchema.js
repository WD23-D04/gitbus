import mongoose from 'mongoose';

export const Route = new mongoose.Schema({
  stops: [{ type: mongoose.Types.ObjectId, ref: 'Stop' }],
});
