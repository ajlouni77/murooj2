// DashboardStore.jsx
import React, { useState, useEffect } from "react";
import SidebarStore from "./SidebarStore"; // ✅ التصحيح هنا
// import Stats from "./Stats";
import ProductManager from "./ProductManager";
// import Orders from "./Orders";

const DashboardStore = () => {
  const [activeTab, setActiveTab] = useState("stats");

  const renderContent = () => {
    switch (activeTab) {
      case "stats":
        // return <Stats />;
      case "products":
        return <ProductManager />;
      case "orders":
        return <Orders />;
      default:
        return <Stats />;
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100" dir="rtl">
      <SidebarStore activeTab={activeTab} setActiveTab={setActiveTab} />{" "}
      ✅ التصحيح هنا */}
       <main className="flex-1 p-6 overflow-y-auto">{renderContent()}</main>
    </div>
  );
};

export default DashboardStore;



