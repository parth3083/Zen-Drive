const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  document_urls: { type: [String], default: [] },
  document_names: { type: [String], default: [] },
});

const User = mongoose.model("User", userSchema);
module.exports = User;
