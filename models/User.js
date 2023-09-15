import { model, Schema } from "mongoose";

const UserSchema = new Schema({
  name: String,
  email: String,
  password: String
});

export const User = new model("User", UserSchema);
