import React, { useEffect, useState } from "react";
import axios from "axios";

const ProductManager = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    image: null,
  });
  const [imagePreview, setImagePreview] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // الحصول على بيانات المستخدم من التخزين المحلي
  const user = JSON.parse(localStorage.getItem("user")) || {};

  // معالجة الطلب للحصول على منتجات المستخدم
  const fetchProducts = async () => {
    if (!user.userId) {
      setError("يرجى تسجيل الدخول أولاً");
      setIsLoading(false);
      return;
    }

    setIsLoading(true);
    try {
      const res = await axios.get(
        `http://localhost:5000/api/products/store/${user.userId}`
      );
      setProducts(res.data);
      setError(null);
    } catch (err) {
      console.error("فشل في جلب المنتجات", err);
      setError("حدث خطأ أثناء جلب المنتجات، يرجى المحاولة مرة أخرى");
    } finally {
      setIsLoading(false);
    }
  };

  // تحميل المنتجات عند تحميل الصفحة
  useEffect(() => {
    fetchProducts();
  }, []);

  // التعامل مع تغيير قيم النموذج
  const handleInput = (e) => {
    const { name, value, files } = e.target;

    if (name === "image" && files && files[0]) {
      // إنشاء معاينة للصورة
      const fileReader = new FileReader();
      fileReader.onload = (e) => {
        setImagePreview(e.target.result);
      };
      fileReader.readAsDataURL(files[0]);

      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  // إعادة تعيين النموذج
  const resetForm = () => {
    setFormData({ name: "", price: "", image: null });
    setImagePreview(null);
    // إعادة تعيين حقل الصورة
    const fileInput = document.querySelector('input[type="file"]');
    if (fileInput) {
      fileInput.value = "";
    }
  };

  // معالجة إرسال النموذج
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user.userId) {
      setError("يرجى تسجيل الدخول أولاً");
      return;
    }

    setIsSubmitting(true);

    const data = new FormData();
    data.append("name", formData.name);
    data.append("price", formData.price);
    data.append("image", formData.image);
    data.append("owner", user.userId);

    try {
      await axios.post("http://localhost:5000/api/products/add", data);
      resetForm();
      fetchProducts();
      alert("تمت إضافة المنتج بنجاح");
    } catch (err) {
      console.error("فشل في الإضافة", err);
      setError(
        err?.response?.data?.message ||
          "فشل في إضافة المنتج، يرجى المحاولة مرة أخرى"
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  // معالجة حذف المنتج
  const handleDelete = async (id) => {
    if (!window.confirm("هل أنت متأكد من حذف هذا المنتج؟")) {
      return;
    }

    try {
      await axios.delete(`http://localhost:5000/api/products/delete/${id}`);
      fetchProducts();
    } catch (err) {
      console.error("فشل في الحذف", err);
      setError("حدث خطأ أثناء حذف المنتج، يرجى المحاولة مرة أخرى");
    }
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <h2 className="text-2xl font-bold mb-6 text-center">إدارة المنتجات</h2>

      {error && (
        <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg">
          {error}
          <button
            className="float-left font-bold"
            onClick={() => setError(null)}
          >
            &times;
          </button>
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 border p-4 rounded-lg"
      >
        <h3 className="col-span-1 md:col-span-3 font-semibold text-lg mb-2">
          إضافة منتج جديد
        </h3>

        <div className="flex flex-col">
          <label htmlFor="name" className="mb-1 text-gray-700">
            اسم المنتج
          </label>
          <input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInput}
            placeholder="أدخل اسم المنتج"
            required
            className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-green-200"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="price" className="mb-1 text-gray-700">
            السعر بالغرام
          </label>
          <input
            id="price"
            name="price"
            type="number"
            min="0"
            step="0.01"
            value={formData.price}
            onChange={handleInput}
            placeholder="أدخل السعر بالفلس"
            required
            className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-green-200"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="image" className="mb-1 text-gray-700">
            صورة المنتج
          </label>
          <input
            id="image"
            type="file"
            name="image"
            accept="image/*"
            onChange={handleInput}
            required
            className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-green-200"
          />
        </div>

        {imagePreview && (
          <div className="col-span-1 md:col-span-3 mt-2">
            <p className="mb-1 text-gray-700">معاينة الصورة:</p>
            <img
              src={imagePreview}
              alt="معاينة"
              className="h-32 w-auto object-cover rounded border"
            />
          </div>
        )}

        <div className="col-span-1 md:col-span-3 flex gap-2 mt-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className="flex-1 bg-[#81C408] text-white py-2 px-4 rounded hover:bg-[#6fa100] transition duration-200 disabled:opacity-50"
          >
            {isSubmitting ? "جاري الإضافة..." : "إضافة المنتج"}
          </button>
          <button
            type="button"
            onClick={resetForm}
            className="bg-gray-200 text-gray-800 py-2 px-4 rounded hover:bg-gray-300 transition duration-200"
          >
            إعادة تعيين
          </button>
        </div>
      </form>

      <h3 className="font-semibold text-lg mb-4">قائمة المنتجات</h3>

      {isLoading ? (
        <div className="text-center py-8">
          <p className="text-gray-500">جاري تحميل المنتجات...</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.length > 0 ? (
            products.map((product) => (
              <div
                key={product._id}
                className="border rounded-lg p-4 shadow-sm bg-gray-50 hover:shadow-md transition duration-200"
              >
                <div className="h-48 mb-3 overflow-hidden rounded">
                  <img
                    src={`http://localhost:5000/uploads/${product.image}`}
                    alt={product.name}
                    className="h-full w-full object-cover"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src =
                        "https://via.placeholder.com/150?text=صورة+غير+متوفرة";
                    }}
                  />
                </div>
                <h3 className="font-semibold text-lg">{product.name}</h3>
                <p className="text-gray-600 mb-3">
                  السعر: {product.price} فلس / غرام
                </p>
                <div className="flex justify-end">
                  <button
                    onClick={() => handleDelete(product._id)}
                    className="text-sm text-white bg-red-500 hover:bg-red-600 py-1 px-3 rounded transition duration-200"
                  >
                    حذف المنتج
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="col-span-full text-center py-8 text-gray-400 border rounded-lg bg-gray-50">
              لا توجد منتجات بعد. قم بإضافة منتجك الأول!
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default ProductManager;
