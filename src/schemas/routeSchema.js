import mongoose from 'mongoose';
import { routeStopSubdocument } from './subdocuments/routeStopSubdocument.js';

export const routeSchema = new mongoose.Schema({
  stops: [routeStopSubdocument],
});
export const Route = mongoose.model('Route', routeSchema);
