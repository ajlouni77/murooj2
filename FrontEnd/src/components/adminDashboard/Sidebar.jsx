import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaHome,
  FaEnvelope,
  FaShoppingCart,
  FaCreditCard,
  FaUsers,
  FaTimes,
  FaAngleLeft,
  FaSignOutAlt,
} from "react-icons/fa";
import { RiDashboardLine } from "react-icons/ri";

const Sidebar = ({ isSidebarOpen, toggleSidebar }) => {
  const location = useLocation();
  const primaryColor = "rgb(129, 196, 8)";

  const menuItems = [
    {
      icon: <RiDashboardLine size={20} />,
      label: "إحصائيات",
      path: "",
    },
    {
      icon: <FaEnvelope size={20} />,
      label: "الرسائل",
      path: "messages",
    },
    {
      icon: <FaShoppingCart size={20} />,
      label: "الطلبات",
      path: "orders",
    },
    {
      icon: <FaCreditCard size={20} />,
      label: "المدفوعات",
      path: "payments",
    },
    {
      icon: <FaUsers size={20} />,
      label: "الحسابات",
      path: "accounts",
    },
  ];

  const isActive = (path) => {
    const currentPath = location.pathname.replace(/\/+$/, "");
    const comparePath = `/dashboard${path ? `/${path}` : ""}`;
    return (
      currentPath === comparePath ||
      (path === "" && currentPath === "/dashboard")
    );
  };

  return (
    <>
      <div
        className={`
          fixed md:static top-0 right-0
          w-64 h-screen
          bg-white shadow-lg
          transform transition-transform duration-200 ease-in-out
          ${
            isSidebarOpen
              ? "translate-x-0"
              : "-translate-x-full md:translate-x-0"
          }
          z-40 flex flex-col
        `}
      >
        {/* Sidebar Header */}
        <div className="px-5 py-6 border-b border-gray-100">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div
                className="w-8 h-8 rounded flex items-center justify-center"
                style={{ backgroundColor: primaryColor }}
              >
                <span className="text-white font-bold text-sm">EC</span>
              </div>
              <h2 className="text-lg font-bold text-gray-800">لوحة التحكم</h2>
            </div>
            <button
              className="text-gray-400 hover:text-gray-700 md:hidden"
              onClick={toggleSidebar}
              aria-label="Close sidebar"
            >
              <FaTimes size={18} />
            </button>
          </div>
        </div>

        {/* Navigation Menu */}
        <div className="flex-1 overflow-y-auto py-5">
          <div className="px-3">
            <span className="text-xs font-medium text-gray-400 px-3 uppercase tracking-wider">
              القائمة الرئيسية
            </span>
            <nav className="mt-3">
              <ul className="space-y-1">
                {menuItems.map((item) => {
                  const active = isActive(item.path);
                  return (
                    <li key={item.label}>
                      <Link
                        to={`/dashboard/${item.path}`}
                        className={`flex items-center justify-between py-2.5 px-3 rounded-md transition-all duration-150
                          ${
                            active
                              ? "text-white"
                              : "text-gray-600 hover:bg-gray-50"
                          }`}
                        style={active ? { backgroundColor: primaryColor } : {}}
                        onClick={isSidebarOpen ? toggleSidebar : undefined}
                      >
                        <div className="flex items-center gap-3">
                          <span className={`${active ? "text-white" : ""}`}>
                            {item.icon}
                          </span>
                          <span className="font-medium text-sm">
                            {item.label}
                          </span>
                        </div>
                        {active && (
                          <FaAngleLeft size={14} className="text-white" />
                        )}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>

          {/* Additional Menu Section */}
          <div className="mt-8 px-3">
            <span className="text-xs font-medium text-gray-400 px-3 uppercase tracking-wider">
              إعدادات النظام
            </span>
            <nav className="mt-3">
              <ul className="space-y-1">
                <li>
                  <Link
                    to="/dashboard/settings"
                    className="flex items-center py-2.5 px-3 rounded-md transition-all duration-150 text-gray-600 hover:bg-gray-50"
                  >
                    <span className="mr-3 text-gray-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <circle cx="12" cy="12" r="3"></circle>
                        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                      </svg>
                    </span>
                    <span className="font-medium text-sm">الإعدادات</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/dashboard/profile"
                    className="flex items-center py-2.5 px-3 rounded-md transition-all duration-150 text-gray-600 hover:bg-gray-50"
                  >
                    <span className="mr-3 text-gray-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                      </svg>
                    </span>
                    <span className="font-medium text-sm">الملف الشخصي</span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        {/* Sidebar Footer */}
        <div className="border-t border-gray-100 p-4">
          <button className="flex items-center justify-center w-full py-2 px-3 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors">
            <FaSignOutAlt className="ml-2" size={16} />
            <span>تسجيل الخروج</span>
          </button>
        </div>
      </div>

      {/* Backdrop overlay for mobile */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-30 md:hidden"
          onClick={toggleSidebar}
        />
      )}
    </>
  );
};

export default Sidebar;
