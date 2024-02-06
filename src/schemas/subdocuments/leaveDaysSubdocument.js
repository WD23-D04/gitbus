import mongoose from 'mongoose';

export const leaveDaysSubdocument = new mongoose.Schema({
  leave: { start: Date, end: Date },
});
