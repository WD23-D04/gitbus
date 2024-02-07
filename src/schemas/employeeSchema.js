import mongoose from 'mongoose';

import { leaveDaysSubdocument } from './subdocuments/leaveDaysSubdocument.js';
import { personInfoSubdocument } from './subdocuments/personInfoSubdocument.js';

const employeeSchema = new mongoose.Schema(
  {
    ...personInfoSubdocument.obj,
    startedDate: Date,
    role: String,
    vacationDays: Number,
    vacationTaken: [leaveDaysSubdocument],
    leaveDays: [leaveDaysSubdocument],
    services: [{ type: mongoose.Types.ObjectId, ref: 'Travel' }],
  },
  {
    timestamps: true,
  }
);

export const Employee = mongoose.model('Employee', employeeSchema);


