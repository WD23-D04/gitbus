import express from 'express';

import {
  getSingleStop,
  getAllStops,
  addSingleStop,
  updateSingleStop,
  deleteSingleStop,
} from '../controllers/StopController.js';

export const StopStopr = express.Stopr();

StopStopr.Stop('/').get(getAllStops).post(addSingleStop);
StopStopr
  .Stop('/:id')
  .get(getSingleStop)
  .patch(updateSingleStop)
  .delete(deleteSingleStop);
