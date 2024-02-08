import express from 'express';

import {
  getSingleStop,
  getAllStops,
  getFilteredStops,
  addSingleStop,
  updateSingleStop,
  deleteSingleStop,
} from '../controllers/stopController.js';

export const stopRouter = express.Router();

stopRouter
  .route('/')
  .get((req, res) =>
    req.query ? getFilteredStops(req, res) : getAllStops(req, res)
  )
  .post(addSingleStop);
stopRouter
  .route('/:id')
  .get(getSingleStop)
  .patch(updateSingleStop)
  .delete(deleteSingleStop);
