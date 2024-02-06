import mongoose from 'mongoose';

export const TravelSchema = mongoose.Schema({
  date: {
    type: Date,
    required: true,
  },
  route: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Route',
    required: true,
  },
  customers: [
    {
      customer_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Customer',
        required: true,
      },
      from: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Stop',
        required: true,
      },
      to: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Stop',
        required: true,
      },
    },
  ],
  price: {
    type: Number,
    required: true,
  },
  employees: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Employee',
    },
  ],
  bus: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Bus',
    required: true,
  },
  notes: [String],
});

export const Travel = mongoose.model('Travel', TravelSchema);
