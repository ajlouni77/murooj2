const mongoose = require("mongoose");

const storeSchema = new mongoose.Schema(
  {
    storeName: { type: String, required: true },
    ownerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    address: { type: String, required: true },
    openHours: { type: String, required: true }, // "9:00 AM - 6:00 PM"
    paymentMethods: [String], // ["Visa", "Cash on Delivery"]
    products: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }],
    sales: {
      daily: { type: Number, default: 0 },
      weekly: { type: Number, default: 0 },
      monthly: { type: Number, default: 0 },
    },
    orders: [{ type: mongoose.Schema.Types.ObjectId, ref: "Order" }],
  },
  { timestamps: true }      
);



//////////////////////////////////////////////

//////////////////////////////////////////////

const Store = mongoose.model("Store", storeSchema);
module.exports = Store;
