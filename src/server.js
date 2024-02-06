import express from 'express';
import dotenv from 'dotenv';
import { connectToDb } from './utils/connectToDb.js';

dotenv.config();

const app = express();

const DB_URI = process.env.DB_URI;
const PORT = process.env.PORT || 3030;

app.use(express.json());

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
