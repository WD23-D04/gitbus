import { Bus } from '../schemas/busSchema.js';

export const addSingleBus = async (req, res) => {
  try {
    const bus = await Bus.create(req.body);
    res.status(201).json(bus);
  } catch (e) {
    res.status(500).json(e);
  }
};

export const getSingleBus = async (req, res) => {
  try {
    const bus = await Bus.findById(req.params.id);
    bus
      ? res.status(200).json(bus)
      : res
          .status(404)
          .json({ mgs: `bus with id ${req.params.id} not found` });
  } catch (e) {
    res.status(500).json(e);
  }
};

export const getAllBus = async (req, res) => {
  try {
    const bus = await Bus.find();
    res.status(200).json(bus);
  } catch (e) {
    res.status(500).json(e);
  }
};

export const updateSingleBus = async (req, res) => {
  try {
    const bus = await Bus.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    bus
      ? res.status(200).json(bus)
      : res
          .status(404)
          .json({ mgs: `bus with id ${req.params.id} not found` });
  } catch (e) {
    res.status(500).json(e);
  }
};

export const deleteSingleBus = async (req, res) => {
  try {
    const bus = await Bus.findByIdAndDelete(req.params.id);
    bus
      ? res.status(200).json(bus)
      : res
          .status(404)
          .json({ mgs: `bus with id ${req.params.id} not found` });
  } catch (e) {
    res.status(500).json(e);
  }
};
