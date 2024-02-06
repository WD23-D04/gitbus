import { Stop } from '../schemas/stopSchema.js';

export const addSingleStop = async (req, res) => {
  try {
    const stop = await Stop.create(req.body);
    res.status(201).json(stop);
  } catch (e) {
    res.status(500).json(e);
  }
};

export const getSingleStop = async (req, res) => {
  try {
    const stop = await Stop.findById(req.params.id);
    stop
      ? res.status(200).json(stop)
      : res
          .status(404)
          .json({ mgs: `stop with id ${req.params.id} not found` });
  } catch (e) {
    res.status(500).json(e);
  }
};

export const getAllStops = async (req, res) => {
  try {
    const stops = await Stop.find();
    res.status(200).json(stops);
  } catch (e) {
    res.status(500).json(e);
  }
};

export const updateSingleStop = async (req, res) => {
  try {
    const stop = await Stop.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    stop
      ? res.status(200).json(stop)
      : res
          .status(404)
          .json({ mgs: `stop with id ${req.params.id} not found` });
  } catch (e) {
    res.status(500).json(e);
  }
};

export const deleteSingleStop = async (req, res) => {
  try {
    const stop = await Stop.findByIdAndDelete(req.params.id);
    stop
      ? res.status(200).json(stop)
      : res
          .status(404)
          .json({ mgs: `stop with id ${req.params.id} not found` });
  } catch (e) {
    res.status(500).json(e);
  }
};
