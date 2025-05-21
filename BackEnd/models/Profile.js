const mongoose = require("mongoose");

const AddressSchema = new mongoose.Schema({
  text: { type: String, required: true },
  isDefault: { type: Boolean, default: false },
});

const CardSchema = new mongoose.Schema({
  type: { type: String, required: true },
  last4: { type: String, required: true },
  expiry: { type: String, required: true },
});

const OrderSchema = new mongoose.Schema({
  date: { type: String, required: true },
  amount: { type: Number, required: true },
  status: {
    type: String,
    enum: ["delivered", "processing", "pending", "cancelled"],
    default: "pending",
  },
});

const ProfileSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    name: { type: String, required: true },
    email: { type: String, required: true },
    addresses: [AddressSchema],
    cards: [CardSchema],
    orders: [OrderSchema],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Profile", ProfileSchema);

