import express from 'express';

import {
  getSingleRoute,
  getAllRoutes,
  getFilteredRoutes,
  addSingleRoute,
  updateSingleRoute,
  deleteSingleRoute,
} from '../controllers/routeController.js';

export const routeRouter = express.Router();

routeRouter
  .route('/')
  .get((req, res) =>
    req.query ? getFilteredRoutes(req, res) : getAllRoutes(req, res)
  )
  .post(addSingleRoute);
routeRouter
  .route('/:id')
  .get(getSingleRoute)
  .patch(updateSingleRoute)
  .delete(deleteSingleRoute);
