import mongoose from 'mongoose';

export const travelCustomerLinkSchema = new mongoose.Schema(
  {
    users: [{ type: mongoose.Types.ObjectId, ref: 'User' }],
    travel: { type: mongoose.Types.ObjectId, ref: 'Travel' },
  },
  {
    timestamps: true,
    collection: 'travelCustomerLink',
  }
);

export const TravelCustomerLink = mongoose.model(
  'TravelCustomerLinkSchema',
  travelCustomerLinkSchema
);
