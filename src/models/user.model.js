import mongoose from "mongoose";
const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstName: String,
  lastName: String,
  email: String,
  credential: String,
});

const userModel = mongoose.model("User", userSchema);

export default userModel;
