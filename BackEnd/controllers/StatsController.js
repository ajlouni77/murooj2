const Message = require("../models/Contact");
//const Order = require("../models/Product");
const Payment = require("../models/Payment");

exports.getDashboardStats = async (req, res) => {
  try {
    // الحصول على عدد الرسائل
    const messageCount = await Message.countDocuments();

    // الحصول على عدد الطلبات
    const orderCount = await Payment.countDocuments();

    // الحصول على عدد المدفوعات
    const paymentCount = await Payment.countDocuments();

    // الحصول على عدد الزوار (افتراضًا هنا أننا نتابع عدد الزوار في سجل آخر)
    // يمكن استخدام مكتبة مثل `mongoose` أو أي مكتبة أخرى لعدد الزوار
    const visitorCount = 5000; // يتم تحديده هنا كعدد وهمي أو يمكنك استرجاعه من سجل آخر في قاعدة البيانات.

    res.status(200).json({
      visitors: visitorCount,
      messages: messageCount,
      orders: orderCount,
      payments: paymentCount,
    });
  } catch (error) {
    console.error("❌ Error fetching dashboard stats:", error);
    res.status(500).json({ message: "حدث خطأ أثناء جلب الإحصائيات" });
  }
};
