import React from "react";
import { Leaf, Apple, Carrot } from "lucide-react";
import { Link } from "react-router-dom"; // استيراد Link
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaLeaf,
} from "react-icons/fa";

const MarketCategories = () => {
  // تحديد اللون الأساسي للموقع
  const primaryColor = "#81c408";

  return (
    <>
      <section
        id="market-categories"
        className="py-16 px-4 bg-gray-50 w-full max-w-6xl mx-auto"
      >
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 relative">
            <span className="relative z-10">أقسام السوق</span>
            <span
              className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 rounded-full"
              style={{ backgroundColor: primaryColor }}
            ></span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            {/* الخضروات */}
            <div className="category bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-center">
              <div
                className="mx-auto w-16 h-16 flex items-center justify-center rounded-full mb-4"
                style={{ backgroundColor: `${primaryColor}20` }}
              >
                <Carrot size={32} style={{ color: primaryColor }} />
              </div>
              <h3 className="text-xl font-bold mb-2">الخضروات</h3>
              <p className="text-gray-600">مجموعة واسعة من الخضروات الطازجة.</p>
              <button
                className="mt-4 px-4 py-2 rounded-full text-sm font-medium text-white transition-colors duration-300"
                style={{
                  backgroundColor: primaryColor,
                  boxShadow: `0 4px 6px ${primaryColor}40`,
                }}
              >
                تصفح المنتجات
              </button>
            </div>

            {/* الفواكه */}
            <div className="category bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-center">
              <div
                className="mx-auto w-16 h-16 flex items-center justify-center rounded-full mb-4"
                style={{ backgroundColor: `${primaryColor}20` }}
              >
                <Apple size={32} style={{ color: primaryColor }} />
              </div>
              <h3 className="text-xl font-bold mb-2">الفواكه</h3>
              <p className="text-gray-600">
                أفضل أنواع الفواكه الموسمية والمستوردة.
              </p>
              <button
                className="mt-4 px-4 py-2 rounded-full text-sm font-medium text-white transition-colors duration-300"
                style={{
                  backgroundColor: primaryColor,
                  boxShadow: `0 4px 6px ${primaryColor}40`,
                }}
              >
                تصفح المنتجات
              </button>
            </div>

            {/* الأعشاب */}
            <div className="category bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-center">
              <div
                className="mx-auto w-16 h-16 flex items-center justify-center rounded-full mb-4"
                style={{ backgroundColor: `${primaryColor}20` }}
              >
                <Leaf size={32} style={{ color: primaryColor }} />
              </div>
              <h3 className="text-xl font-bold mb-2">الأعشاب</h3>
              <p className="text-gray-600">أعشاب وتوابل طازجة من السوق.</p>
              <button
                className="mt-4 px-4 py-2 rounded-full text-sm font-medium text-white transition-colors duration-300"
                style={{
                  backgroundColor: primaryColor,
                  boxShadow: `0 4px 6px ${primaryColor}40`,
                }}
              >
                تصفح المنتجات
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white mt-16">
        <div className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* معلومات الشركة */}
            <div>
              <div className="flex items-center space-x-2 space-x-reverse mb-4">
                <FaLeaf className="text-2xl text-green-400" />
                <span className="text-2xl font-bold text-green-400">مُروج</span>
              </div>
              <p className="text-gray-400 mb-6">
                منصة توصيل المنتجات الطازجة من السوق المركزي إلى المحلات ومن
                المحلات إلى المستهلكين.
              </p>
              <div className="flex space-x-4 space-x-reverse">
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  <FaFacebook />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  <FaTwitter />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  <FaInstagram />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  <FaLinkedin />
                </a>
              </div>
            </div>

            {/* روابط سريعة */}
            <div>
              <h3 className="text-lg font-bold mb-4 border-r-4 pr-3 text-green-400">
                روابط سريعة
              </h3>
              <ul className="space-y-2">
                {[
                  "الرئيسية",
                  "السوق المركزي",
                  "المحلات",
                  "من نحن",
                  "اتصل بنا",
                ].map((text, index) => (
                  <li key={index}>
                    <Link
                      to="/"
                      className="text-gray-400 hover:text-white transition duration-300"
                    >
                      {text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* الأصناف */}
            <div>
              <h3 className="text-lg font-bold mb-4 border-r-4 pr-3 text-green-400">
                الأصناف
              </h3>
              <ul className="space-y-2">
                {["خضروات", "فواكه", "أعشاب", "مكسرات"].map((text, index) => (
                  <li key={index}>
                    <Link
                      to="/category"
                      className="text-gray-400 hover:text-white transition duration-300"
                    >
                      {text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* تواصل معنا */}
            <div>
              <h3 className="text-lg font-bold mb-4 border-r-4 pr-3 text-green-400">
                تواصل معنا
              </h3>
              <ul className="space-y-3 text-gray-400">
                <li>شارع الملك عبدالله، الرياض، المملكة العربية السعودية</li>
                <li>info@murawij.com</li>
                <li>+966 12 345 6789</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-6 text-gray-400 text-center">
            <p>&copy; 2025 جميع الحقوق محفوظة | مُروج</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default MarketCategories;
