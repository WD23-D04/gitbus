import express from 'express';

import {
  getSingleEmployee,
  getAllEmployees,
  addSingleEmployee,
  updateSingleEmployee,
  deleteSingleEmployee,
} from '../controllers/employeeController.js';

export const employeeRouter = express.Router();

employeeRouter.route('/').get(getAllEmployees).post(addSingleEmployee);
employeeRouter
  .route('/:id')
  .get(getSingleEmployee)
  .patch(updateSingleEmployee)
  .delete(deleteSingleEmployee);
