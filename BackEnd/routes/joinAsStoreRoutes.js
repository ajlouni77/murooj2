const express = require("express");
const router = express.Router();
const {
  createStoreRequest,
  getStores, // ✅ استيراد الدالة الجديدة
  updateStoreApproval,
  getApprovedStores,
} = require("../controllers/joinAsStoreController");

router.post("/", createStoreRequest);
router.get("/", getStores); // ✅ عرض كل المحلات
router.put("/stores/:id/approval",updateStoreApproval);
router.get("/stores/approved", getApprovedStores);


module.exports = router;