import mongoose from 'mongoose';

export const customerSchema = new mongoose.Schema(
  {
    PersonalInfo,
    email: String,
    personalId: String,
    baggage: Number,
  },
  {
    timestamps: true,
  }
);

export const Customer = mongoose.model('Customer', customerSchema);
