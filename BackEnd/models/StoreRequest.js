const mongoose = require("mongoose");

const storeRequestSchema = new mongoose.Schema({
  storeName: { type: String, required: true },
  ownerName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  address: { type: String, required: true },
  storeType: { type: String, required: true },
  licenseNumber: { type: String, required: true },
  experience: { type: String, required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  status: {
    type: String,
    enum: ["pending", "approved", "rejected"],
    default: "pending",
  },
  createdAt: { type: Date, default: Date.now },
});
