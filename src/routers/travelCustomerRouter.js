import express from 'express';

import {
  getSingleTravelCustomer,
  getAllTravelCustomers,
  addSingleTravelCustomer,
  updateSingleTravelCustomer,
  deleteSingleTravelCustomer,
} from '../controllers/TravelCustomerController.js';

export const travelCustomerRouter = express.Router();

travelCustomerRouter
  .route('/')
  .get(getAllTravelCustomers)
  .post(addSingleTravelCustomer);
travelCustomerRouter
  .route('/:id')
  .get(getSingleTravelCustomer)
  .patch(updateSingleTravelCustomer)
  .delete(deleteSingleTravelCustomer);
