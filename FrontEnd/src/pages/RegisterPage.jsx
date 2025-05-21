import React, { useState } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { Mail, Lock, User, ChevronLeft } from "lucide-react";

const RegisterPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const userType = location.state?.userType || "buyer";
  const [loading, setLoading] = useState(false);

  const primaryColor = "rgb(129, 196, 8)";
  const primaryColorHover = "rgb(109, 176, 0)";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, userType }),
      });

      const data = await response.json();
      if (response.ok) {
        localStorage.setItem("token", data.token);
        localStorage.setItem(
          "user",
          JSON.stringify({
            token: data.token,
            userId: data.userId,
            email: data.email,
            role: data.role,
            name: data.name, // ✅ من الرد مباشرة
          })
        );
        alert("تم التسجيل بنجاح");
        navigate("/");
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error("خطأ أثناء التسجيل:", error);
      alert("حدث خطأ أثناء التسجيل");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-5xl bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col lg:flex-row">
        {/* الجانب الأيسر - الصورة والخلفية */}
        <div className="lg:w-2/5 relative bg-gradient-to-br from-gray-900 to-gray-800 hidden lg:block">
          <div className="absolute inset-0 bg-[url('https://media.istockphoto.com/id/1364118362/photo/healthy-detox-smoothie-with-cucumber-broccoli-green-apple-kale-and-green-grapes-detox-drink.jpg?s=612x612&w=0&k=20&c=LV5N5Yk8SXlE4NasAq_4nwk9P1FKWE4cs1tT3frnEtg="></div>
          <div className="relative h-full p-10 flex flex-col justify-between">
            <button
              onClick={() => navigate(-1)}
              className="flex items-center text-white/80 hover:text-white transition"
            >
              <ChevronLeft className="w-5 h-5" />
              <span className="mr-1">رجوع</span>
            </button>

            <div className="text-center">
              <h1 className="text-3xl font-bold text-white mb-4">
                {userType === "shop"
                  ? "انضم إلى منصتنا كبائع"
                  : "ابدأ رحلة التسوق معنا"}
              </h1>
              <p className="text-lg text-white/80 mb-6">
                {userType === "shop"
                  ? "انشر منتجاتك ووسع نطاق عملك مع آلاف العملاء"
                  : "استمتع بتجربة تسوق فريدة مع أفضل العروض والمنتجات"}
              </p>
            </div>
          </div>
        </div>

        {/* الجانب الأيمن - نموذج التسجيل */}
        <div className="lg:w-3/5 p-8 sm:p-12">
          <div className="flex justify-between items-center mb-2 lg:hidden">
            <button
              onClick={() => navigate(-1)}
              className="flex items-center text-gray-500 hover:text-gray-700 transition"
            >
              <ChevronLeft className="w-5 h-5" />
              <span className="mr-1">رجوع</span>
            </button>
            <div
              className="w-10 h-10 rounded-full"
              style={{ backgroundColor: primaryColor }}
            ></div>
          </div>

          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">
              {userType === "shop" ? "تسجيل محل جديد" : "تسجيل كمشتري"}
            </h2>
            <p className="text-gray-600">املأ النموذج لإنشاء حساب جديد</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                الاسم الكامل
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <User className="w-5 h-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-offset-1 focus:border-transparent transition pr-10"
                  style={{
                    focusRingColor: primaryColor,
                    borderColor: "rgb(229, 231, 235)",
                  }}
                  placeholder="أدخل اسمك الكامل"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                البريد الإلكتروني
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <Mail className="w-5 h-5 text-gray-400" />
                </div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-offset-1 focus:border-transparent transition pr-10"
                  style={{
                    focusRingColor: primaryColor,
                    borderColor: "rgb(229, 231, 235)",
                  }}
                  placeholder="example@domain.com"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                كلمة المرور
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <Lock className="w-5 h-5 text-gray-400" />
                </div>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-offset-1 focus:border-transparent transition pr-10"
                  style={{
                    focusRingColor: primaryColor,
                    borderColor: "rgb(229, 231, 235)",
                  }}
                  placeholder="********"
                />
              </div>
              {formData.password && (
                <div className="mt-2 flex space-x-1 space-x-reverse">
                  {[
                    { length: 0, color: "bg-gray-200" },
                    { length: 5, color: "bg-yellow-400" },
                    { length: 8, color: "bg-green-500" },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className={`h-1 flex-1 rounded-full ${
                        formData.password.length > item.length
                          ? item.color
                          : "bg-gray-200"
                      }`}
                    />
                  ))}
                </div>
              )}
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full py-3 px-4 rounded-lg font-medium shadow-md transition flex items-center justify-center ${
                loading ? "opacity-90 cursor-wait" : ""
              }`}
              style={{
                backgroundColor: primaryColor,
                hoverBackgroundColor: primaryColorHover,
                color: "white",
              }}
            >
              {loading ? (
                <>
                  <svg
                    className="animate-spin -ml-1 mr-2 h-5 w-5"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                    />
                  </svg>
                  جاري إنشاء الحساب...
                </>
              ) : (
                "تسجيل حساب جديد"
              )}
            </button>
          </form>

          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="relative flex justify-center"></div>
          </div>

          <div className="mt-8 text-center text-sm text-gray-500">
            <p className="mb-4">
              لديك حساب بالفعل؟{" "}
              <Link
                to="/login"
                className="font-medium transition"
                style={{ color: primaryColor, hoverColor: primaryColorHover }}
              >
                تسجيل الدخول
              </Link>
            </p>
            <div className="flex justify-center space-x-4 space-x-reverse">
              <a href="#" className="hover:text-gray-700 transition">
                شروط الاستخدام
              </a>
              <span>•</span>
              <a href="#" className="hover:text-gray-700 transition">
                سياسة الخصوصية
              </a>
              <span>•</span>
              <a href="#" className="hover:text-gray-700 transition">
                مركز المساعدة
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
