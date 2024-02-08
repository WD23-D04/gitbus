import express from 'express';

import {
  getSingleTravel,
  getAllTravels,
  getFilteredTravels,
  addSingleTravel,
  updateSingleTravel,
  deleteSingleTravel,
} from '../controllers/travelController.js';

export const travelRouter = express.Router();

travelRouter
  .route('/')
  .get((req, res) =>
    req.query ? getFilteredTravels(req, res) : getAllTravels(req, res)
  )
  .post(addSingleTravel);
travelRouter
  .route('/:id')
  .get(getSingleTravel)
  .patch(updateSingleTravel)
  .delete(deleteSingleTravel);
