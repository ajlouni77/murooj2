import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate, Link } from "react-router-dom";
import { FaBars, FaBell, FaSearch, FaUser } from "react-icons/fa";
import Sidebar from "../components/adminDashboard/Sidebar";
import Statistics from "../components/adminDashboard/Statistics";
import ManageMessages from "../components/adminDashboard/ManageMessages";
import ManageOrders from "../components/adminDashboard/ManageOrders";
import ManagePayments from "../components/adminDashboard/ManagePayments";
import ManageAccounts from "../components/adminDashboard/ManageAccounts";

export default function AdminDashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  // الألوان الرئيسية
  const primaryColor = "rgb(129, 196, 8)";
  const secondaryColor = "oklch(0.278 0.033 256.848)";

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // التحقق من صلاحيات المستخدم مرة واحدة فقط
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user || (user.role !== "admin" && user.role !== "user")) {
      navigate("/login");
    }

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, [navigate]);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // وظيفة للتعامل مع البحث
  const handleSearch = (e) => {
    e.preventDefault();
    // يمكن إضافة منطق البحث هنا
    console.log("Searching for:", searchQuery);
  };

  return (
    <div className="flex bg-gray-50 min-h-screen" dir="rtl">
      {/* Sidebar */}
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
        primaryColor={primaryColor}
        secondaryColor={secondaryColor}
      />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
    

        {/* Content Area */}
        <main className="flex-1 overflow-y-auto p-6">
          <div className="max-w-7xl mx-auto">
            {/* Page Header */}
            <div className="mb-6 flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <h1
                  className="text-2xl font-bold"
                  style={{ color: secondaryColor }}
                >
                  <Routes>
                    <Route path="/" element={<>الإحصائيات</>} />
                    <Route path="messages" element={<>إدارة الرسائل</>} />
                    <Route path="orders" element={<>إدارة الطلبات</>} />
                    <Route path="payments" element={<>إدارة المدفوعات</>} />
                    <Route path="accounts" element={<>إدارة الحسابات</>} />
                  </Routes>
                </h1>
                <p className="text-gray-500 mt-1 text-sm">
                  <Routes>
                    <Route path="/" element={<>نظرة عامة على أداء النظام</>} />
                    <Route
                      path="messages"
                      element={<>إدارة رسائل العملاء والاستفسارات</>}
                    />
                    <Route
                      path="orders"
                      element={<>مراجعة وإدارة طلبات العملاء</>}
                    />
                    <Route
                      path="payments"
                      element={<>تتبع وإدارة المعاملات المالية</>}
                    />
                    <Route
                      path="accounts"
                      element={<>إدارة حسابات المستخدمين والصلاحيات</>}
                    />
                  </Routes>
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 mt-4 md:mt-0">
                <Routes>
                  <Route
                    path="/"
                    element={
                      <button
                        className="text-sm px-4 py-2 rounded-lg text-white shadow-sm hover:shadow transition-all"
                        style={{ backgroundColor: primaryColor }}
                      >
                        تحديث البيانات
                      </button>
                    }
                  />
                  
                  <Route
                    path="orders"
                    element={
                      <button
                        className="text-sm px-4 py-2 rounded-lg text-white shadow-sm hover:shadow transition-all"
                        style={{ backgroundColor: primaryColor }}
                      >
                        إضافة طلب
                      </button>
                    }
                  />
                  <Route
                    path="payments"
                    element={
                      <button
                        className="text-sm px-4 py-2 rounded-lg text-white shadow-sm hover:shadow transition-all"
                        style={{ backgroundColor: primaryColor }}
                      >
                        تسجيل دفعة
                      </button>
                    }
                  />
                  <Route
                    path="accounts"
                    element={
                      <button
                        className="text-sm px-4 py-2 rounded-lg text-white shadow-sm hover:shadow transition-all"
                        style={{ backgroundColor: primaryColor }}
                      >
                        إضافة حساب
                      </button>
                    }
                  />
                </Routes>
              </div>
            </div>

            {/* Breadcrumbs */}
            <div className="flex items-center mb-6 text-sm">
              <Link
                to="/dashboard"
                className="text-gray-600 hover:text-gray-900"
              >
                الرئيسية
              </Link>
              <span className="mx-2 text-gray-400">/</span>
              <Routes>
                <Route
                  path="/"
                  element={
                    <span className="text-gray-900 font-medium">
                      الإحصائيات
                    </span>
                  }
                />
                <Route
                  path="messages"
                  element={
                    <span className="text-gray-900 font-medium">الرسائل</span>
                  }
                />
                <Route
                  path="orders"
                  element={
                    <span className="text-gray-900 font-medium">الطلبات</span>
                  }
                />
                <Route
                  path="payments"
                  element={
                    <span className="text-gray-900 font-medium">المدفوعات</span>
                  }
                />
                <Route
                  path="accounts"
                  element={
                    <span className="text-gray-900 font-medium">الحسابات</span>
                  }
                />
              </Routes>
            </div>

            {/* Content */}
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <Routes>
                <Route index element={<Statistics />} />
                <Route path="messages" element={<ManageMessages />} />
                <Route path="orders" element={<ManageOrders />} />
                <Route path="payments" element={<ManagePayments />} />
                <Route path="accounts" element={<ManageAccounts />} />
              </Routes>
            </div>
          </div>
        </main>
      </div>

      {/* Mobile Sidebar Toggle */}
      {isMobile && !isSidebarOpen && (
        <button
          className="md:hidden fixed bottom-6 left-6 z-50 p-3 rounded-full shadow-lg transition-colors duration-200 text-white"
          onClick={toggleSidebar}
          aria-label="فتح القائمة الجانبية"
          style={{ backgroundColor: primaryColor }}
        >
          <FaBars size={18} />
        </button>
      )}
    </div>
  );
}
