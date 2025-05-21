const mongoose = require("mongoose");

const JoinAsStoreSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" }, /////
    storeName: { type: String, required: true },
    ownerName: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    address: { type: String, required: true },
    storeType: { type: String, required: true },
    licenseNumber: { type: String, required: true },
    experience: { type: String, required: true },
    agreement: { type: Boolean, required: true },
    isApproved: { type: Boolean, default: false }, // ✅ جديد
  },
  { timestamps: true }
);

module.exports = mongoose.model("JoinAsStore", JoinAsStoreSchema);
