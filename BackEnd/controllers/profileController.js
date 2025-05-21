const Profile = require("../models/Profile");

exports.getProfile = async (req, res) => {
  try {
    const profile = await Profile.findOne({ userId: req.params.id });
    if (!profile) {
      return res.status(404).json({ message: "الملف الشخصي غير موجود" });
    }
    res.json(profile);
  } catch (err) {
    res
      .status(500)
      .json({ message: "حدث خطأ أثناء جلب الملف الشخصي", error: err });
  }
};

exports.updateProfile = async (req, res) => {
  try {
    const updated = await Profile.findOneAndUpdate(
      { userId: req.params.id },
      { ...req.body },
      { new: true, upsert: true }
    );
    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: "فشل في تحديث الملف الشخصي", error: err });
  }
};

exports.addAddress = async (req, res) => {
  try {
    const profile = await Profile.findOne({ userId: req.params.id });
    if (!profile) return res.status(404).json({ message: "الملف غير موجود" });

    profile.addresses.push(req.body);
    await profile.save();
    res.json(profile.addresses);
  } catch (err) {
    res.status(500).json({ message: "خطأ في إضافة العنوان", error: err });
  }
};

exports.deleteAddress = async (req, res) => {
  try {
    const profile = await Profile.findOne({ userId: req.params.id });
    if (!profile) return res.status(404).json({ message: "الملف غير موجود" });

    profile.addresses = profile.addresses.filter(
      (a) => a._id.toString() !== req.params.addressId
    );
    await profile.save();
    res.json(profile.addresses);
  } catch (err) {
    res.status(500).json({ message: "خطأ في حذف العنوان", error: err });
  }
};

exports.addCard = async (req, res) => {
  try {
    const profile = await Profile.findOne({ userId: req.params.id });
    if (!profile) return res.status(404).json({ message: "الملف غير موجود" });

    profile.cards.push(req.body);
    await profile.save();
    res.json(profile.cards);
  } catch (err) {
    res.status(500).json({ message: "فشل في إضافة البطاقة", error: err });
  }
};

exports.deleteCard = async (req, res) => {
  try {
    const profile = await Profile.findOne({ userId: req.params.id });
    if (!profile) return res.status(404).json({ message: "الملف غير موجود" });

    profile.cards = profile.cards.filter(
      (c) => c._id.toString() !== req.params.cardId
    );
    await profile.save();
    res.json(profile.cards);
  } catch (err) {
    res.status(500).json({ message: "فشل في حذف البطاقة", error: err });
  }
};
