import { Customer } from '../schemas/customerSchema.js';

export const addSingleCustomer = async (req, res) => {
  try {
    const customer = await Customer.create(req.body);
    res.status(201).json(customer);
  } catch (e) {
    res.status(500).json(e);
  }
};

export const getAllCustomers = async (req, res) => {
  try {
    const customers = await Customer.find();
    res.status(200).json(customers);
  } catch (e) {
    res.status(500).json(e);
  }
};
export const getSingleCustomer = async (req, res) => {
  try {
    const customer = await Customer.findById(req.params.id);
    customer
      ? res.status(200).json(customer)
      : res.status(404).json({ msg: 'customer not found' });
  } catch (e) {
    res.status(500).json(e);
  }
};

export const updateSingleCustomer = async (req, res) => {
  try {
    const customer = await Customer.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    customer
      ? res.status(200).json(customer)
      : res.status(404).json({ msg: 'customer not found' });
  } catch (e) {
    res.status(500).json(e);
  }
};
export const deleteSingleCustomer = async (req, res) => {
  try {
    const customer = await Customer.findByIdAndDelete(req.params.id);
    customer
      ? res.status(200).json(customer)
      : res.status(404).json({ msg: 'customer not found' });
  } catch (e) {
    res.status(500).json(e);
  }
};
