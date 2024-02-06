import { Employee } from '../schemas/EmployeeSchema.js';

export const addSingleEmployee = async (req, res) => {
  try {
    const employee = await Employee.create(req.body);
    res.status(201).json(employee);
  } catch (e) {
    res.status(500).json(e);
  }
};

export const getSingleEmployee = async (req, res) => {
  try {
    const employee = await Employee.findById(req.params.id);
    employee
      ? res.status(200).json(employee)
      : res
          .status(404)
          .json({ mgs: `Employee with id ${req.params.id} not found` });
  } catch (e) {
    res.status(500).json(e);
  }
};

export const getAllEmployees = async (req, res) => {
  try {
    const employees = await Employee.find();
    res.status(200).json(employees);
  } catch (e) {
    res.status(500).json(e);
  }
};

export const updateSingleEmployee = async (req, res) => {
  try {
    const employee = await Employee.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    employee
      ? res.status(200).json(employee)
      : res
          .status(404)
          .json({ mgs: `Employee with id ${req.params.id} not found` });
  } catch (e) {
    res.status(500).json(e);
  }
};

export const deleteSingleEmployee = async (req, res) => {
  try {
    const employee = await Employee.findByIdAndDelete(req.params.id);
    employee
      ? res.status(200).json(employee)
      : res
          .status(404)
          .json({ mgs: `Employee with id ${req.params.id} not found` });
  } catch (e) {
    res.status(500).json(e);
  }
};
