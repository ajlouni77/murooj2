const express = require("express");
const router = express.Router();
const {
  submitPayment,
  deletePayment,
  getPayments,
} = require("../controllers/paymentController");

router.post("/", submitPayment);

router.get("/", getPayments);

// مسار لحذف المدفوعات
router.delete("/:paymentId", deletePayment);

module.exports = router;
