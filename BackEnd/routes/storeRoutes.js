// const express = require("express");
// const router = express.Router();
// const {createStore,updateStore,deleteStore,
// } = require("../controllers/storeController");
// const storeAuthMiddleware = require("../middlewares/storeAuthMiddleware"); 
/////////////////////////////////////////////
const express = require("express");
const router = express.Router();
const StoreRequest = require("../models/StoreRequest");
const User = require("../models/User");
// const auth = require("../middleware/auth");
const adminAuth = require("../middlewares/adminAuth");
/////////////////////////////////////////////




////////////////////////////////////////////
router.post("/joinasstore",  async (req, res) => {
  try {
    const { userId, ...storeData } = req.body;

    const storeRequest = new StoreRequest({
      ...storeData,
      userId,
      status: "pending",
    });

    await storeRequest.save();
    res.status(201).send(storeRequest);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

// الحصول على طلبات المحلات (للمشرف)
router.get("/admin/store-requests", adminAuth, async (req, res) => {
  try {
    const requests = await StoreRequest.find({});
    res.send(requests);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

// الموافقة على طلب محل
router.put("/admin/store-requests/:id/approve", adminAuth, async (req, res) => {
  try {
    const request = await StoreRequest.findByIdAndUpdate(
      req.params.id,
      { status: "approved" },
      { new: true }
    );

    // تحديث دور المستخدم إلى "store"
    await User.findByIdAndUpdate(req.body.userId, { role: "store" });

    res.send(request);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

// رفض طلب محل
router.put("/admin/store-requests/:id/reject", adminAuth, async (req, res) => {
  try {
    const request = await StoreRequest.findByIdAndUpdate(
      req.params.id,
      { status: "rejected" },
      { new: true }
    );
    res.send(request);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

// إرسال بريد الموافقة
router.post("/admin/send-approval-email", adminAuth, async (req, res) => {
  try {
    const request = await StoreRequest.findById(req.body.requestId);

    // هنا يمكنك استخدام خدمة إرسال البريد الإلكتروني مثل nodemailer
    // لإرسال بريد للمستخدم يخبره بموافقة طلبه

    res.send({ message: "تم إرسال بريد الموافقة بنجاح" });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});
////////////////////////////////////////////







// Routes
// router.post("/", );
// router.put("/:storeId", storeAuthMiddleware, updateStore);
// router.delete("/:storeId", storeAuthMiddleware, deleteStore); 

module.exports = router;
