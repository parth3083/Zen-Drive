const { Long } = require("mongodb");
const mongoose = require("mongoose");
require("dotenv").config();

mongoose
  .connect(process.env.MONGODB_URI)
  .then((error) => console.log("MongoDB connection successful 🔥🔥🔥🔥🔥"))
  .catch((error) => console.log(error));
module.exports = mongoose;
