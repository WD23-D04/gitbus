import express from 'express';
import dotenv from 'dotenv';
import { connectToDb } from './utils/connectToDb.js';

import { busRouter } from './routers/busRouter.js';
import { customerRouter } from './routers/customerRouter.js';
import { employeeRouter } from './routers/employeeRouter.js';
import { routeRouter } from './routers/routeRouter.js';
import { stopRouter } from './routers/stopRouter.js';
import { travelCustomerRouter } from './routers/travelCustomerRouter.js';
import { travelRouter } from './routers/travelRouter.js';

import { addFakeData, deleteAllFakeData } from './utils/addFakeData.js';
dotenv.config();

const app = express();

const DB_URI = process.env.DB_URI;
const PORT = process.env.PORT || 3030;


app.use(express.json());

app.use('/bus', busRouter);
app.use('/customer', customerRouter);
app.use('/employee', employeeRouter);
app.use('/route', routeRouter);
app.use('/stop', stopRouter);
app.use('/travelCustomer', travelCustomerRouter);
app.use('/travel', travelRouter);
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
