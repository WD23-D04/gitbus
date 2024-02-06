import mongoose from "mongoose";

export const travelCustomerLink = new mongoose.Schema(
  {
    users: [{ ype: mongoose.Types.ObjectId, ref: "User" }],
    travel: { type: mongoose.Types.ObjectId, ref: "Travel" },
  },
  {
    timestamps: true,
    collection: "travelCustomerLink",
  }
);

export const TravelCustomerLink = mongoose.model(
  "TravelCustomer",
  travelCustomerLink
);
