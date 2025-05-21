import React from "react";
import Footer from "../pages/Footer";
import { Leaf, Target, Shield, Check, Clock, Users, Award } from "lucide-react";

const AboutUs = () => {
  const values = [
    {
      icon: <Leaf className="w-6 h-6 text-[#81c408]" />,
      title: "الجودة العالية",
      description: "نختار الخضروات والفواكه الطازجة يومياً من أفضل المصادر",
    },
    {
      icon: <Clock className="w-6 h-6 text-[#81c408]" />,
      title: "التوصيل السريع",
      description: "نلتزم بتوصيل طلبك بسرعة وكفاءة في الوقت المحدد",
    },
    {
      icon: <Shield className="w-6 h-6 text-[#81c408]" />,
      title: "الموثوقية",
      description: "نضمن لك منتجات آمنة وذات جودة تلبي توقعاتك",
    },
  ];

  const milestones = [
    {
      year: "2021",
      title: "تأسيس مروج",
      description: "انطلاق فكرة توصيل الخضروات والفواكه الطازجة",
    },
    {
      year: "2022",
      title: "التوسع الأول",
      description: "توسيع نطاق الخدمة لتشمل معظم مناطق المملكة",
    },
    {
      year: "2023",
      title: "إطلاق التطبيق",
      description: "تطوير تطبيق هاتفي لتسهيل تجربة التسوق",
    },
    {
      year: "2024",
      title: "شراكات جديدة",
      description: "بناء شراكات مع أكثر من 100 مزارع محلي",
    },
  ];

  return (
    <div className="font-[Cairo, sans-serif]" dir="rtl">
      {/* Hero Section */}
      <div className="relative py-24 bg-gradient-to-br from-[#F1F6F9] to-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/pattern-bg.png')] opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-6 py-2 bg-[#81c408]/20 text-[#81c408] font-medium rounded-full mb-5 text-lg">
              قصة نجاحنا
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-[#394867] mb-6">
              تعرف على{" "}
              <span className="text-[#81c408] relative">
                مُروج
                <span className="absolute -bottom-2 left-0 right-0 h-1 bg-[#81c408]/30 rounded-full"></span>
              </span>
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8 leading-relaxed">
              رحلتنا بدأت من فكرة بسيطة: توصيل الخضروات والفواكه الطازجة من
              السوق إلى بابك
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </div>

      {/* About Us Section - تحسين الهيكل والتصميم */}
      <section id="aboutus" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
            <div className="lg:w-1/2 text-center lg:text-right">
              <span className="inline-block px-4 py-1 bg-[#81c408]/20 text-[#81c408] font-medium rounded-full mb-4">
                من نحن
              </span>
              <h2 className="text-4xl font-bold text-[#394867] mb-6">
                قصة <span className="text-[#81c408]">مروج</span> وهدفنا
              </h2>
              <p className="intro-text text-lg text-gray-700 mb-8 leading-relaxed">
                نحن في <strong className="text-[#81c408]">مروج</strong> نسعى
                لتقديم أفضل تجربة تسوق لعملائنا عبر توفير الخضروات والفواكه
                الطازجة مباشرة من السوق المركزي إلى منزلك. تأسست شركتنا على مبدأ
                بسيط: الجودة العالية والخدمة الاستثنائية. نحن نعمل بشغف لنقدم
                لكم أجود أنواع المنتجات الزراعية الطازجة من المزارعين مباشرة إلى
                منازلكم.
              </p>
              <div className="about-info mb-8 p-6 bg-gray-50 rounded-lg shadow-sm">
                <h3 className="text-2xl font-semibold text-[#394867] mb-4">
                  رؤيتنا
                </h3>
                <p className="text-lg text-gray-700">
                  نسعى لأن نكون المنصة الرائدة في توصيل المنتجات الطازجة من
                  السوق المركزي إلى باب كل منزل بسهولة وسرعة، مع الالتزام بتقديم
                  منتجات عالية الجودة وبتجربة تسوق مريحة وآمنة.
                </p>
              </div>
              <div className="about-info p-6 bg-gray-50 rounded-lg shadow-sm">
                <h3 className="text-2xl font-semibold text-[#394867] mb-4">
                  رسالتنا
                </h3>
                <p className="text-lg text-gray-700">
                  تسهيل حياة الناس من خلال توفير وقتهم وجهدهم وتقديم منتجات
                  طازجة وصحية بأسعار منافسة وجودة عالية مع خدمة توصيل سريعة
                  وموثوقة.
                </p>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="relative">
                <div className="absolute -top-6 -right-6 w-40 h-40 bg-[#81c408]/10 rounded-full -z-10"></div>
                <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-[#394867]/10 rounded-full -z-10"></div>
                <img
                  src="https://thefarminginsider.com/wp-content/uploads/2024/02/Investing-in-Green-Farms-Tips.jpeg"
                  alt="من نحن"
                  className="w-full rounded-lg shadow-xl relative z-10"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section - قسم جديد للقيم */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 bg-[#81c408]/20 text-[#81c408] font-medium rounded-full mb-4">
              قيمنا
            </span>
            <h2 className="text-4xl font-bold text-[#394867] mb-5">
              ما يميزنا
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              نحن ملتزمون بمجموعة من القيم الأساسية التي توجه كل قراراتنا
              وتعاملاتنا
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300"
              >
                <div className="bg-[#81c408]/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-[#394867] mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-700">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team Section - قسم جديد للفريق */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 bg-[#81c408]/20 text-[#81c408] font-medium rounded-full mb-4">
              فريقنا
            </span>
            <h2 className="text-4xl font-bold text-[#394867] mb-5">
              خبراء يعملون لخدمتك
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              فريق من الخبراء المتخصصين في مجالات متنوعة يعملون معاً لتقديم أفضل
              تجربة
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto">
            {[
              {
                name: "أحمد الشمري",
                role: "المؤسس والرئيس التنفيذي",
                image: "/api/placeholder/200/200",
              },
              {
                name: "سارة العتيبي",
                role: "مديرة العمليات",
                image: "/api/placeholder/200/200",
              },
              {
                name: "محمد القحطاني",
                role: "مدير تطوير الأعمال",
                image: "/api/placeholder/200/200",
              },
            ].map((member, index) => (
              <div key={index} className="text-center">
                <div className="relative inline-block mb-6">
                  <div className="absolute inset-0 bg-[#81c408]/20 rounded-full transform rotate-45"></div>
                  <img
                    src={member.image}
                    alt={member.name}
                    className="https://thefarminginsider.com/wp-content/uploads/2024/02/Investing-in-Green-Farms-Tips.jpeg"
                  />
                </div>
                <h3 className="text-xl font-bold text-[#394867] mb-2">
                  {member.name}
                </h3>
                <p className="text-[#81c408] font-medium">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Timeline - قسم لعرض تاريخ الشركة */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 bg-[#81c408]/20 text-[#81c408] font-medium rounded-full mb-4">
              قصتنا
            </span>
            <h2 className="text-4xl font-bold text-[#394867] mb-5">
              مسيرة النجاح
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              تعرف على المراحل الرئيسية في مسيرة نمو وتطور مُروج
            </p>
          </div>

          <div className="max-w-5xl mx-auto relative">
            <div className="absolute top-0 bottom-0 left-1/2 w-1 bg-[#81c408]/20 transform -translate-x-1/2 hidden md:block"></div>

            {milestones.map((milestone, index) => (
              <div
                key={index}
                className={`flex flex-col md:flex-row items-center gap-8 mb-16 relative ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="md:w-1/2 text-center md:text-right">
                  <span className="bg-[#81c408] text-white px-4 py-1 rounded-full text-sm font-medium inline-block mb-4">
                    {milestone.year}
                  </span>
                  <h3 className="text-2xl font-bold text-[#394867] mb-3">
                    {milestone.title}
                  </h3>
                  <p className="text-gray-700">{milestone.description}</p>
                </div>
                <div className="md:w-1/2 hidden md:block"></div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-10 h-10 bg-[#81c408] rounded-full flex items-center justify-center text-white hidden md:flex">
                  <Check className="w-5 h-5" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us - قسم لماذا تختارنا */}
      <section className="py-20 bg-[#394867]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 bg-white/20 text-white font-medium rounded-full mb-4">
              لماذا تختارنا
            </span>
            <h2 className="text-4xl font-bold text-white mb-5">
              ما الذي يميز مُروج
            </h2>
            <p className="text-lg text-gray-200 max-w-2xl mx-auto">
              أسباب تجعل عملاءنا يثقون بنا ويختاروننا باستمرار
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: <Award className="w-10 h-10 text-[#81c408]" />,
                title: "منتجات طازجة",
                description: "نختار منتجاتنا يومياً لضمان طزاجتها",
              },
              {
                icon: <Clock className="w-10 h-10 text-[#81c408]" />,
                title: "توصيل سريع",
                description: "نوصل طلبك في نفس اليوم بجدولة مريحة",
              },
              {
                icon: <Shield className="w-10 h-10 text-[#81c408]" />,
                title: "ضمان الجودة",
                description: "نضمن جودة كل منتج نقدمه",
              },
              {
                icon: <Users className="w-10 h-10 text-[#81c408]" />,
                title: "فريق خبير",
                description: "يعمل خبراؤنا على اختيار أفضل المنتجات",
              },
              {
                icon: <Target className="w-10 h-10 text-[#81c408]" />,
                title: "أسعار منافسة",
                description: "نقدم أسعاراً منافسة وعروضاً مستمرة",
              },
              {
                icon: <Leaf className="w-10 h-10 text-[#81c408]" />,
                title: "منتجات عضوية",
                description: "نوفر خيارات للمنتجات العضوية الصحية",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/5 hover:bg-white/15 transition-all"
              >
                <div className="flex items-center gap-4 mb-4">
                  {feature.icon}
                  <h3 className="text-xl font-bold text-white">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-gray-200">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials - قسم آراء العملاء */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 bg-[#81c408]/20 text-[#81c408] font-medium rounded-full mb-4">
              آراء العملاء
            </span>
            <h2 className="text-4xl font-bold text-[#394867] mb-5">
              ماذا يقول عملاؤنا؟
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              تجارب واقعية من عملائنا الكرام الذين يثقون بنا
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                text: "المنتجات دائماً طازجة وبجودة ممتازة، والتوصيل سريع ودقيق في المواعيد!",
                name: "فهد المالكي",
                location: "الرياض",
              },
              {
                text: "أسعار معقولة وتوصيل سريع، أصبح تطبيق مروج جزءاً من روتيني الأسبوعي للتسوق!",
                name: "نورة العنزي",
                location: "جدة",
              },
              {
                text: "خدمة عملاء ممتازة وحلول سريعة لأي مشكلة، يمكن الاعتماد عليهم دائماً.",
                name: "سعد الشمري",
                location: "الدمام",
              },
            ].map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-xl relative">
                <div className="text-6xl font-serif text-[#81c408]/20 absolute top-4 right-6">
                  "
                </div>
                <p className="text-gray-700 mb-8 relative z-10 leading-relaxed">
                  {testimonial.text}
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-[#394867] text-white rounded-full flex items-center justify-center font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="mr-4">
                    <h4 className="font-bold text-[#394867]">
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-500 text-sm">
                      {testimonial.location}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#81c408]/10 to-[#394867]/10">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-[#394867] mb-6">
            تواصل معنا اليوم
          </h2>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            نحن هنا لمساعدتك والإجابة على جميع استفساراتك
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-4 bg-[#81c408] text-white rounded-lg font-medium hover:bg-[#6fa100] transition-all shadow-md hover:shadow-lg text-lg"
          >
            تواصل معنا
          </a>
        </div>
      </section>

      {/* ✅ Footer */}
      <Footer />
    </div>
  );
};

export default AboutUs;
