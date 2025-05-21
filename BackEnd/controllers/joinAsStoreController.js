const JoinAsStore = require("../models/JoinAsStore");
const bcrypt = require("bcryptjs");
const User = require("../models/User"); // ✅ استدعاء موديل اليوزر


///////////////////////////////////////////////////////
exports.createStoreRequest = async (req, res) => {
  try {
    const {
      storeName,
      ownerName,
      email,
      phone,
      address,
      storeType,
      licenseNumber,
      experience,
      password, // ✨ استقبل كلمة المرور
      agreement,
    } = req.body;

    // تحقق إذا المستخدم موجود
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res
        .status(400)
        .json({ message: "البريد الإلكتروني مستخدم من قبل" });
    }
    console.log("🛡️ كلمة المرور المستلمة:", password);
    // تشفير كلمة المرور
    if (!password) {
      return res.status(400).json({ message: "كلمة المرور مطلوبة" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    

    // إنشاء المستخدم
    const newUser = new User({
      name: ownerName,
      email,
      password: hashedPassword, // ✨ حفظ الكلمة المشفرة
      role: "user", // مبدئياً user (حتى يتم الموافقة عليه لاحقاً ويصبح "store")
    });
    await newUser.save();

    // إنشاء طلب الانضمام
    const newRequest = new JoinAsStore({
      storeName,
      ownerName,
      email,
      phone,
      address,
      storeType,
      licenseNumber,
      experience,
      agreement,
      userId: newUser._id, // ✨ اربط الطلب بالمستخدم
    });
    await newRequest.save();

    res
      .status(201)
      .json({ message: "تم تسجيل الطلب وإنشاء المستخدم بنجاح ✅" });
    } catch (error) {
      console.error("💥 خطأ في السيرفر:", error.message); // اطبع الرسالة الأساسية للخطأ
      res.status(500).json({ message: "❌ حدث خطأ أثناء تسجيل الطلب", error: error.message });
    }
};
/////////////////////////////////////////////////////////////




exports.getStores = async (req, res) => {
  try {
    const stores = await JoinAsStore.find().sort({ createdAt: -1 }); // آخر الطلبات أولاً
    res.status(200).json(stores);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "حدث خطأ أثناء جلب المحلات" });
  }
};

exports.updateStoreApproval = async (req, res) => {
  const { id } = req.params;
  const { isApproved } = req.body;

  try {
    // تحديث حالة الطلب
    const updatedStore = await JoinAsStore.findByIdAndUpdate(
      id,
      { isApproved },
      { new: true }
    );

    if (!updatedStore) {
      return res.status(404).json({ message: "لم يتم العثور على المحل" });
    }

    // 💥 إضافة الترقية إلى store إذا تمت الموافقة
    if (isApproved) {
      const user = await User.findOne({ email: updatedStore.email });
      if (user) {
        user.role = "store"; // تحويل الدور إلى store
        await user.save();
      }
    }

    res.status(200).json({
      message: "تم تحديث حالة الموافقة وترقية المستخدم بنجاح ✅",
      store: updatedStore,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "❌ حدث خطأ أثناء التحديث" });
  }
};

exports.getApprovedStores = async (req, res) => {
  try {
    const approvedStores = await JoinAsStore.find({ isApproved: true }).sort({
      createdAt: -1,
    });
    res.status(200).json(approvedStores);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "❌ حدث خطأ أثناء جلب المحلات المعتمدة" });
  }
};
