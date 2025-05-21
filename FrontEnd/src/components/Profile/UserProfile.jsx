import React, { useEffect, useState } from "react";
import { Outlet, useLocation, Navigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import Footer from "../../pages/Footer";

const UserProfile = () => {
  const primaryColor = "rgb(129, 196, 8)";
  const location = useLocation();
  const [userInfo, setUserInfo] = useState({ name: "", email: "" });

  useEffect(() => {
    const localUser = JSON.parse(localStorage.getItem("user"));
    if (localUser?.userId) {
      fetch(`http://localhost:5000/api/profile/${localUser.userId}`)
        .then((res) => res.json())
        .then((data) => {
          setUserInfo({
            name: data.name || "مستخدم بدون اسم",
            email: data.email || localUser.email,
          });

          // اختياري: تحديث localStorage بمعلومة الاسم
          const updatedUser = { ...localUser, name: data.name };
          localStorage.setItem("user", JSON.stringify(updatedUser));
        })
        .catch((err) => {
          console.error("فشل في تحميل الملف الشخصي:", err);
        });
    }
  }, []);

  // إذا كان المسار الحالي هو /profile فقط، قم بإعادة التوجيه إلى /profile/account
  if (location.pathname === "/profile") {
    return <Navigate to="/profile/account" replace />;
  }

  return (
    <div className="bg-gray-50 min-h-screen" dir="rtl">
      {/* Header */}
      <div
        className="fixed top-0 left-0 right-0 h-16 flex items-center justify-center px-6 shadow-sm z-10"
        style={{ backgroundColor: primaryColor }}
      >
        <div className="max-w-6xl w-full mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-white">بوابة المستخدم</h1>
        </div>
      </div>

      {/* Main Layout */}
      <div className="pt-16 flex justify-center">
        <div className="max-w-6xl w-full mx-auto flex">
          <Sidebar
            primaryColor={primaryColor}
            currentPath={location.pathname}
            userInfo={userInfo}
          />
          <main className="flex-1 p-8">
            <Outlet />
          </main>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default UserProfile;
