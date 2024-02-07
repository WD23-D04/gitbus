import mongoose from 'mongoose';

const validateEmailFunction = (email) => {
  const validator = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  return validator.test(email);
};

export const personInfoSubdocument = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: { type: String, validate: validateEmailFunction },
});
