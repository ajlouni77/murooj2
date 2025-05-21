const Driver = require("../models/Driver");

exports.submitApplication = async (req, res) => {
  try {
    const { name, email, phone, about, agreement } = req.body;

    if (!name || !email || !phone || !about || !agreement) {
      return res
        .status(400)
        .json({ message: "يرجى تعبئة جميع الحقول والموافقة على الشروط" });
    }

    const newDriver = new Driver({ name, email, phone, about, agreement });
    await newDriver.save();

    res.status(201).json({ message: "تم إرسال الطلب بنجاح" });
  } catch (error) {
    console.error("Join Us Error:", error);
    res.status(500).json({ message: "حدث خطأ أثناء إرسال الطلب" });
  }
};
