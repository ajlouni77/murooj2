const Contact = require("../models/Contact");

// إرسال رسالة جديدة
exports.sendMessage = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
      return res.status(400).json({ message: "يرجى تعبئة جميع الحقول" });
    }

    const newMessage = new Contact({ name, email, subject, message });
    await newMessage.save();

    res.status(201).json({ message: "تم إرسال رسالتك بنجاح" });
  } catch (error) {
    console.error("Error saving contact message:", error);
    res.status(500).json({ message: "حدث خطأ أثناء الإرسال" });
  }
};

// جلب جميع الرسائل (غير المحذوفة)
exports.getMessages = async (req, res) => {
  try {
    const messages = await Contact.find({ isDeleted: false }).sort({
      createdAt: -1,
    });
    res.status(200).json(messages);
  } catch (error) {
    console.error("Error fetching contact messages:", error);
    res.status(500).json({ message: "حدث خطأ أثناء جلب الرسائل" });
  }
};

// Soft Delete للرسالة
exports.deleteMessage = async (req, res) => {
  try {
    const updatedMessage = await Contact.findByIdAndUpdate(
      req.params.id,
      {
        isDeleted: true,
        deletedAt: new Date(),
      },
      { new: true }
    );

    if (!updatedMessage) {
      return res.status(404).json({ message: "الرسالة غير موجودة" });
    }

    res.status(200).json({ message: "تم حذف الرسالة بنجاح" });
  } catch (error) {
    console.error("Error deleting contact message:", error);
    res.status(500).json({ message: "حدث خطأ أثناء حذف الرسالة" });
  }
};




