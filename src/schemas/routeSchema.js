import mongoose from 'mongoose';
import { routeStopSchema } from './subdocuments/routeStopSubdocument.js';

export const Route = new mongoose.Schema({
  stops: [routeStopSchema],
});
