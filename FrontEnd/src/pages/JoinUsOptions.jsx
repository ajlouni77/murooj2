import React from "react";
import {
  Truck,
  Store,
  ArrowRight,
  ChevronLeft,
  Users,
  Clock,
  BarChart3,
} from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "../pages/Footer";

function JoinUsOptions() {
  return (
    <div
      className="flex flex-col min-h-screen font-[Cairo, sans-serif]"
      dir="rtl"
    >
      {/* Hero Section - تحسين مع إضافة خلفية أفضل وتنسيق أكثر جاذبية */}
      <div className="relative bg-gradient-to-br from-[#F1F6F9] to-white py-24">
        <div className="absolute inset-0 bg-[url('/images/delivery-pattern.png')] opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-6 py-2 bg-[#81c408]/20 text-[#81c408] font-medium rounded-full mb-5 text-lg">
              فرص عمل وشراكة
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-[#394867] mb-6">
              انضم إلى عائلة{" "}
              <span className="text-[#81c408] relative">
                مُروج
                <span className="absolute -bottom-2 left-0 right-0 h-1 bg-[#81c408]/30 rounded-full"></span>
              </span>
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-10 leading-relaxed">
              نوفر لك فرصاً متنوعة للانضمام إلينا سواء كنت ترغب في العمل كسائق
              توصيل أو كنت صاحب محل خضروات وترغب في توسيع نطاق عملك
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              {/* <a
                href="#options"
                className="px-8 py-4 bg-[#81c408] text-white rounded-lg font-medium hover:bg-[#6fa100] transition-all shadow-lg hover:shadow-xl text-lg"
              >
                استكشف الخيارات
              </a> */}
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </div>

      {/* Options Section - تحسين البطاقات وإضافة تأثيرات بصرية */}
      <section id="options" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 bg-gray-100 text-gray-700 font-medium rounded-full mb-4">
              طرق الانضمام
            </span>
            <h2 className="text-4xl font-bold text-[#394867] mb-5">
              اختر طريقة الانضمام إلينا
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              لدينا خياران للانضمام إلى فريق مُروج، اختر ما يناسب مهاراتك
              وطموحاتك
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {/* Driver Option - تحسين البطاقة */}
            <div className="bg-white p-10 rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 relative overflow-hidden group">
              <div className="absolute top-0 left-0 right-0 h-2 bg-[#81c408]"></div>
              <div className="bg-[#81c408]/10 p-5 rounded-full w-24 h-24 flex items-center justify-center mb-8 mx-auto group-hover:bg-[#81c408]/20 transition-all duration-300">
                <Truck className="w-12 h-12 text-[#81c408]" />
              </div>
              <h3 className="text-2xl font-bold text-[#394867] mb-5 text-center">
                انضم كـسائق توصيل
              </h3>
              <p className="text-gray-600 mb-8 text-center text-lg leading-relaxed">
                قم بتوصيل المنتجات الطازجة لعملائنا وكن جزءًا من فريق التوصيل
                المتميز لدينا
              </p>
              <ul className="space-y-4 mb-10">
                <li className="flex items-center gap-3">
                  <div className="w-7 h-7 bg-[#81c408] text-white rounded-full flex items-center justify-center text-xs shadow-md">
                    ✓
                  </div>
                  <span className="text-gray-700 font-medium">
                    دخل مجزي مع حوافز إضافية
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-7 h-7 bg-[#81c408] text-white rounded-full flex items-center justify-center text-xs shadow-md">
                    ✓
                  </div>
                  <span className="text-gray-700 font-medium">
                    ساعات عمل مرنة
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-7 h-7 bg-[#81c408] text-white rounded-full flex items-center justify-center text-xs shadow-md">
                    ✓
                  </div>
                  <span className="text-gray-700 font-medium">
                    فرص للتطور المهني
                  </span>
                </li>
              </ul>
              <Link
                to="/joinus"
                className="w-full py-4 flex items-center justify-center gap-2 bg-[#81c408] text-white font-semibold rounded-lg transition-all shadow-md hover:shadow-lg hover:bg-[#6fa100] text-lg"
              >
                <span>تقديم طلب كسائق</span>
                <ChevronLeft className="w-5 h-5" />
              </Link>
            </div>

            {/* Store Option - تحسين البطاقة */}
            <div className="bg-white p-10 rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 relative overflow-hidden group">
              <div className="absolute top-0 left-0 right-0 h-2 bg-[#394867]"></div>
              <div className="bg-[#394867]/10 p-5 rounded-full w-24 h-24 flex items-center justify-center mb-8 mx-auto group-hover:bg-[#394867]/20 transition-all duration-300">
                <Store className="w-12 h-12 text-[#394867]" />
              </div>
              <h3 className="text-2xl font-bold text-[#394867] mb-5 text-center">
                انضم كـمحل خضروات
              </h3>
              <p className="text-gray-600 mb-8 text-center text-lg leading-relaxed">
                وسع نطاق عملك وزد مبيعاتك من خلال الانضمام إلى منصتنا لبيع
                منتجاتك
              </p>
              <ul className="space-y-4 mb-10">
                <li className="flex items-center gap-3">
                  <div className="w-7 h-7 bg-[#394867] text-white rounded-full flex items-center justify-center text-xs shadow-md">
                    ✓
                  </div>
                  <span className="text-gray-700 font-medium">
                    وصول إلى قاعدة عملاء أكبر
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-7 h-7 bg-[#394867] text-white rounded-full flex items-center justify-center text-xs shadow-md">
                    ✓
                  </div>
                  <span className="text-gray-700 font-medium">
                    نظام إدارة مخزون متطور
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-7 h-7 bg-[#394867] text-white rounded-full flex items-center justify-center text-xs shadow-md">
                    ✓
                  </div>
                  <span className="text-gray-700 font-medium">
                    خدمة توصيل احترافية
                  </span>
                </li>
              </ul>
              <Link
                to="/store"
                className="w-full py-4 flex items-center justify-center gap-2 bg-[#394867] text-white font-semibold rounded-lg transition-all shadow-md hover:shadow-lg hover:bg-[#273548] text-lg"
              >
                <span>تسجيل محل خضروات</span>
                <ChevronLeft className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Join Us Section - تحسين تصميم البطاقات وإضافة أيقونات */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 bg-[#81c408]/20 text-[#81c408] font-medium rounded-full mb-4">
              مميزاتنا
            </span>
            <h2 className="text-4xl font-bold text-[#394867] mb-5">
              لماذا تنضم إلينا؟
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              تعرف على المزايا التي تقدمها منصة مُروج لشركائها
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: <Users className="w-10 h-10 text-[#81c408]" />,
                title: "منصة رائدة",
                description:
                  "انضم إلى منصة رائدة في مجال توصيل الخضروات والفواكه الطازجة في المملكة.",
              },
              {
                icon: <Clock className="w-10 h-10 text-[#81c408]" />,
                title: "دعم مستمر",
                description:
                  "نقدم دعمًا فنيًا وتشغيليًا على مدار الساعة لضمان نجاح شركائنا.",
              },
              {
                icon: <BarChart3 className="w-10 h-10 text-[#81c408]" />,
                title: "نمو مستدام",
                description:
                  "شراكتك معنا تتيح لك فرصة النمو المستدام وزيادة الأرباح.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 group"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#81c408]/10 transition-all duration-300">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-[#394867] mb-4">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section - قسم جديد للشهادات */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 bg-gray-100 text-gray-700 font-medium rounded-full mb-4">
              قصص نجاح
            </span>
            <h2 className="text-4xl font-bold text-[#394867] mb-5">
              ماذا يقول شركاؤنا
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              تعرف على تجارب من انضموا إلينا وكيف ساهمت المنصة في نجاحهم
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            <div className="bg-gray-50 p-8 rounded-xl relative">
              <div className="text-6xl font-serif text-[#81c408]/20 absolute top-4 right-6">
                "
              </div>
              <p className="text-gray-700 mb-6 relative z-10 text-lg leading-relaxed">
                انضمامي كسائق توصيل مع مُروج غيّر حياتي المهنية تمامًا. أصبح لدي
                دخل ثابت مع مرونة في ساعات العمل، والتعامل مع فريق العمل ممتاز!
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-[#81c408] text-white rounded-full flex items-center justify-center font-bold">
                  م
                </div>
                <div className="mr-4">
                  <h4 className="font-bold text-[#394867]">محمد السالم</h4>
                  <p className="text-gray-500 text-sm">سائق توصيل - الرياض</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl relative">
              <div className="text-6xl font-serif text-[#81c408]/20 absolute top-4 right-6">
                "
              </div>
              <p className="text-gray-700 mb-6 relative z-10 text-lg leading-relaxed">
                بعد تسجيل متجري في منصة مُروج، ارتفعت مبيعاتي بنسبة 40%. النظام
                سهل الاستخدام وخدمة العملاء ممتازة، أنصح جميع أصحاب محلات الخضار
                بالانضمام!
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-[#394867] text-white rounded-full flex items-center justify-center font-bold">
                  ع
                </div>
                <div className="mr-4">
                  <h4 className="font-bold text-[#394867]">عبدالله الحربي</h4>
                  <p className="text-gray-500 text-sm">صاحب محل خضروات - جدة</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Steps Section - قسم جديد للخطوات */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 bg-[#81c408]/20 text-[#81c408] font-medium rounded-full mb-4">
              خطوات بسيطة
            </span>
            <h2 className="text-4xl font-bold text-[#394867] mb-5">
              كيف تنضم إلينا؟
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              ثلاث خطوات سهلة للانضمام إلى منصة مُروج
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="relative">
              <div className="absolute left-0 right-0 top-1/2 h-1 bg-gray-200 -translate-y-1/2 hidden md:block"></div>
              <div className="grid md:grid-cols-3 gap-10">
                {[
                  {
                    number: "1",
                    title: "قدم طلبك",
                    description:
                      "اختر الخيار المناسب واملأ نموذج التقديم عبر الإنترنت",
                  },
                  {
                    number: "2",
                    title: "مراجعة وتدريب",
                    description:
                      "سنراجع طلبك ونوفر لك التدريب اللازم للنجاح معنا",
                  },
                  {
                    number: "3",
                    title: "ابدأ العمل",
                    description: "استمتع بميزات العمل مع منصة رائدة في مجالها",
                  },
                ].map((step, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center relative z-10"
                  >
                    <div className="w-16 h-16 bg-[#81c408] text-white rounded-full flex items-center justify-center text-2xl font-bold shadow-lg mb-6">
                      {step.number}
                    </div>
                    <h3 className="text-xl font-bold text-[#394867] mb-4 text-center">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 text-center">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - تحسين القسم */}
      <section className="py-24 bg-gradient-to-br from-[#81c408]/15 to-[#394867]/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/delivery-pattern.png')] opacity-5"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl font-bold text-[#394867] mb-6">
            جاهز للانضمام إلى فريقنا؟
          </h2>
          <p className="text-xl text-gray-700 mb-10 max-w-2xl mx-auto">
            اختر الخيار المناسب لك وابدأ رحلة النجاح مع مُروج
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link
              to="/join-us/driver"
              className="px-10 py-4 bg-[#81c408] text-white rounded-lg font-medium hover:bg-[#6fa100] transition-all shadow-lg hover:shadow-xl text-lg"
            >
              انضم كسائق توصيل
            </Link>
            <Link
              to="/join-us/store"
              className="px-10 py-4 bg-[#394867] text-white rounded-lg font-medium hover:bg-[#273548] transition-all shadow-lg hover:shadow-xl text-lg"
            >
              سجل محل خضروات
            </Link>
          </div>
          <div className="mt-8 text-gray-600">
            لديك استفسارات؟{" "}
            <Link
              to="/contact"
              className="text-[#81c408] font-medium hover:underline"
            >
              تواصل معنا
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default JoinUsOptions;
