import express from 'express';

import {
  getSingleStop,
  getAllStops,
  addSingleStop,
  updateSingleStop,
  deleteSingleStop,
} from '../controllers/StopController.js';

export const stopRouter = express.Router();

stopRouter.route('/').get(getAllStops).post(addSingleStop);
stopRouter
  .route('/:id')
  .get(getSingleStop)
  .patch(updateSingleStop)
  .delete(deleteSingleStop);
