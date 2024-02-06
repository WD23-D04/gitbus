import express from 'express';

import {
  addSingleCustomer,
  getSingleCustomer,
  getAllCustomers,
  updateSingleCustomer,
  deleteSingleCustomer,
} from '../controllers/customerController.js';

export const customerRouter = express.Router();

customerRouter.route('/').post(addSingleCustomer).get(getAllCustomers);
customerRouter
  .route('/:id')
  .get(getSingleCustomer)
  .patch(updateSingleCustomer)
  .delete(deleteSingleCustomer);
