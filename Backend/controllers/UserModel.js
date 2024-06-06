const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Please Enter  email"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Please Enter password"],
    minLength: [1, "Please Enter valid password"],
  },
});

module.exports = mongoose.model("User", userSchema);
