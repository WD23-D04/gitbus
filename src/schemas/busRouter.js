import express from 'express';

import {
  getSingleBus,
  getAllBus,
  addSingleBus,
  updateSingleBus,
  deleteSingleBus,
} from '../controllers/busController.js';

export const busRouter = express.Router();

busRouter.route('/').get(getAllBus).post(addSingleBus);
busRouter
  .route('/:id')
  .get(getSingleBus)
  .patch(updateSingleBus)
  .delete(deleteSingleBus);
