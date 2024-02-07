import { TravelCustomerLink } from '../schemas/travelCustomerLinkSchema.js';

export const addSingleTravelCustomer = async (req, res) => {
  try {
    const TravelCustomer = await TravelCustomerLink.create(req.body);
    res.status(201).json(TravelCustomer);
  } catch (e) {
    res.status(500).json(e);
  }
};

export const getSingleTravelCustomer = async (req, res) => {
  try {
    const TravelCustomer = await TravelCustomerLink.findById(req.params.id);
    TravelCustomer
      ? res.status(200).json(TravelCustomer)
      : res
          .status(404)
          .json({ mgs: `TravelCustomer with id ${req.params.id} not found` });
  } catch (e) {
    res.status(500).json(e);
  }
};

export const getAllTravelCustomers = async (req, res) => {
  try {
    const TravelCustomers = await TravelCustomerLink.find();
    res.status(200).json(TravelCustomers);
  } catch (e) {
    res.status(500).json(e);
  }
};

export const updateSingleTravelCustomer = async (req, res) => {
  try {
    const TravelCustomer = await TravelCustomerLink.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    TravelCustomer
      ? res.status(200).json(TravelCustomer)
      : res
          .status(404)
          .json({ mgs: `TravelCustomer with id ${req.params.id} not found` });
  } catch (e) {
    res.status(500).json(e);
  }
};

export const deleteSingleTravelCustomer = async (req, res) => {
  try {
    const TravelCustomer = await TravelCustomerLink.findByIdAndDelete(req.params.id);
    TravelCustomer
      ? res.status(200).json(TravelCustomer)
      : res
          .status(404)
          .json({ mgs: `TravelCustomer with id ${req.params.id} not found` });
  } catch (e) {
    res.status(500).json(e);
  }
};
