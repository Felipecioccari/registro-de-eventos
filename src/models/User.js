import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    id: {type: String},
    name:{
      type: String,
      required: [true, "O nome é obrigatório"]
    },
    email: {
      type: String,
      required: [true, "O email é obrigatório"]
    },
    password: {
      type: String,
      required: [true, "A senha é obrigatória"],
    },
    score: {
      type: Number,
    }
  }
);

const users = mongoose.model("users", userSchema);

export default users;