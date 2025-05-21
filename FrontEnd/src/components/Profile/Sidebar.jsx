import React from "react";
import { Link } from "react-router-dom";

const tabs = {
  account: "معلومات الحساب",
  addresses: "عناوين التوصيل",
  orders: "الطلبات السابقة",
  cards: "البطاقات المحفوظة",
  payments: "العمليات المالية",
};

const Sidebar = ({ primaryColor, currentPath, userInfo }) => {
  const firstLetter = userInfo?.name?.charAt(0)?.toUpperCase() || "U";

  return (
    <aside className="w-64 bg-white shadow-md border-l border-gray-200 sticky top-16 h-screen">
      <div className="p-6 pb-4 border-b">
        <div className="flex items-center space-x-3 space-x-reverse">
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold"
            style={{ backgroundColor: primaryColor }}
          >
            {firstLetter}
          </div>
          <div>
            <p className="font-medium text-gray-800">
              {userInfo?.name || "اسم المستخدم"}
            </p>
            <p className="text-sm text-gray-500 truncate">
              {userInfo?.email || "user@example.com"}
            </p>
          </div>
        </div>
      </div>

      <nav className="mt-4 p-4">
        <p className="text-xs font-semibold text-gray-500 mb-2 mr-2">
          إدارة الحساب
        </p>
        {Object.entries(tabs).map(([key, label]) => (
          <Link
            key={key}
            to={`/profile/${key}`}
            className={`block w-full text-right py-3 px-4 rounded-lg mb-1 transition-all ${
              currentPath.includes(key)
                ? "font-semibold text-white shadow-sm"
                : "text-gray-700 hover:bg-gray-100"
            }`}
            style={{
              backgroundColor: currentPath.includes(key)
                ? primaryColor
                : "transparent",
            }}
          >
            {label}
          </Link>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
