import mongoose from 'mongoose';
import { routeStopSchema } from './routeStopSubdocument.js';

export const routeSchema = new mongoose.Schema({
  stops: [routeStopSchema],
});

