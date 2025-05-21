// const mongoose = require("mongoose");

// const productSchema = new mongoose.Schema(
//   {
//     storeId: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "Store",
//       required: true,
//     },
//     name: { type: String, required: true },
//     description: { type: String },
//     price: { type: Number, required: true },
//     stock: { type: Number, required: true }, // الكمية المتاحة
//     category: { type: String, required: true },
//     image: { type: String }, // رابط للصورة
//   },
//   { timestamps: true }
// );

// const Product = mongoose.model("Product", productSchema);

// module.exports = Product;

const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: true },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);