import React, { useState } from "react";
import {
  Store,
  Clock,
  BarChart,
  Users,
  CheckCircle,
  AlertCircle,
  Send,
  Truck,
  Package,
  ShieldCheck,
} from "lucide-react";
import Footer from "../pages/Footer";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function JoinAsStore() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    storeName: "",
    ownerName: "",
    email: "",
    phone: "",
    address: "",
    storeType: "",
    licenseNumber: "",
    experience: "",
    password: "",
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
      const user = JSON.parse(localStorage.getItem("user"));
      if (!user || !user.token) {
        navigate("/login");
        return;
      }

      const res = await axios.post(
        "http://localhost:5000/api/joinasstore",
        {
          ...formData,
          userId: user.userId
        },
        {
          headers: {
            Authorization: `Bearer ${user.token}`
          }
        }
      );
      
      if (res.status === 201) {
        setSuccessMsg("✅ تم إرسال طلبك بنجاح! سيتم مراجعته من قبل الإدارة وسيتم إعلامك بالنتيجة عبر البريد الإلكتروني.");
        setFormData({
          storeName: "",
          ownerName: "",
          email: "",
          phone: "",
          address: "",
          storeType: "",
          licenseNumber: "",
          experience: "",
          agreement: false,
        });
      }
    } catch (error) {
      setErrorMsg("❌ حدث خطأ أثناء إرسال الطلب. يرجى المحاولة مرة أخرى.");
      console.error("Error submitting store registration:", error);
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
        <div className="absolute inset-0 bg-[url('/images/vegetables-pattern.png')] opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-1 bg-[#81c408]/20 text-[#81c408] font-medium rounded-full mb-4">
              فرص شراكة
            </span>
            <h1 className="text-5xl font-bold text-[#394867] mb-6">
              سجّل <span className="text-[#81c408]">محل الخضروات</span> الخاص بك
              على منصة مُروج
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
              وسّع أعمالك وزد مبيعاتك من خلال الانضمام إلى منصتنا الرائدة في
              توصيل الخضروات والفواكه الطازجة!
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
              متطلبات التسجيل
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              نبحث عن محلات خضروات ذات جودة عالية للانضمام إلى منصتنا وتقديم
              أفضل المنتجات لعملائنا
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "رخصة تجارية سارية",
                description:
                  "يجب أن يكون لديك رخصة تجارية سارية المفعول لممارسة نشاط بيع الخضروات والفواكه.",
              },
              {
                title: "خبرة في المجال",
                description:
                  "خبرة لا تقل عن سنة في مجال بيع وتوريد الخضروات والفواكه الطازجة.",
              },
              {
                title: "التزام بالجودة",
                description:
                  "القدرة على توفير منتجات طازجة عالية الجودة والالتزام بمعايير الجودة والنظافة.",
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
                مزايا الانضمام لمنصة مُروج
                <span className="block w-16 h-1 bg-[#81c408] mt-2"></span>
              </h3>
              <p className="text-gray-600">
                اكتشف الفوائد العديدة التي ستحصل عليها عند تسجيل محل الخضروات
                الخاص بك على منصتنا
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {[
                {
                  icon: <BarChart className="w-6 h-6" />,
                  title: "زيادة المبيعات",
                  text: "وصول إلى قاعدة عملاء أكبر مما يساهم في زيادة مبيعاتك وأرباحك.",
                },
                {
                  icon: <Clock className="w-6 h-6" />,
                  title: "توفير الوقت والجهد",
                  text: "نظام إدارة متكامل يساعدك على إدارة مخزونك وطلباتك بكل سهولة.",
                },
                {
                  icon: <Truck className="w-6 h-6" />,
                  title: "خدمة توصيل متكاملة",
                  text: "نوفر خدمة توصيل احترافية لتوصيل منتجاتك للعملاء بسرعة وكفاءة.",
                },
                {
                  icon: <Users className="w-6 h-6" />,
                  title: "تحليلات وتقارير",
                  text: "تقارير تفصيلية عن مبيعاتك وتفضيلات العملاء لمساعدتك في تطوير أعمالك.",
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
                خدماتنا المميزة
              </h4>
              <ul className="space-y-3">
                {[
                  "منصة إلكترونية متطورة لإدارة المخزون والطلبات",
                  "فريق دعم فني متخصص على مدار الساعة",
                  "عمولات تنافسية ومدفوعات أسبوعية",
                  "إمكانية الوصول إلى الإحصائيات والتقارير",
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
              سجّل محل الخضروات الخاص بك
            </h2>
            <p className="text-gray-600 mb-6">
              املأ النموذج التالي وسنتواصل معك في أقرب وقت ممكن
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="storeName"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    اسم المحل
                  </label>
                  <input
                    type="text"
                    id="storeName"
                    name="storeName"
                    value={formData.storeName}
                    onChange={handleChange}
                    required
                    placeholder="أدخل اسم المحل"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#81c408] focus:outline-none"
                  />
                </div>

                <div>
                  <label
                    htmlFor="ownerName"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    اسم المالك
                  </label>
                  <input
                    type="text"
                    id="ownerName"
                    name="ownerName"
                    value={formData.ownerName}
                    onChange={handleChange}
                    required
                    placeholder="أدخل اسم المالك"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#81c408] focus:outline-none"
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-5">
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
              ///////////////////////////////////////
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  كلمة المرور
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  placeholder="ادخل كلمة مرور قوية"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#81c408] focus:outline-none"
                />
              </div>
              ///////////////////////////////////////
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
                  placeholder="المدينة، الحي، الشارع"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#81c408] focus:outline-none"
                />
              </div>
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="storeType"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    نوع المحل
                  </label>
                  <select
                    id="storeType"
                    name="storeType"
                    value={formData.storeType}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#81c408] focus:outline-none bg-white"
                  >
                    <option value="" disabled>
                      اختر نوع المحل
                    </option>
                    <option value="vegetables">محل خضروات فقط</option>
                    <option value="fruits">محل فواكه فقط</option>
                    <option value="both">خضروات وفواكه</option>
                    <option value="supermarket">سوبر ماركت</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="licenseNumber"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    رقم الرخصة التجارية
                  </label>
                  <input
                    type="text"
                    id="licenseNumber"
                    name="licenseNumber"
                    value={formData.licenseNumber}
                    onChange={handleChange}
                    required
                    placeholder="أدخل رقم الرخصة التجارية"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#81c408] focus:outline-none"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="experience"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  نبذة عن خبرتك في المجال
                </label>
                <textarea
                  id="experience"
                  name="experience"
                  rows="4"
                  value={formData.experience}
                  onChange={handleChange}
                  required
                  placeholder="أخبرنا عن خبرتك في مجال بيع الخضروات والفواكه، منذ متى وأنت تعمل في هذا المجال، وأي معلومات إضافية ترغب في مشاركتها..."
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
                <div className="p-3 bg-green-50 text-green-700 rounded-lg border border-green-200 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" /> {successMsg}
                </div>
              )}
              {errorMsg && (
                <div className="p-3 bg-red-50 text-red-700 rounded-lg border border-red-200 flex items-center gap-2">
                  <AlertCircle className="w-5 h-5" /> {errorMsg}
                </div>
              )}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 bg-[#81c408] text-white rounded-lg font-medium flex items-center justify-center gap-2 ${
                  isSubmitting
                    ? "opacity-70 cursor-not-allowed"
                    : "hover:bg-[#6fa100]"
                } transition-all`}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    جاري الإرسال...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" /> إرسال الطلب
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
              قصص نجاح شركائنا
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              استمع إلى تجارب أصحاب المحلات الذين انضموا إلينا وكيف ساعدتهم منصة
              مُروج في تطوير أعمالهم
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "أحمد السعيد",
                store: "خضروات الصفا",
                image: "/images/testimonial-1.jpg",
                quote:
                  "منذ انضمامي لمنصة مُروج، زادت مبيعاتي بنسبة 40% وأصبح لدي عملاء جدد من مناطق مختلفة. أشكرهم على الدعم المستمر والنظام السهل.",
              },
              {
                name: "محمد العتيبي",
                store: "فواكه المدينة",
                image: "/images/testimonial-2.jpg",
                quote:
                  "الانضمام لمنصة مُروج كان من أفضل القرارات التي اتخذتها لتوسيع نطاق عملي. الآن أستطيع إدارة مخزوني بكفاءة عالية وتوصيل طلبات أكثر.",
              },
              {
                name: "خالد الشمري",
                store: "سوبر ماركت الأمانة",
                image: "/images/testimonial-3.jpg",
                quote:
                  "الدعم الفني والتقارير الأسبوعية ساعدتني في فهم احتياجات العملاء بشكل أفضل. أنصح كل صاحب محل بالانضمام إلى هذه المنصة الرائعة.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all"
              >
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 bg-gray-300 rounded-full overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.src = "";
                      }}
                    />
                  </div>
                  <div className="mr-4">
                    <h3 className="text-lg font-semibold text-[#394867]">
                      {item.name}
                    </h3>
                    <p className="text-sm text-gray-500">{item.store}</p>
                  </div>
                </div>
                <p className="text-gray-700">"{item.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#394867] mb-4">
              الأسئلة الشائعة
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              إليك إجابات على الأسئلة الأكثر شيوعاً حول الانضمام لمنصة مُروج
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "ما هي تكلفة الانضمام لمنصة مُروج؟",
                answer:
                  "الانضمام لمنصة مُروج مجاني تماماً، نحن نعمل بنظام العمولة على المبيعات فقط. نأخذ نسبة صغيرة من كل طلب يتم من خلال المنصة.",
              },
              {
                question: "كم تبلغ نسبة العمولة على الطلبات؟",
                answer:
                  "تتراوح نسبة العمولة بين 10% إلى 15% حسب حجم المبيعات وقيمة الطلب. كلما زادت مبيعاتك، كلما قلت نسبة العمولة.",
              },
              {
                question: "متى سأحصل على مستحقاتي المالية؟",
                answer:
                  "يتم تحويل المستحقات المالية بشكل أسبوعي إلى الحساب البنكي الذي تحدده عند التسجيل. يمكنك متابعة الأرباح والمبيعات من خلال لوحة التحكم الخاصة بك.",
              },
              {
                question: "هل يمكنني تحديد منطقة التوصيل الخاصة بمحلي؟",
                answer:
                  "نعم، يمكنك تحديد مناطق التوصيل التي تفضلها والمسافة القصوى للتوصيل من موقع محلك من خلال لوحة التحكم.",
              },
              {
                question: "كم يستغرق قبول طلب الانضمام؟",
                answer:
                  "عادة ما تستغرق مراجعة الطلبات من 3 إلى 5 أيام عمل. سيقوم فريقنا بالتواصل معك لزيارة المحل والتأكد من استيفاء جميع الشروط قبل قبول الطلب.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
              >
                <h4 className="text-xl font-semibold text-[#394867] mb-3 flex items-center gap-2">
                  <div className="w-8 h-8 bg-[#81c408]/20 text-[#81c408] rounded-full flex items-center justify-center">
                    ?
                  </div>
                  {item.question}
                </h4>
                <p className="text-gray-700 pr-10">{item.answer}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <p className="text-gray-600 mb-4">
              هل لديك أسئلة أخرى؟ تواصل مع فريق الدعم الفني
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2 text-[#81c408] hover:underline font-medium"
            >
              <Send className="w-4 h-4" /> تواصل معنا
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#394867] text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">
              انضم إلى مُروج اليوم وكن جزءاً من مستقبل توصيل الخضروات والفواكه
              الطازجة
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              لا تفوت الفرصة لتوسيع نطاق عملك والوصول إلى آلاف العملاء الجدد
            </p>
            <a
              href="#apply-form"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#81c408] text-white rounded-lg font-medium hover:bg-[#6fa100] transition-all shadow-md hover:shadow-lg transform hover:-translate-y-1"
            >
              <ShieldCheck className="w-5 h-5" /> سجّل محلك الآن
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default JoinAsStore;
