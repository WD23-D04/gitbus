import { Route } from '../schemas/routeSchema.js';

export const addSingleRoute = async (req, res) => {
  try {
    const route = await Route.create(req.body);
    res.status(201).json(route);
  } catch (e) {
    res.status(500).json(e);
  }
};

export const getSingleRoute = async (req, res) => {
  try {
    const route = await Route.findById(req.params.id);
    route
      ? res.status(200).json(route)
      : res
          .status(404)
          .json({ mgs: `Route with id ${req.params.id} not found` });
  } catch (e) {
    res.status(500).json(e);
  }
};

export const getAllRoutes = async (req, res) => {
  try {
    const routes = await Route.find();
    res.status(200).json(routes);
  } catch (e) {
    res.status(500).json(e);
  }
};

export const updateSingleRoute = async (req, res) => {
  try {
    const route = await Route.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    route
      ? res.status(200).json(route)
      : res
          .status(404)
          .json({ mgs: `Route with id ${req.params.id} not found` });
  } catch (e) {
    res.status(500).json(e);
  }
};

export const deleteSingleRoute = async (req, res) => {
  try {
    const route = await Route.findByIdAndDelete(req.params.id);
    route
      ? res.status(200).json(route)
      : res
          .status(404)
          .json({ mgs: `Route with id ${req.params.id} not found` });
  } catch (e) {
    res.status(500).json(e);
  }
};
