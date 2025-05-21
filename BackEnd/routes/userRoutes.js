const express = require("express");
const router = express.Router();
const User = require("../models/User");

// تحديث دور المستخدم
router.put("/users/:id/role", async (req, res) => {
  try {
    const { role } = req.body;
    const user = await User.findByIdAndUpdate(
      req.params.id,
      { role },
      { new: true }
    );
    if (!user) {
      return res.status(404).json({ message: "المستخدم غير موجود" });
    }
    res.json({ message: "تم تحديث دور المستخدم بنجاح", user });
  } catch (error) {
    console.error("خطأ في تحديث الدور:", error);
    res.status(500).json({ message: "حدث خطأ أثناء التحديث" });
  }
});

module.exports = router;
