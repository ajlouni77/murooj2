// routes/profileRoutes.js
// const express = require("express");
// const router = express.Router();
// const profileController = require("../controllers/profileController");

const express = require("express");
const router = express.Router();
const profileController = require("../controllers/profileController");
// استرجاع ملف المستخدم الشخصي
router.get("/:id", profileController.getProfile);

// تحديث بيانات الملف الشخصي
router.put("/:id", profileController.updateProfile);

// إضافة عنوان جديد
router.post("/:id/addresses", profileController.addAddress);

// حذف عنوان
router.delete("/:id/addresses/:addressId", profileController.deleteAddress);

// إضافة بطاقة دفع
router.post("/:id/cards", profileController.addCard);

// حذف بطاقة
router.delete("/:id/cards/:cardId", profileController.deleteCard);


module.exports = router;