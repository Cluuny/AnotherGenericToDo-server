import mongoose from "mongoose";
const Schema = mongoose.Schema;

const taskSchema = new Schema({
  title: String,
  dueDate: Date,
  done: Boolean,
  id: String,
  createdOn: Date,
});

const taskModel = mongoose.model("Task", taskSchema);

export default taskModel;
