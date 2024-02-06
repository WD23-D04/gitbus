import express from 'express';

import {
  getSingleRoute,
  getAllRoutes,
  addSingleRoute,
  updateSingleRoute,
  deleteSingleRoute,
} from '../controllers/RouteController.js';

export const RouteRouter = express.Router();

RouteRouter.route('/').get(getAllRoutes).post(addSingleRoute);
RouteRouter
  .route('/:id')
  .get(getSingleRoute)
  .patch(updateSingleRoute)
  .delete(deleteSingleRoute);
