import mongoose from 'mongoose';

export const connectToDb = async (uri) => {
  try {
    return await mongoose.connect(uri);
  } catch (e) {
    console.error(e);
    throw new Error(e);
  }
};
