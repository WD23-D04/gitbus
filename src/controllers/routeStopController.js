import { RouteStop } from '../schemas/RouteStopSchema.js';

export const addSingleRouteStop = async (req, res) => {
  try {
    const routeStop = await RouteStop.create(req.body);
    res.status(201).json(routeStop);
  } catch (e) {
    res.status(500).json(e);
  }
};

export const getSingleRouteStop = async (req, res) => {
  try {
    const routeStop = await RouteStop.findById(req.params.id);
    routeStop
      ? res.status(200).json(routeStop)
      : res
          .status(404)
          .json({ mgs: `RouteStop with id ${req.params.id} not found` });
  } catch (e) {
    res.status(500).json(e);
  }
};

export const getAllRouteStops = async (req, res) => {
  try {
    const routeStops = await RouteStop.find();
    res.status(200).json(routeStops);
  } catch (e) {
    res.status(500).json(e);
  }
};

export const updateSingleRouteStop = async (req, res) => {
  try {
    const routeStop = await RouteStop.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    routeStop
      ? res.status(200).json(routeStop)
      : res
          .status(404)
          .json({ mgs: `RouteStop with id ${req.params.id} not found` });
  } catch (e) {
    res.status(500).json(e);
  }
};

export const deleteSingleRouteStop = async (req, res) => {
  try {
    const routeStop = await RouteStop.findByIdAndDelete(req.params.id);
    routeStop
      ? res.status(200).json(routeStop)
      : res
          .status(404)
          .json({ mgs: `RouteStop with id ${req.params.id} not found` });
  } catch (e) {
    res.status(500).json(e);
  }
};
