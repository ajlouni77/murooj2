import React, { useEffect, useState } from "react";
import axios from "axios";

const ManageOrders = () => {
  const [stores, setStores] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [expandedStore, setExpandedStore] = useState(null);

  useEffect(() => {
    fetchStores();
  }, []);

  const fetchStores = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/joinasstore");
      setStores(res.data);
    } catch (err) {
      console.error("فشل في تحميل الطلبات", err);
    }
  };

  const handleApproval = async (id, isApproved, userId) => {
    try {
      // أولاً: تعديل حالة الطلب (موافقة أو رفض)
      await axios.put(
        `http://localhost:5000/api/joinasstore/stores/${id}/approval`,
        { isApproved }
      );

      if (isApproved) {
        // إذا تمت الموافقة، عدل أيضًا دور المستخدم إلى "store"
        await axios.put(`http://localhost:5000/api/users/${userId}/role`, {
          role: "store",
        });

        alert("تمت الموافقة وتحويل المستخدم إلى صاحب محل");
        fetchStores(); // إعادة تحميل الطلبات
      } else {
        // لو تم الرفض، نحذف العنصر محلياً
        setStores((prevStores) =>
          prevStores.filter((store) => store._id !== id)
        );
        alert("تم رفض الطلب وحذفه من القائمة");
      }
    } catch (err) {
      console.error("فشل في التحديث", err);
    }
  };

  const toggleExpand = (id) => {
    if (expandedStore === id) {
      setExpandedStore(null);
    } else {
      setExpandedStore(id);
    }
  };

  const filteredStores = stores.filter((store) => {
    const searchLower = searchTerm.toLowerCase();
    return (
      store.storeName?.toLowerCase().includes(searchLower) ||
      store.ownerName?.toLowerCase().includes(searchLower) ||
      store.email?.toLowerCase().includes(searchLower) ||
      store.phone?.toLowerCase().includes(searchLower)
    );
  });

  const getStoreTypeName = (type) => {
    switch (type) {
      case "vegetables":
        return "محل خضروات";
      case "fruits":
        return "محل فواكه";
      case "both":
        return "محل خضروات وفواكه";
      case "supermarket":
        return "سوبر ماركت";
      default:
        return "غير محدد";
    }
  };

  return (
    <div className="mt-8 px-4">
      <div className="mb-4">
        <input
          type="text"
          placeholder="🔍 ابحث عن متجر أو مالك أو إيميل أو هاتف..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full md:w-1/3 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#81c408] focus:outline-none"
        />
      </div>

      {/* عرض الجدول للشاشات المتوسطة والكبيرة */}
      <div className="hidden md:block">
        <table className="min-w-full bg-white border border-gray-200 shadow-md rounded-lg text-right">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2">اسم المتجر</th>
              <th className="px-4 py-2">اسم المالك</th>
              <th className="px-4 py-2">الإيميل</th>
              <th className="px-4 py-2">الهاتف</th>
              <th className="px-4 py-2">نوع المحل</th>
              <th className="px-4 py-2">الحالة</th>
              <th className="px-4 py-2">الإجراء</th>
            </tr>
          </thead>
          <tbody>
            {filteredStores.map((store) => (
              <tr key={store._id} className="border-t hover:bg-gray-50">
                <td className="px-4 py-2">{store.storeName}</td>
                <td className="px-4 py-2">{store.ownerName}</td>
                <td className="px-4 py-2">{store.email}</td>
                <td className="px-4 py-2">{store.phone}</td>
                <td className="px-4 py-2">
                  {getStoreTypeName(store.storeType)}
                </td>
                <td className="px-4 py-2">
                  {store.isApproved ? (
                    <span className="text-green-600 font-medium">
                      موافق عليه
                    </span>
                  ) : (
                    <span className="text-yellow-600 font-medium">
                      قيد الانتظار
                    </span>
                  )}
                </td>
                <td className="px-4 py-2">
                  <div className="flex flex-wrap gap-2">
                    {!store.isApproved && (
                      <>
                        <button
                          className="px-3 py-1 text-white rounded bg-green-600 hover:bg-green-700"
                          onClick={() =>
                            handleApproval(store._id, true, store.userId)
                          }
                        >
                          موافقة
                        </button>
                        <button
                          className="px-3 py-1 text-white rounded bg-red-500 hover:bg-red-600"
                          onClick={() => handleApproval(store._id, false)}
                        >
                          رفض
                        </button>
                      </>
                    )}
                    {store.isApproved && (
                      <button
                        className="px-3 py-1 text-white rounded bg-gray-500 hover:bg-gray-600"
                        onClick={() => handleApproval(store._id, false)}
                      >
                        إلغاء
                      </button>
                    )}
                    <button
                      className="px-3 py-1 text-white rounded bg-blue-500 hover:bg-blue-600"
                      onClick={() => toggleExpand(store._id)}
                    >
                      {expandedStore === store._id ? "إخفاء" : "تفاصيل"}
                    </button>
                  </div>
                  {expandedStore === store._id && (
                    <div className="mt-3 p-3 bg-gray-50 rounded-lg text-right">
                      <p>
                        <span className="font-bold">العنوان:</span>{" "}
                        {store.address}
                      </p>
                      <p>
                        <span className="font-bold">رقم الرخصة:</span>{" "}
                        {store.licenseNumber}
                      </p>
                      <p>
                        <span className="font-bold">الخبرة:</span>{" "}
                        {store.experience}
                      </p>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* عرض البطاقات للشاشات الصغيرة */}
      <div className="md:hidden space-y-4">
        {filteredStores.map((store) => (
          <div
            key={store._id}
            className="bg-white rounded-lg border border-gray-200 shadow-md p-4"
          >
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-bold text-lg">{store.storeName}</h3>
              <span
                className={`px-2 py-1 rounded-full text-xs ${
                  store.isApproved
                    ? "bg-green-100 text-green-800"
                    : "bg-yellow-100 text-yellow-800"
                }`}
              >
                {store.isApproved ? "موافق عليه" : "قيد الانتظار"}
              </span>
            </div>

            <div className="grid grid-cols-1 gap-2 mb-3 text-right">
              <p>
                <span className="font-bold">المالك:</span> {store.ownerName}
              </p>
              <p>
                <span className="font-bold">الإيميل:</span> {store.email}
              </p>
              <p>
                <span className="font-bold">الهاتف:</span> {store.phone}
              </p>
              <p>
                <span className="font-bold">نوع المحل:</span>{" "}
                {getStoreTypeName(store.storeType)}
              </p>

              <button
                onClick={() => toggleExpand(store._id)}
                className="text-blue-600 text-sm flex items-center justify-center mt-1"
              >
                {expandedStore === store._id
                  ? "إخفاء التفاصيل"
                  : "عرض المزيد من التفاصيل"}
              </button>

              {expandedStore === store._id && (
                <div className="mt-2 py-2 border-t border-gray-200">
                  <p>
                    <span className="font-bold">العنوان:</span> {store.address}
                  </p>
                  <p>
                    <span className="font-bold">رقم الرخصة:</span>{" "}
                    {store.licenseNumber}
                  </p>
                  <p>
                    <span className="font-bold">الخبرة:</span>{" "}
                    {store.experience}
                  </p>
                </div>
              )}
            </div>

            <div className="flex flex-wrap gap-2 mt-3">
              {!store.isApproved && (
                <>
                  <button
                    className="px-3 py-1 text-white rounded bg-green-600 hover:bg-green-700 flex-1"
                    onClick={() =>
                      handleApproval(store._id, true, store.userId)
                    }
                  >
                    موافقة
                  </button>
                  <button
                    className="px-3 py-1 text-white rounded bg-red-500 hover:bg-red-600 flex-1"
                    onClick={() => handleApproval(store._id, false)}
                  >
                    رفض
                  </button>
                </>
              )}
              {store.isApproved && (
                <button
                  className="px-3 py-1 text-white rounded bg-gray-500 hover:bg-gray-600 w-full"
                  onClick={() => handleApproval(store._id, false)}
                >
                  إلغاء الموافقة
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {filteredStores.length === 0 && (
        <div className="text-center py-10 text-gray-500">
          لا توجد نتائج مطابقة 🔍
        </div>
      )}
    </div>
  );
};

export default ManageOrders;
