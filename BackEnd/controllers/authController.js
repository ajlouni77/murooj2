const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Profile = require("../models/Profile");
require("dotenv").config();

// تسجيل مستخدم جديد
exports.registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const existing = await User.findOne({ email });
    if (existing)
      return res.status(400).json({ message: "البريد مستخدم من قبل" });

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ name, email, password: hashedPassword });

    await Profile.create({
      userId: user._id,
      name: user.name,
      email: user.email,
      addresses: [],
      cards: [],
      orders: [],
    });

    const token = jwt.sign(
      { userId: user._id, name, email },
      process.env.JWT_SECRET,
      {
        expiresIn: "1h",
      }
    );

    res.status(201).json({
      message: "تم التسجيل بنجاح",
      userId: user._id,
      name,
      email,
      token,
    });
  } catch (err) {
    console.error("Register Error:", err);
    res.status(500).json({ message: "حدث خطأ أثناء التسجيل" });
  }
};

// تسجيل الدخول
exports.loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "المستخدم غير موجود" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "كلمة المرور غير صحيحة" });
    }

    const token = jwt.sign({ userId: user._id,email }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.status(200).json({
      message: "تم تسجيل الدخول بنجاح",
      token,
      email,
      userId: user._id,
      role: user.role, // ✨ أضف الدور هنا
    });
  } catch (err) {
    console.error("Login Error:", err);
    res.status(500).json({ message: "حدث خطأ أثناء تسجيل الدخول" });
  }
};



// تسجيل الخروج
exports.logoutUser = async (req, res) => {
  try {
    // عادةً، عند تسجيل الخروج نحتاج فقط لحذف التوكن من جانب العميل
    res.status(200).json({ message: "تم تسجيل الخروج بنجاح" });
  } catch (err) {
    console.error("Logout Error:", err);
    res.status(500).json({ message: "حدث خطأ أثناء تسجيل الخروج" });
  }
};
