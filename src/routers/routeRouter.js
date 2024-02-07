import express from 'express';

import {
  getSingleRoute,
  getAllRoutes,
  addSingleRoute,
  updateSingleRoute,
  deleteSingleRoute,
} from '../controllers/routeController.js';

export const routeRouter = express.Router();

routeRouter.route('/').get(getAllRoutes).post(addSingleRoute);
routeRouter
  .route('/:id')
  .get(getSingleRoute)
  .patch(updateSingleRoute)
  .delete(deleteSingleRoute);
