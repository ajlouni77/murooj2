const express = require("express");
// const {body}  = require("express-validator");
const upload = require('../middlewares/upload'); // For handling image uploads
const storeAuth = require("../middleware/storeAuth"); // For store authentication middleware
const productController = require("../controllers/productController"); // Import product controller
const multer = require("multer");


const router = express.Router();

// Route to create a new product
router.post(
  "/",
//   storeAuth, // Protect the route by ensuring the store is authenticated
  upload.array("images", 5), // Handle file uploads (5 images max)
  productController.createProduct // Call createProduct from the controller
);

// Route to get all products by storeId
router.get("/:storeId", productController.getProductsByStore);

// Route to update a product by its ID



router.put(
  "/:id",
//   storeAuth, // Protect the route by ensuring the store is authenticated
  upload.array("images", 5), // Allow image upload for product updates

  productController.updateProduct // Call updateProduct from the controller
);

// Route to delete a product by its ID
router.delete("/:id", storeAuth, productController.deleteProduct);

module.exports = router;
