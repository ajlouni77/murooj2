import React, { useState } from "react";
import { CreditCard, Truck, ArrowLeft, DollarSign } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { FaPaypal, FaCcMastercard } from "react-icons/fa";
import { SiKlarna, SiVisa } from "react-icons/si";
import axios from "axios";

const Payment = () => {
  const navigate = useNavigate();
  const [selectedMethod, setSelectedMethod] = useState("cash");
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");
  const [fullName, setFullName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  const total = 80.0;

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:5000/api/payments/", {
        fullName,
        address,
        phone,
        method: selectedMethod,
        total,
      });
      alert("✅ تم تأكيد الطلب بنجاح");
      navigate("/");
    } catch (err) {
      console.error(err);
      alert("❌ حدث خطأ أثناء تأكيد الطلب");
    }
  };

  const formatCardNumber = (value) => {
    const v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
    const matches = v.match(/\d{4,16}/g);
    const match = (matches && matches[0]) || "";
    const parts = [];

    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }

    return parts.length ? parts.join(" ") : value;
  };

  const handleCardNumberChange = (e) => {
    const formatted = formatCardNumber(e.target.value);
    setCardNumber(formatted);
  };

  const formatExpiry = (value) => {
    const v = value.replace(/[^0-9]/g, "");
    if (v.length >= 3) {
      return `${v.substring(0, 2)}/${v.substring(2, 4)}`;
    }
    return value;
  };

  const handleExpiryChange = (e) => {
    const formatted = formatExpiry(e.target.value);
    setExpiry(formatted);
  };

  const paymentMethods = [
    {
      id: "cash",
      name: "الدفع عند الاستلام",
      icon: <DollarSign />,
      color: "text-gray-600",
    },
    {
      id: "paypal",
      name: "PayPal",
      icon: <FaPaypal />,
      color: "text-blue-600",
    },
    { id: "cliq", name: "CLiQ", icon: <SiKlarna />, color: "text-pink-600" }, // تم استبدال KLIC بـ CLiQ
    {
      id: "visa",
      name: "Visa/Mastercard",
      icon: (
        <div className="flex gap-1">
          <SiVisa className="text-indigo-600" />
          <FaCcMastercard className="text-red-600" />
        </div>
      ),
      color: "text-indigo-600",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={() => navigate("/cart")}
            className="flex items-center gap-2 text-gray-600 hover:text-lime-600"
          >
            <ArrowLeft className="w-5 h-5" />{" "}
            <span className="font-medium">العودة إلى السلة</span>
          </button>
          <h1 className="text-3xl font-bold text-gray-800">إتمام الطلب</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="bg-white rounded-xl shadow-md p-6">
                <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <CreditCard className="text-lime-600" /> معلومات الدفع
                </h2>

                <input
                  type="text"
                  placeholder="الاسم الكامل"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full mb-4 p-3 border rounded"
                  required
                />
                <input
                  type="text"
                  placeholder="عنوان التوصيل"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="w-full mb-4 p-3 border rounded"
                  required
                />
                <input
                  type="tel"
                  placeholder="رقم الهاتف"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full mb-4 p-3 border rounded"
                  required
                />
              </div>

              <div className="bg-white rounded-xl shadow-md p-6">
                <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <CreditCard className="text-lime-600" /> اختر طريقة الدفع
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {paymentMethods.map((method) => (
                    <button
                      type="button"
                      key={method.id}
                      onClick={() => setSelectedMethod(method.id)}
                      className={`p-4 border-2 rounded-xl ${
                        selectedMethod === method.id
                          ? "border-lime-600 bg-lime-50"
                          : "border-gray-200"
                      }`}
                    >
                      <div className={`${method.color} mb-1`}>
                        {method.icon}
                      </div>
                      <span className="text-sm">{method.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              {(selectedMethod === "visa" || selectedMethod === "cliq") && (
                <div className="bg-white rounded-xl shadow-md p-6">
                  <input
                    type="text"
                    placeholder="رقم البطاقة"
                    value={cardNumber}
                    onChange={handleCardNumberChange}
                    className="w-full mb-4 p-3 border rounded"
                    required
                  />
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="MM/YY"
                      value={expiry}
                      onChange={handleExpiryChange}
                      className="p-3 border rounded"
                      required
                    />
                    <input
                      type="text"
                      placeholder="CVV"
                      value={cvv}
                      onChange={(e) => setCvv(e.target.value)}
                      className="p-3 border rounded"
                      required
                    />
                  </div>
                </div>
              )}

              <button
                type="submit"
                className="w-full py-3 bg-lime-600 text-white rounded-lg font-bold"
              >
                تأكيد الطلب
              </button>
            </form>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Truck className="text-lime-600" /> ملخص الطلب
              </h2>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>الإجمالي الفرعي</span>
                  <span>75 د.أ</span>
                </div>
                <div className="flex justify-between">
                  <span>تكلفة التوصيل</span>
                  <span>5 د.أ</span>
                </div>
                <div className="flex justify-between font-bold pt-3 border-t">
                  <span>المجموع</span>
                  <span className="text-lime-600">80 د.أ</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
