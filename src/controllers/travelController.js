import { Travel } from '../schemas/travelSchema.js';

export const addSingleTravel = async (req, res) => {
  try {
    const travel = await Travel.create(req.body);
    res.status(201).json(travel);
  } catch (e) {
    res.status(500).json(e);
  }
};

export const getSingleTravel = async (req, res) => {
  try {
    const travel = await Travel.findById(req.params.id);
    travel
      ? res.status(200).json(travel)
      : res
          .status(404)
          .json({ mgs: `travel with id ${req.params.id} not found` });
  } catch (e) {
    res.status(500).json(e);
  }
};

export const getAllTravels = async (req, res) => {
  try {
    const travels = await Travel.find();
    res.status(200).json(travels);
  } catch (e) {
    res.status(500).json(e);
  }
};

export const updateSingleTravel = async (req, res) => {
  try {
    const travel = await Travel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    travel
      ? res.status(200).json(travel)
      : res
          .status(404)
          .json({ mgs: `travel with id ${req.params.id} not found` });
  } catch (e) {
    res.status(500).json(e);
  }
};

export const deleteSingleTravel = async (req, res) => {
  try {
    const travel = await Travel.findByIdAndDelete(req.params.id);
    travel
      ? res.status(200).json(travel)
      : res
          .status(404)
          .json({ mgs: `travel with id ${req.params.id} not found` });
  } catch (e) {
    res.status(500).json(e);
  }
};
