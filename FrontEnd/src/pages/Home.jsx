import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../pages/Footer";
import {
  FaShoppingCart,
  FaUser,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaSearch,
  FaLeaf,
  FaAppleAlt,
  FaStore,
  FaTruck,
  FaStar,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const primaryColor = "rgb(129, 196, 8)";
  const primaryColorHover = "rgb(109, 176, 0)";

  const topSellingShops = [
    {
      id: 1,
      name: "محل الوادي للخضار",
      location: "حي النزهة، الزرقاء",
      image: "https://invest.midanalmal.com/wp-content/uploads/2024/06/%D8%AF%D9%8A%D9%83%D9%88%D8%B1%D8%A7%D8%AA-%D9%85%D8%AD%D9%84%D8%A7%D8%AA-%D8%AE%D8%B6%D8%A7%D8%B1-%D9%88%D9%81%D9%88%D8%A7%D9%83%D9%87-%D8%B9%D8%B5%D8%B1%D9%8A%D8%A9-630x300.jpg",
      rating: 4.8,
      sales: 1240,
    },
    {
      id: 2,
      name: "سلة الفواكه الطازجة",
      location: "الهاشمية، الزرقاء",
      image: "https://cdn.alweb.com/thumbs/money/article/fit710x532/%D9%83%D9%8A%D9%81-%D8%A3%D8%A8%D8%AF%D8%A3-%D9%85%D8%B4%D8%B1%D9%88%D8%B9-%D9%85%D8%AD%D9%84-%D8%AE%D8%B6%D8%A7%D8%B1.jpg",
      rating: 4.9,
      sales: 980,
    },
    {
      id: 4,
      name: "سوق الخير",
      location: "ابو نصير، عمان",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK6IC40mKTNxigQSIWRHiKc440jRtQrOKNbw&s",
      rating: 4.6,
      sales: 750,
    },
  ];

  return (
    <div className="bg-gray-50 font-sans" dir="rtl">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-green-50 via-white to-green-50 overflow-hidden">
  {/* Decorative blurred shapes (optional) */}
  <div className="absolute top-0 right-0 w-64 h-64 bg-green-100 rounded-full opacity-20 blur-3xl"></div>
  <div className="absolute bottom-0 left-0 w-64 h-64 bg-yellow-100 rounded-full opacity-20 blur-3xl"></div>

  <div className="container mx-auto px-6 relative z-10">
    <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
      {/* Text Section */}
      <div className="lg:w-1/2 text-center lg:text-right">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
          خضروات وفواكه طازجة
          <span className="block mt-4" style={{ color: primaryColor }}>
            من المزرعة إلى منزلك
          </span>
        </h1>
        <p className="text-gray-600 mt-6 text-lg lg:text-xl max-w-lg mx-auto lg:mr-0 leading-relaxed">
          نقدم أفضل المنتجات الطازجة من السوق المركزي إلى المحلات ومن المحلات إلى منزلك بسهولة وسرعة.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4 sm:space-x-reverse">
          <Link
            to="/Shops"
            className="px-8 py-4 rounded-lg text-white font-medium shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-1"
            style={{ backgroundColor: primaryColor }}
          >
            تسوق الآن
          </Link>
        </div>
      </div>

      {/* Image Section */}
      <div className="lg:w-1/2">
        <img
          src="https://images.unsplash.com/photo-1674212466621-3a19431cd70b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="الخضروات والفواكه"
          className="w-full max-w-[600px] mx-auto rounded-2xl shadow-xl"
        />
      </div>
    </div>
  </div>
</section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 relative inline-block pb-2">
              لماذا تختار <span style={{ color: primaryColor }}>مُروج</span>؟
              <span
                className="absolute bottom-0 left-1/4 w-1/2 h-1 rounded-full"
                style={{ backgroundColor: primaryColor }}
              ></span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <FaLeaf
                    className="text-3xl"
                    style={{ color: primaryColor }}
                  />
                ),
                title: "منتجات طازجة",
                description:
                  "نضمن وصول المنتجات من المزرعة إلى منزلك بأقصر وقت للحفاظ على جودتها وطزاجتها.",
              },
              {
                icon: (
                  <FaTruck
                    className="text-3xl"
                    style={{ color: primaryColor }}
                  />
                ),
                title: "توصيل سريع",
                description:
                  "نوفر خدمة توصيل سريعة وموثوقة لجميع المناطق خلال ساعات قليلة من الطلب.",
              },
              {
                icon: (
                  <FaStore
                    className="text-3xl"
                    style={{ color: primaryColor }}
                  />
                ),
                title: "دعم المحلات",
                description:
                  "نساعد أصحاب المحلات على الحصول على أفضل المنتجات من السوق المركزي بأسعار تنافسية.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition duration-300 text-center border border-gray-100 transform hover:-translate-y-2"
              >
                <div
                  className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center transition-transform duration-300"
                  style={{ backgroundColor: "rgba(129, 196, 8, 0.1)" }}
                >
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-lg">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Selling Shops Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 relative inline-block pb-2">
              المحلات <span style={{ color: primaryColor }}>الأكثر مبيعاً</span>
              <span
                className="absolute bottom-0 left-1/4 w-1/2 h-1 rounded-full"
                style={{ backgroundColor: primaryColor }}
              ></span>
            </h2>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {topSellingShops.map((shop) => (
                <div
                  key={shop.id}
                  className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={shop.image}
                      alt={shop.name}
                      className="w-full h-60 object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <div
                      className="absolute top-4 right-4 text-sm px-3 py-1 rounded-full text-white font-medium shadow-md"
                      style={{ backgroundColor: primaryColor }}
                    >
                      الأكثر مبيعاً
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      {shop.name}
                    </h3>
                    <div className="flex items-center mt-2">
                      <FaMapMarkerAlt className="text-gray-500 ml-2" />
                      <p className="text-gray-600 text-sm">{shop.location}</p>
                    </div>

                    <div className="flex items-center mt-3 mb-4">
                      <div className="flex text-yellow-500">
                        {[...Array(5)].map((_, i) => (
                          <FaStar
                            key={i}
                            className={
                              i < Math.floor(shop.rating)
                                ? "text-yellow-500"
                                : "text-gray-300"
                            }
                          />
                        ))}
                      </div>
                      <span className="text-gray-700 font-medium text-sm mr-2">
                        {shop.rating}
                      </span>
                      <span className="text-gray-500 text-sm mr-2">
                        ({shop.sales} عملية بيع)
                      </span>
                    </div>

                    <div className="pt-3 border-t border-gray-100">
                      <Link
                        to={`/shops/${shop.id}`}
                        className="w-full inline-block py-2.5 text-center rounded-lg text-white font-medium transition duration-300 hover:shadow-md"
                        style={{ backgroundColor: primaryColor }}
                      >
                        عرض المنتجات
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 relative inline-block pb-2">
              آراء <span style={{ color: primaryColor }}>عملائنا</span>
              <span
                className="absolute bottom-0 left-1/4 w-1/2 h-1 rounded-full"
                style={{ backgroundColor: primaryColor }}
              ></span>
            </h2>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "أحمد محمد",
                  role: "صاحب محل",
                  testimonial:
                    "ساعدتني منصة مُروج على الحصول على أفضل المنتجات من السوق المركزي بأسعار تنافسية، مما أدى إلى زيادة أرباحي بنسبة 30%.",
                  avatar: "https://randomuser.me/api/portraits/men/32.jpg",
                },
                {
                  name: "سارة أحمد",
                  role: "مستهلكة",
                  testimonial:
                    "كنت أعاني من صعوبة الحصول على خضروات وفواكه طازجة، لكن مع مُروج أصبح الأمر سهلاً جداً. المنتجات طازجة والتوصيل سريع.",
                  avatar: "https://randomuser.me/api/portraits/women/44.jpg",
                },
                {
                  name: "خالد عبدالله",
                  role: "مستهلك",
                  testimonial:
                    "مُروج ساعدتني على تسويق منتجاتي بشكل أفضل والوصول إلى شريحة أكبر من العملاء. أنا سعيد جداً بالتعاون معهم.",
                  avatar: "https://randomuser.me/api/portraits/men/75.jpg",
                },
              ].map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-gray-50 p-8 rounded-2xl shadow-md hover:shadow-lg transition duration-300 border border-gray-100"
                >
                  <div className="flex items-center mb-4">
                    <div>
                      <h4 className="text-xl font-bold text-gray-800">
                        {testimonial.name}
                      </h4>
                      <p className="text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-700">{testimonial.testimonial}</p>
                  <div className="flex text-yellow-500 mt-4">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;