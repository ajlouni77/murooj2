const mongoose = require("mongoose");

const driverSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  about: { type: String, required: true },
  agreement: { type: Boolean, required: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Driver", driverSchema);
