import mongoose from 'mongoose';

import { leaveDaysSubdocument } from './subdocuments/leaveDaysSubdocument.js';
import { personInfoSchema } from './subdocuments/personInfoSubdocument.js';
export const employeeSchema = new mongoose.Schema(
  {
    ...personInfoSchema.obj,
    startedDate: Date,
    role: String,
    vacationDays: Number,
    vacationTaken: [...leaveDaysSubdocument.obj],
    leaveDays: [...leaveDaysSubdocument.obj],
    services: { type: mongoose.Types.ObjectId, ref: 'Travel' },
  },
  {
    timestamps: true,
  }
);

export const Employee = mongoose.model('Employee', employeeSchema);
