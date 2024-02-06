import express from 'express';
import dotenv from 'dotenv';
import { faker } from '@faker-js/faker';
import mongoose from 'mongoose';
import { connectToDb } from './utils/connectToDb.js';
import { customerRouter } from './routers/customerRouter.js';
import { fakeDataController } from './controllers/fakeDataController.js';
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

/* const Person = mongoose.model('Person', PersonSchema);

const persons = [];

for (let i = 1; i <= 20; i++) {
  const firstName = faker.person.firstName();
  const lastName = faker.person.lastName();
  const email = faker.internet.email();
  persons.push({
    firstName: firstName,
    lastName: lastName,
    email: email,
  });
} 

persons.forEach((person) => Person.create(person));
*/

app.use('/customer', customerRouter);
app.post('/fake', fakeDataController);

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
