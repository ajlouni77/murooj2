import React, { useEffect, useState } from "react";
import { getPayments, deletePayment } from "../../api";

const ManagePayments = () => {
  const [payments, setPayments] = useState([]);

  // جلب المدفوعات من قاعدة البيانات
  useEffect(() => {
    const fetchPayments = async () => {
      const data = await getPayments();
      setPayments(data);
    };

    fetchPayments();
  }, []);

  // دالة لحذف الدفع
  const handleDeletePayment = async (paymentId) => {
    try {
      const deletedPayment = await deletePayment(paymentId);
      setPayments((prevPayments) =>
        prevPayments.filter((payment) => payment.id !== paymentId)
      );
      alert("تم حذف المدفوعات بنجاح");
    } catch (error) {
      console.error("خطأ في الحذف:", error);
      alert("حدث خطأ أثناء حذف المدفوعات");
    }
  };

  return (
    <div>
      <h3 className="text-xl font-semibold">إدارة المدفوعات</h3>
      <div>
        {payments.length === 0 ? (
          <p>لا توجد مدفوعات حالياً.</p>
        ) : (
          payments.map((payment) => (
            <div key={payment.id} className="border p-4 my-2">
              <p>المدفوعات رقم: {payment.id}</p>
              <p>المبلغ: {payment.total} د.أ</p>
              <p>الطريقة: {payment.method}</p>
              <p>العنوان: {payment.address}</p>
              <p>رقم الهاتف: {payment.phone}</p>
              <div className="flex justify-between">
                <button
                  onClick={() => handleDeletePayment(payment._id)}
                  className="bg-red-500 text-white p-2 rounded">
                  حذف
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ManagePayments;
