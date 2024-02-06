import mongoose from 'mongoose';
import { routeStopSubdocument } from './subdocuments/routeStopSubdocument.js';

export const Route = new mongoose.Schema({
  stops: [routeStopSubdocument],
});
