// import axios from "axios";

// const API_URL = "http://localhost:5000/api/products";

// export const getProducts = async () => {
//   const response = await axios.get(API_URL);
//   return response.data;
// };

// export const addProduct = async (product) => {
//   const response = await axios.post(`${API_URL}/add`, product);
//   return response.data;
// };

// // API_URL = "http://localhost:5000/api/dashboard"

// // لعرض الإحصائيات
// export const getDashboardStats = async () => {
//   const response = await axios.get("http://localhost:5000/api/stats");
//   console.log(response.data)
//   return response.data;
// };


// // لعرض الرسائل
// export const getMessages = async () => {
//   const response = await axios.get("http://localhost:5000/api/contact/");
//   return response.data;
// };

// // لحذف أو إخفاء الرسائل
// export const updateMessageStatus = async (messageId, status) => {
//   const response = await axios.put(`http://localhost:5000/api/messages/${messageId}`, { status });
//   return response.data;
// };

// // للرد على الرسائل
// export const replyToMessage = async (messageId, reply) => {
//   const response = await axios.post(`http://localhost:5000/api/messages/${messageId}/reply`, { reply });
//   return response.data;
// };

// // دالة لطلب تنفيذ أمر git pull
// export const gitOrder = async () => {
//   try {
//     // بناء API_URL اعتمادًا على نوع الأمر الذي تريد تنفيذه
   

//     // إرسال الطلب إلى السيرفر لتنفيذ أمر Git
//     const response = await axios.post(API_URL);

//     // إرجاع البيانات من السيرفر بعد تنفيذ الأمر
//     return response.data;
//   } catch (error) {
//     console.error("Error executing Git command:", error);
//     throw error;
//   }
// };

// // للموافقة على الطلب
// export const approveOrder = async (orderId) => {
//   const response = await axios.put(`http://localhost:5000/api/orders/${orderId}/approve`);
//   return response.data;
// };

// // لرفض الطلب
// export const rejectOrder = async (orderId) => {
//   const response = await axios.put(`http://localhost:5000/api/orders/${orderId}/reject`);
//   return response.data;
// };


// // لعرض المدفوعات
// export const getPayments = async () => {
//   const response = await axios.get("http://localhost:5000/api/payments/");
//   return response.data;
// };

// // لحذف المدفوعات
// export const deletePayment = async (paymentId) => {
//   const response = await axios.delete(`http://localhost:5000/api/payments/${paymentId}`);
//   return response.data;
// };


// // لعرض الحسابات المسجلة
// export const getAccounts = async () => {
//   const response = await axios.get("http://localhost:5000/api/accounts");
//   return response.data;
// };

// // للموافقة على التسجيل
// export const approveAccount = async (accountId) => {
//   const response = await axios.put(`http://localhost:5000/api/accounts/${accountId}/approve`);
//   return response.data;
// };

// // لرفض التسجيل
// export const rejectAccount = async (accountId) => {
//   const response = await axios.put(`http://localhost:5000/api/accounts/${accountId}/reject`);
//   return response.data;
// };

// export const getStats = async () => {
//   try {
//     const response = await axios.get("http://localhost:5000/api/dashboard");
//     return response.data;
//   } catch (error) {
//     console.error("خطأ في جلب الإحصائيات:", error);
//     throw error;
//   }
// };

// const api = axios.create({
//   baseURL: "http://localhost:5000/api", // رابط الـ Backend
// });
// export default api;


















































































import axios from "axios";

const API_URL = "http://localhost:5000/api/products";

// المنتجات
export const getProducts = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const addProduct = async (product) => {
  const response = await axios.post(`${API_URL}/add`, product);
  return response.data;
};

// الإحصائيات
export const getDashboardStats = async () => {
  const response = await axios.get("http://localhost:5000/api/stats");
  return response.data;
};

// الرسائل
export const getMessages = async () => {
  const response = await axios.get("http://localhost:5000/api/contact/");
  return response.data;
};

export const updateMessageStatus = async (messageId, status) => {
  const response = await axios.put(
    `http://localhost:5000/api/messages/${messageId}`,
    { status }
  );
  return response.data;
};

export const replyToMessage = async (messageId, reply) => {
  const response = await axios.post(
    `http://localhost:5000/api/messages/${messageId}/reply`,
    { reply }
  );
  return response.data;
};

// أوامر git
export const gitOrder = async () => {
  const response = await axios.post(API_URL); // تأكد من المسار الصحيح لاحقًا
  return response.data;
};

// الطلبات
export const approveOrder = async (orderId) => {
  const response = await axios.put(
    `http://localhost:5000/api/orders/${orderId}/approve`
  );
  return response.data;
};

export const rejectOrder = async (orderId) => {
  const response = await axios.put(
    `http://localhost:5000/api/orders/${orderId}/reject`
  );
  return response.data;
};

// المدفوعات
export const getPayments = async () => {
  const response = await axios.get("http://localhost:5000/api/payments/");
  return response.data;
};

export const deletePayment = async (paymentId) => {
  const response = await axios.delete(
    `http://localhost:5000/api/payments/${paymentId}`
  );
  return response.data;
};

// الحسابات
export const getAccounts = async () => {
  const response = await axios.get("http://localhost:5000/api/accounts");
  return response.data;
};

export const approveAccount = async (accountId) => {
  const response = await axios.put(
    `http://localhost:5000/api/accounts/${accountId}/approve`
  );
  return response.data;
};

export const rejectAccount = async (accountId) => {
  const response = await axios.put(
    `http://localhost:5000/api/accounts/${accountId}/reject`
  );
  return response.data;
};

export const getStats = async () => {
  const response = await axios.get("http://localhost:5000/api/dashboard");
  return response.data;
};

// ===============================
// ✅ APIs الجديدة الخاصة بـ Profile
// ===============================

const PROFILE_URL = "http://localhost:5000/api/profile";

// جلب بيانات البروفايل
export const getProfile = async (userId) => {
  const response = await axios.get(`${PROFILE_URL}/${userId}`);
  return response.data;
};

// تحديث البيانات الشخصية
export const updateProfile = async (userId, data) => {
  const response = await axios.put(`${PROFILE_URL}/${userId}`, data);
  return response.data;
};

// العناوين
export const addAddress = async (userId, address) => {
  const response = await axios.post(
    `${PROFILE_URL}/${userId}/addresses`,
    address
  );
  return response.data;
};

export const deleteAddress = async (userId, addressId) => {
  const response = await axios.delete(
    `${PROFILE_URL}/${userId}/addresses/${addressId}`
  );
  return response.data;
};

// البطاقات
export const addCard = async (userId, card) => {
  const response = await axios.post(`${PROFILE_URL}/${userId}/cards`, card);
  return response.data;
};

export const deleteCard = async (userId, cardId) => {
  const response = await axios.delete(
    `${PROFILE_URL}/${userId}/cards/${cardId}`
  );
  return response.data;
};

const api = axios.create({
  baseURL: "http://localhost:5000/api",
});

export default api;
