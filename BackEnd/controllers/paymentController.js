const Payment = require("../models/Payment");

exports.submitPayment = async (req, res) => {
  try {
    const { fullName, address, phone, method, total } = req.body;

    if (!fullName || !address || !phone || !method || !total) {
      return res.status(400).json({ message: "جميع الحقول مطلوبة" });
    }

    const newPayment = new Payment({ fullName, address, phone, method, total });
    await newPayment.save();

    res.status(201).json({ message: "✅ تم تأكيد الطلب بنجاح" });
  } catch (error) {
    console.error("❌ Payment Error:", error);
    res.status(500).json({ message: "حدث خطأ أثناء تأكيد الطلب" });
  }
};





// دالة جديدة لجلب المدفوعات
exports.getPayments = async (req, res) => {
  try {
    // جلب جميع المدفوعات من قاعدة البيانات
    const payments = await Payment.find();

    if (!payments || payments.length === 0) {
      return res.status(404).json({ message: "لا توجد مدفوعات حالياً" });
    }

    // إرجاع المدفوعات
    res.status(200).json(payments);
  } catch (error) {
    console.error("❌ Error fetching payments:", error);
    res.status(500).json({ message: "حدث خطأ أثناء جلب المدفوعات" });
  }
};

exports.deletePayment = async (req, res) => {
  try {
    const { paymentId } = req.params;
console.log(req.params);
    // حذف الدفع باستخدام الـ ID
    const payment = await Payment.findByIdAndDelete(paymentId);

    if (!payment) {
      return res.status(404).json({ message: "المدفوعات غير موجودة" });
    }

    res.status(200).json({ message: "تم حذف المدفوعات بنجاح" });
  } catch (error) {
    console.error("❌ Error deleting payment:", error);
    res.status(500).json({ message: "حدث خطأ أثناء حذف المدفوعات" });
  }
};











exports.deletePayment = async (req, res) => {
  try {
    const { paymentId } = req.params;

    // حذف الدفع باستخدام الـ ID
    const payment = await Payment.findByIdAndDelete(paymentId);

    if (!payment) {
      return res.status(404).json({ message: "المدفوعات غير موجودة" });
    }

    res.status(200).json({ message: "تم حذف المدفوعات بنجاح" });
  } catch (error) {
    console.error("خطأ في حذف المدفوعات:", error);
    res.status(500).json({ message: "حدث خطأ أثناء حذف المدفوعات" });
  }
};
