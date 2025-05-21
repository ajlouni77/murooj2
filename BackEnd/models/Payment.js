const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  address: { type: String, required: true },
  phone: { type: String, required: true },
  method: { type: String, required: true }, // cash, paypal, visa, etc
  total: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Payment", paymentSchema);
