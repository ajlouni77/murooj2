// const express = require("express");
// const router = express.Router();
// const {
//   createProduct,
//   updateProduct,
//   deleteProduct,
// } = require("../controllers/productController");
// // const { authenticateUser } = require("../middlewares/authStore"); // التحقق من التوكن

// // حماية المسارات للمستخدمين المصرح لهم فقط
// router.post("/:storeId",  createProduct);
// router.put("/:productId",  updateProduct);
// router.delete("/:productId",  deleteProduct);

// module.exports = router;




const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const {
  addProduct,
  getProductsByStore,
  deleteProduct,
} = require("../controllers/productController");

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads"),
  filename: (req, file, cb) => {
    const unique = Date.now() + path.extname(file.originalname);
    cb(null, unique);
  },
});
const upload = multer({ storage });

router.post("/add", upload.single("image"), addProduct);
router.get("/store/:storeId", getProductsByStore);
router.delete("/delete/:id", deleteProduct);

module.exports = router;
