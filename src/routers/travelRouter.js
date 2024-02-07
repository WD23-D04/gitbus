import express from 'express';

import {
  getSingleTravel,
  getAllTravels,
  addSingleTravel,
  updateSingleTravel,
  deleteSingleTravel,
} from '../controllers/travelController.js';

export const travelRouter = express.Router();

travelRouter
  .route('/')
  .get(getAllTravels)
  .post(addSingleTravel);
  travelRouter
  .route('/:id')
  .get(getSingleTravel)
  .patch(updateSingleTravel)
  .delete(  deleteSingleTravel,
    );
