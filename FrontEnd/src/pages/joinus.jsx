import React, { useState } from "react";
import {
  Store,
  Clock,
  Users,
  CheckCircle,
  AlertCircle,
  Send,
  Shield,
  Package,
  CreditCard,
} from "lucide-react";
import Footer from "../pages/Footer";
import axios from "axios";

function JoinUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    shopType: "",
    products: "",
    about: "",
    agreement: false,
  });

  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccessMsg("");
    setErrorMsg("");
    setIsSubmitting(true);

    try {
      const res = await axios.post(
        "http://localhost:5000/api/joinus/shop",
        formData
      );
      if (res.status === 201) {
        setSuccessMsg("✅ تم إرسال طلبك بنجاح! سنتواصل معك قريباً.");
        setFormData({
          name: "",
          email: "",
          phone: "",
          address: "",
          shopType: "",
          products: "",
          about: "",
          agreement: false,
        });
      }
    } catch (error) {
      setErrorMsg("❌ حدث خطأ أثناء إرسال الطلب. يرجى المحاولة مرة أخرى.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className="flex flex-col min-h-screen font-[Cairo, sans-serif]"
      dir="rtl"
    >
      {/* Hero Section */}
      <div className="relative bg-gradient-to-b from-[#F1F6F9] to-white py-20">
        <div className="absolute inset-0 bg-[url('/images/shop-pattern.png')] opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-1 bg-[#81c408]/20 text-[#81c408] font-medium rounded-full mb-4">
              شركاء النجاح
            </span>
            <h1 className="text-5xl font-bold text-[#394867] mb-6">
              انضم إلى <span className="text-[#81c408]">مُروج</span> كـ سائق
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
              وسع نطاق عملك من خلال الانضمام إلى منصتنا سائق
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <a
                href="#apply-form"
                className="px-8 py-3 bg-[#81c408] text-white rounded-lg font-medium hover:bg-[#6fa100] transition-all shadow-md hover:shadow-lg transform hover:-translate-y-1"
              >
                قدم طلبك الآن
              </a>
              <a
                href="#benefits"
                className="px-8 py-3 bg-white text-[#394867] border border-gray-300 rounded-lg font-medium hover:bg-gray-50 transition-all shadow-sm hover:shadow-md transform hover:-translate-y-1"
              >
                تعرف على المزايا
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Requirements Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#394867] mb-4">
              متطلبات الانضمام
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              نبحث عن محلات تلتزم بمعايير الجودة لتقديم أفضل المنتجات لعملائنا
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "رخصة قيادة سارية",
                description:
                  "يجب أن يكون لديك رخصة قيادة سارية المفعول لمزاولة النشاط.",
              },
              {
                title: "منتجات طازجة",
                description:
                  "التزام بتقديم منتجات طازجة وعالية الجودة لعملائنا.",
              },
              {
                title: "موقع مناسب",
                description:
                  "يجب أن يكون المحل في موقع مناسب يسهل الوصول إليه.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all"
              >
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-[#81c408] text-white rounded-full flex items-center justify-center font-bold text-xl">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-semibold text-[#394867] mr-4">
                    {item.title}
                  </h3>
                </div>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits & Apply Form Section */}
      <section id="benefits" className="bg-gray-50 py-16">
        <div className="max-w-screen-xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* المزايا */}
          <div>
            <div className="mb-8">
              <h3 className="text-3xl font-bold text-[#394867] mb-3 relative">
                مزايا الانضمام إلينا
                <span className="block w-16 h-1 bg-[#81c408] mt-2"></span>
              </h3>
              <p className="text-gray-600">
                اكتشف فوائد الشراكة معنا وكن جزءاً من شبكة محلاتنا المتميزة
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {[
                {
                  icon: <Store className="w-6 h-6" />,
                  title: "زيادة المبيعات",
                  text: "وصول إلى آلاف العملاء وزيادة في المبيعات بنسبة تصل إلى 40%.",
                },
                {
                  icon: <Clock className="w-6 h-6" />,
                  title: "إدارة سهلة",
                  text: "نظام إدارة طلبات متكامل وسهل الاستخدام.",
                },
                {
                  icon: <Package className="w-6 h-6" />,
                  title: "توصيل سريع",
                  text: "خدمة توصيل موثوقة وسريعة لعملائك.",
                },
                {
                  icon: <CreditCard className="w-6 h-6" />,
                  title: "دفعات منتظمة",
                  text: "استلم أرباحك أسبوعياً مع تقارير تفصيلية.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all border-r-4 border-[#81c408]"
                >
                  <div className="flex items-start gap-4">
                    <div className="bg-[#81c408]/10 p-3 rounded-lg text-[#81c408]">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-[#394867] mb-2">
                        {item.title}
                      </h4>
                      <p className="text-gray-600 text-sm">{item.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-[#81c408]/10 rounded-xl border border-[#81c408]/20">
              <h4 className="text-xl font-semibold text-[#394867] mb-3">
                لماذا نختارك؟
              </h4>
              <ul className="space-y-3">
                {[
                  "محل معتمد ومرخص",
                  "منتجات طازجة وجودة عالية",
                  "أسعار تنافسية",
                  "خدمة عملاء ممتازة",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-[#81c408] mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* النموذج */}
          <div
            id="apply-form"
            className="bg-white p-8 rounded-xl shadow-lg border border-gray-100"
          >
            <h2 className="text-2xl font-bold text-[#394867] mb-2">
              قدم طلب الانضمام
            </h2>
            <p className="text-gray-600 mb-6">
              املأ النموذج التالي وسنتواصل معك في أقرب وقت ممكن
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    اسم المحل
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="أدخل اسم المحل"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#81c408] focus:outline-none"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    رقم الهاتف
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="05xxxxxxxx"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#81c408] focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  البريد الإلكتروني
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="example@domain.com"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#81c408] focus:outline-none"
                />
              </div>

              <div>
                <label
                  htmlFor="address"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  عنوان المحل
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                  placeholder="المدينة، المنطقة، الشارع"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#81c408] focus:outline-none"
                />
              </div>

              <div>
                <label
                  htmlFor="shopType"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  نوع المحل
                </label>
                <select
                  id="shopType"
                  name="shopType"
                  value={formData.shopType}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#81c408] focus:outline-none bg-white"
                >
                  <option value="" disabled>
                    اختر نوع المحل
                  </option>
                  <option value="vegetables">خضروات</option>
                  <option value="fruits">فواكه</option>
                  <option value="both">خضروات وفواكه</option>
                  <option value="other">أخرى</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="products"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  المنتجات الرئيسية
                </label>
                <input
                  type="text"
                  id="products"
                  name="products"
                  value={formData.products}
                  onChange={handleChange}
                  required
                  placeholder="اذكر المنتجات الرئيسية التي تقدمها"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#81c408] focus:outline-none"
                />
              </div>

              <div>
                <label
                  htmlFor="about"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  نبذة عن المحل
                </label>
                <textarea
                  id="about"
                  name="about"
                  rows="4"
                  value={formData.about}
                  onChange={handleChange}
                  required
                  placeholder="أخبرنا المزيد عن محلّك وخدماتك..."
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#81c408] focus:outline-none"
                ></textarea>
              </div>

              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  name="agreement"
                  checked={formData.agreement}
                  onChange={handleChange}
                  required
                  className="w-5 h-5 accent-[#81c408]"
                />
                <span className="text-gray-700">
                  أوافق على{" "}
                  <a href="#" className="text-[#81c408] hover:underline">
                    الشروط والأحكام
                  </a>{" "}
                  وسياسة الخصوصية
                </span>
              </label>

              {successMsg && (
                <div className="flex items-center gap-2 p-3 bg-green-50 border border-green-200 text-green-700 rounded-lg">
                  <CheckCircle className="w-5 h-5" />
                  <p>{successMsg}</p>
                </div>
              )}

              {errorMsg && (
                <div className="flex items-center gap-2 p-3 bg-red-50 border border-red-200 text-red-700 rounded-lg">
                  <AlertCircle className="w-5 h-5" />
                  <p>{errorMsg}</p>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 flex items-center justify-center gap-2 bg-[#81c408] text-white font-semibold rounded-lg transition-all shadow-md hover:shadow-lg ${
                  isSubmitting
                    ? "opacity-70 cursor-not-allowed"
                    : "hover:bg-[#6fa100]"
                }`}
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-4 border-white border-t-transparent"></div>
                    <span>جاري الإرسال...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>قدّم طلبك الآن</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#394867] mb-4">
              تجارب المحلات الشريكة
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              تعرف على تجارب بعض المحلات التي انضمت إلى منصتنا
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "محل الوادي للخضار",
                role: "شريك منذ 2022",
                quote:
                  "بعد الانضمام إلى منصة مُروج، زادت مبيعاتنا بنسبة 35% وأصبح لدينا قاعدة عملاء أكبر بكثير.",
                image:
                  "https://cdn.alweb.com/thumbs/money/article/fit710x532/%D9%83%D9%8A%D9%81-%D8%A3%D8%A8%D8%AF%D8%A3-%D9%85%D8%B4%D8%B1%D9%88%D8%B9-%D9%85%D8%AD%D9%84-%D8%AE%D8%B6%D8%A7%D8%B1.jpg",
              },
              {
                name: "سلة الفواكه الطازجة",
                role: "شريك منذ 2023",
                quote:
                  "المنصة ساعدتنا على تنظيم الطلبات وتوسيع نطاق عملنا بشكل ملحوظ.",
                image:
                  "https://invest.midanalmal.com/wp-content/uploads/2024/06/%D8%AF%D9%8A%D9%83%D9%88%D8%B1%D8%A7%D8%AA-%D9%85%D8%AD%D9%84%D8%A7%D8%AA-%D8%AE%D8%B6%D8%A7%D8%B1-%D9%88%D9%81%D9%88%D8%A7%D9%83%D9%87-%D8%B9%D8%B5%D8%B1%D9%8A%D8%A9-630x300.jpg",
              },
              {
                name: "سوق الخير",
                role: "شريك منذ 2021",
                quote:
                  "أفضل قرار اتخذناه هو الانضمام إلى مُروج، الخدمة والدعم المقدم ممتازان.",
                image:
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK6IC40mKTNxigQSIWRHiKc440jRtQrOKNbw&s",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-[#81c408]"
                  />
                  <div className="mr-4">
                    <h4 className="text-lg font-semibold text-[#394867]">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-[#81c408]">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#81c408]/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-[#394867] mb-6">
            جاهز للانضمام إلى شبكة محلاتنا؟
          </h2>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            لا تفوت فرصة زيادة مبيعاتك وتوسيع نطاق عملك مع منصتنا
          </p>
          <a
            href="#apply-form"
            className="inline-block px-8 py-3 bg-[#81c408] text-white rounded-lg font-medium hover:bg-[#6fa100] transition-all shadow-md hover:shadow-lg transform hover:-translate-y-1"
          >
            قدم طلبك الآن
          </a>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#394867] mb-4">
              الأسئلة الشائعة
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              إليك إجابات على الأسئلة الأكثر شيوعاً حول الشراكة معنا
            </p>
          </div>

          <div className="max-w-3xl mx-auto divide-y">
            {[
              {
                question: "ما هي متطلبات الانضمام كشريك محل؟",
                answer:
                  "يجب أن يكون لديك ترخيص تجاري ساري، محل في موقع مناسب، ومنتجات طازجة وعالية الجودة.",
              },
              {
                question: "كيف يتم احتساب العمولة؟",
                answer:
                  "نحن نأخذ عمولة بسيطة على كل طلب، وتختلف النسبة حسب نوع المنتجات وحجم الطلبات.",
              },
              {
                question: "كيف يتم الدفع؟",
                answer:
                  "يتم تحويل المبالغ أسبوعياً إلى حسابك البنكي مع تقرير مفصل عن جميع الطلبات.",
              },
              {
                question: "هل يمكنني إدارة أكثر من فرع؟",
                answer:
                  "نعم، يمكنك إدارة عدة فروع من خلال حساب واحد على المنصة.",
              },
            ].map((faq, index) => (
              <div key={index} className="py-6">
                <h4 className="text-xl font-semibold text-[#394867] mb-2">
                  {faq.question}
                </h4>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default JoinUs;
