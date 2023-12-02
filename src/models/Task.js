import { Schema, model } from 'mongoose';

const taskSchema = new Schema(
  {
    title: String,
    description: String,
    done: Boolean
  },
  {
    timestamps: true
  }
);

export default model('Task', taskSchema);
