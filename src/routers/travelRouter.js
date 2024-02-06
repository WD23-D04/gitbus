import express from 'express';

import {
  getSingleTravelRouter,
  getAllTravelRouters,
  addSingleTravelRouter,
  updateSingleTravelRouter,
  deleteSingleTravelRouter,
} from '../controllers/TravelRouterController.js';

export const TravelRouterRouter = express.Router();

TravelRouterRouter
  .route('/')
  .get(getAllTravelRouters)
  .post(addSingleTravelRouter);
TravelRouterRouter
  .route('/:id')
  .get(getSingleTravelRouter)
  .patch(updateSingleTravelRouter)
  .delete(deleteSingleTravelRouter);
