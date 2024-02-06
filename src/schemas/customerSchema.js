import mongoose from 'mongoose';
import { personInfoSubdocument } from './subdocuments/personInfoSubdocument.js';

export const customerSchema = new mongoose.Schema(
  {
    ...personInfoSubdocument.obj,
    email: String,
    personalId: String,
    baggage: Number,
  },
  {
    timestamps: true,
  }
);

export const Customer = mongoose.model('Customer', customerSchema);
