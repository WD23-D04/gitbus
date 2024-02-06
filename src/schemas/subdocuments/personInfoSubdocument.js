import mongoose from 'mongoose';

export const personalInfoSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
});
