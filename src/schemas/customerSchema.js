import mongoose from 'mongoose';
import { personalInfoSchema } from './subdocuments/personInfoSubdocument.js';

export const customerSchema = new mongoose.Schema(
  {
    ...personalInfoSchema.obj,
    email: String,
    personalId: String,
    baggage: Number,
  },
  {
    timestamps: true,
  }
);

export const Customer = mongoose.model('Customer', customerSchema);
