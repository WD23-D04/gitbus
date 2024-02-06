import mongoose from 'mongoose';

export const employeeSchema = new mongoose.Schema(
  {
    PersonalInfo,
    startedDate: Date,
    role: String,
    vacationDays: Number,
    vacationTaken: [{ start: Date, end: Date }],
    leaveDays: [{ start: Date, end: Date }],
    services: { type: mongoose.Types.ObjectId, ref: 'Travel' },
  },
  {
    timestamps: true,
  }
);

export const Employee = mongoose.model('Employee', employeeSchema);
