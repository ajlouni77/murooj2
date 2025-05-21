import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  // تحقق بسيط من وجود مستخدم مسجل دخول
  return user && user.token ? <Outlet /> : <Navigate to="/login" replace />;
};

export default PrivateRoute;
