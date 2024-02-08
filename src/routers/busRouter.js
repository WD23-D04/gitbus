import express from 'express';

import {
  getSingleBus,
  getFilteredBus,
  getAllBus,
  addSingleBus,
  updateSingleBus,
  deleteSingleBus,
} from '../controllers/busController.js';

export const busRouter = express.Router();

busRouter
  .route('/')
  .get((req, res) =>
    req.query ? getFilteredBus(req, res) : getAllBus(req, res)
  )
  .post(addSingleBus);
busRouter
  .route('/:id')
  .get(getSingleBus)
  .patch(updateSingleBus)
  .delete(deleteSingleBus);
