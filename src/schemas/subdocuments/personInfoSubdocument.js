import mongoose from 'mongoose';

export const personInfoSubdocument = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
});
