import express from 'express';
import dotenv from 'dotenv';
import { faker } from '@faker-js/faker';
import mongoose from 'mongoose';
import { connectToDb } from './utils/connectToDb.js';
import { customerRouter } from './routers/customerRouter.js';
import { addFakeData, deleteAllFakeData } from './utils/addFakeData.js';
dotenv.config();

const app = express();

const DB_URI = process.env.DB_URI;
const PORT = process.env.PORT || 3030;

app.use(express.json());

const PersonSchema = new mongoose.Schema(
  {
    firstName: { type: String },
    lastName: { type: String },
    email: { type: String },
  },
  {
    collection: 'persons',
    versionKey: false,
  }
);

app.use('/customer', customerRouter);
app.route('/fake').post(addFakeData).delete(deleteAllFakeData);

const startServer = async () => {
  try {
    await connectToDb(DB_URI);
    app.listen(PORT, () =>
      console.log(`Server is running an http://localhost:${PORT}`)
    );
  } catch (e) {
    console.error(e);
    throw new Error(e);
  }
};

startServer();
