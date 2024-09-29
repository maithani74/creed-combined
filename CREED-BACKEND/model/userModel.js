const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    confirmPassword: {
      type: String,
    },
    role: {
      type: Number,
      default: 0,
    },
    cart: {
      type: [],
      default: [],
    },
    image: {
      type: String,
    },
  },
  { timestamps: true },
);

exports.User = mongoose.model("User", userSchema);
