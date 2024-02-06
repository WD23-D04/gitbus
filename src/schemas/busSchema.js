import mongoose from "mongoose";

export const busSchema = new mongoose.Schema(
  {
    manufactur: String,
    model: String,
    specialPackage: [String],
    buyedOn: Date,
    seat: String,
  },
  { collection: "bus", timestamps: true }
);

export const Bus = mongoose.model("Bus", busSchema);
