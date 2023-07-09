const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Please add user name"],
      unique: [true, "Username already taken"],
    },
    email: {
      type: String,
      required: [true, "Please add user email"],
      unique: [true, "Email address already taken"],
    },
    password: {
      type: String,
      required: [true, "Please add password"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
