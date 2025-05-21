import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaWhatsapp,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaPaperPlane,
} from "react-icons/fa";
import Footer from "../pages/Footer";
import axios from "axios";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccessMessage("");
    setErrorMessage("");
    setIsSubmitting(true);

    try {
      const response = await axios.post(
        "http://localhost:5000/api/contact",
        formData
      );

      if (response.status === 201) {
        setSuccessMessage("✅ تم إرسال رسالتك بنجاح. سنقوم بالرد عليك قريباً.");
        setFormData({ name: "", email: "", subject: "", message: "" });
      }
    } catch (error) {
      setErrorMessage(
        "❌ حدث خطأ أثناء إرسال الرسالة. يرجى المحاولة مرة أخرى."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div dir="rtl">
      {/* بانر العنوان */}
      <div className="bg-[#81c408] text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center">اتصل بنا</h1>
          <div className="flex justify-center mt-4">
            <Link to="/" className="text-white hover:text-gray-200">
              الرئيسية
            </Link>
            <span className="mx-2">/</span>
            <span className="text-gray-200">اتصل بنا</span>
          </div>
        </div>
      </div>

      {/* قسم اتصل بنا */}
      <section
        id="contactus"
        className="py-20 bg-gradient-to-r from-[#F1F6F9] to-[#E2F0CB]"
      >
        <div className="max-w-screen-lg mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* معلومات الاتصال */}
            <div className="contactus-info bg-white p-8 rounded-lg shadow-md transform transition-all duration-300 hover:shadow-xl">
              <h2 className="text-3xl font-bold text-[#394867] mb-6 border-r-4 border-[#81c408] pr-4">
                نحن هنا لمساعدتك
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                نحن نقدر تواصلك معنا. إذا كان لديك أي استفسار أو تحتاج إلى
                مساعدة بخصوص خدماتنا، لا تتردد في التواصل معنا عبر إحدى الطرق
                التالية.
              </p>

              <div className="contactus-details space-y-6 mt-8">
                <div className="flex items-start space-x-4 space-x-reverse">
                  <div className="bg-[#81c408]/20 p-3 rounded-full">
                    <FaMapMarkerAlt className="text-xl text-[#81c408]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#394867] mb-2">
                      عنواننا
                    </h3>
                    <p className="text-gray-700">
                      شارع السوق المركزي، الزرقاء، الأردن
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 space-x-reverse">
                  <div className="bg-[#81c408]/20 p-3 rounded-full">
                    <FaPhoneAlt className="text-xl text-[#81c408]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#394867] mb-2">
                      اتصل بنا
                    </h3>
                    <p className="text-gray-700">+962 6 123 4567</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 space-x-reverse">
                  <div className="bg-[#81c408]/20 p-3 rounded-full">
                    <FaEnvelope className="text-xl text-[#81c408]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#394867] mb-2">
                      البريد الإلكتروني
                    </h3>
                    <a
                      href="mailto:murooj@gmail.com"
                      className="text-[#81c408] hover:underline"
                    >
                      murooj@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              {/* وسائل التواصل الاجتماعي */}
              <div className="mt-12">
                <h3 className="text-xl font-semibold text-[#394867] mb-4">
                  تابعنا على
                </h3>
                <div className="flex space-x-4 space-x-reverse">
                  <a
                    href="https://www.facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition duration-300"
                  >
                    <FaFacebook />
                  </a>
                  <a
                    href="https://wa.me/1234567890"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-600 text-white p-3 rounded-full hover:bg-green-700 transition duration-300"
                  >
                    <FaWhatsapp />
                  </a>
                  <a
                    href="https://www.instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-pink-600 text-white p-3 rounded-full hover:bg-pink-700 transition duration-300"
                  >
                    <FaInstagram />
                  </a>
                </div>
              </div>
            </div>

            {/* نموذج الاتصال */}
            <div className="contactus-form bg-white shadow-lg p-8 rounded-lg transform transition-all duration-300 hover:shadow-xl">
              <h3 className="text-2xl font-bold text-[#394867] mb-6 border-r-4 border-[#81c408] pr-4">
                أرسل لنا رسالة
              </h3>
              <p className="text-gray-600 mb-6">
                يرجى ملء النموذج أدناه وسنرد عليك في أقرب وقت ممكن.
              </p>

              <form onSubmit={handleSubmit}>
                <div className="form-group mb-6">
                  <label
                    htmlFor="name"
                    className="block text-lg text-gray-700 mb-2 font-medium"
                  >
                    الاسم الكامل <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="أدخل اسمك الكامل"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#81c408] focus:border-transparent text-right bg-gray-50"
                    required
                  />
                </div>

                <div className="form-group mb-6">
                  <label
                    htmlFor="email"
                    className="block text-lg text-gray-700 mb-2 font-medium"
                  >
                    البريد الإلكتروني <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="أدخل بريدك الإلكتروني"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#81c408] focus:border-transparent text-right bg-gray-50"
                    required
                  />
                </div>

                <div className="form-group mb-6">
                  <label
                    htmlFor="subject"
                    className="block text-lg text-gray-700 mb-2 font-medium"
                  >
                    الموضوع
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="موضوع الرسالة"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#81c408] focus:border-transparent text-right bg-gray-50"
                  />
                </div>

                <div className="form-group mb-6">
                  <label
                    htmlFor="message"
                    className="block text-lg text-gray-700 mb-2 font-medium"
                  >
                    الرسالة <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    placeholder="اكتب رسالتك هنا..."
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#81c408] focus:border-transparent text-right bg-gray-50"
                    required
                  ></textarea>
                </div>

                {successMessage && (
                  <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6 flex items-center">
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>{successMessage}</span>
                  </div>
                )}

                {errorMessage && (
                  <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6 flex items-center">
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>{errorMessage}</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-[#81c408] text-white py-3 rounded-lg transition duration-300 flex items-center justify-center space-x-2 space-x-reverse ${
                    isSubmitting
                      ? "opacity-75 cursor-not-allowed"
                      : "hover:bg-[#5f8a31]"
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      <span>جاري الإرسال...</span>
                    </>
                  ) : (
                    <>
                      <FaPaperPlane />
                      <span>إرسال الرسالة</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* خريطة الموقع */}
      <section className="py-12">
        <div className="max-w-screen-lg mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#394867] mb-8 text-center">
            موقعنا
          </h2>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27054.207217240753!2d36.066330899999995!3d32.0567198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151b65cd4d8f17e1%3A0x30e95b3ed06d0350!2z2KfZhNiy2LHZgtin2KHYjCDYp9mE2KPYsdiv2YY!5e0!3m2!1sar!2sus!4v1650321076411!5m2!1sar!2sus"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="موقع مُروج"
            ></iframe>
          </div>
        </div>
      </section>

      {/* ✅ Footer */}
      <Footer />
    </div>
  );
};

export default ContactUs;
