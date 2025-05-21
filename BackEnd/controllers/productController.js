// const Product = require("../models/Product");
// const Store = require("../../models/Store");

// exports.createProduct = async (req, res) => {
//   const { storeId } = req.params;
//   const { name, description, price, stock, category, image } = req.body;

//   try {
//     const store = await Store.findById(storeId);
//     if (!store) return res.status(404).json({ message: "المحل غير موجود" });

//     const newProduct = new Product({
//       storeId,
//       name,
//       description,
//       price,
//       stock,
//       category,
//       image,
//     });

//     await newProduct.save();
//     store.products.push(newProduct._id);
//     await store.save();

//     res.status(201).json(newProduct);
//   } catch (err) {
//     res.status(500).json({ message: "حدث خطأ أثناء إضافة المنتج" });
//   }
// };

// exports.updateProduct = async (req, res) => {
//   const { productId } = req.params;
//   const { name, description, price, stock, category, image } = req.body;

//   try {
//     const product = await Product.findByIdAndUpdate(
//       productId,
//       { name, description, price, stock, category, image },
//       { new: true }
//     );
//     if (!product) return res.status(404).json({ message: "المنتج غير موجود" });
//     res.json(product);
//   } catch (err) {
//     res.status(500).json({ message: "حدث خطأ أثناء تحديث المنتج" });
//   }
// };

// exports.deleteProduct = async (req, res) => {
//   const { productId } = req.params;

//   try {
//     const product = await Product.findByIdAndDelete(productId);
//     if (!product) return res.status(404).json({ message: "المنتج غير موجود" });

//     const store = await Store.findById(product.storeId);
//     store.products = store.products.filter((id) => id.toString() !== productId);
//     await store.save();

//     res.status(200).json({ message: "تم حذف المنتج بنجاح" });
//   } catch (err) {
//     res.status(500).json({ message: "حدث خطأ أثناء حذف المنتج" });
//   }
// };



































const Product = require("../models/Product");
const path = require("path");
const fs = require("fs");

exports.addProduct = async (req, res) => {
  try {
    const { name, price, owner } = req.body;
    const image = req.file.filename;

    const product = new Product({ name, price, image, owner });
    await product.save();

    res.status(201).json({ message: "تمت إضافة المنتج بنجاح", product });
  } catch (err) {
    console.error("خطأ في إضافة المنتج:", err);
    res.status(500).json({ message: "فشل في إضافة المنتج" });
  }
};

exports.getProductsByStore = async (req, res) => {
  try {
    const { storeId } = req.params;
    const products = await Product.find({ owner: storeId }).sort({
      createdAt: -1,
    });
    res.status(200).json(products);
  } catch (err) {
    console.error("خطأ في جلب المنتجات:", err);
    res.status(500).json({ message: "فشل في جلب المنتجات" });
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: "المنتج غير موجود" });

    // حذف الصورة من الخادم
    const imagePath = path.join(__dirname, "../uploads", product.image);
    if (fs.existsSync(imagePath)) fs.unlinkSync(imagePath);

    await product.deleteOne();
    res.status(200).json({ message: "تم حذف المنتج بنجاح" });
  } catch (err) {
    console.error("خطأ في حذف المنتج:", err);
    res.status(500).json({ message: "فشل في حذف المنتج" });
  }
};