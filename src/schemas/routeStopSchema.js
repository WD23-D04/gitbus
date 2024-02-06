import mongoose from 'mongoose';
import { routeStopSchema } from './subdocuments/routeStopSubdocument.js';

export const routeSchema = new mongoose.Schema({
  stops: [routeStopSchema],
});

export const Route = mongoose.model('Route', routeSchema);
