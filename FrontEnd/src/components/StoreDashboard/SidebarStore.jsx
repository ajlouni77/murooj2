import React from "react";
import { Home, Package, Truck } from "lucide-react";
import { NavLink } from "react-router-dom";

const SidebarStore = () => {
  const menu = [
    {
      key: "stats",
      label: "الإحصائيات",
      icon: <Home size={20} />,
      path: "/stats",
    },
    {
      key: "products",
      label: "المنتجات",
      icon: <Package size={20} />,
      path: "/productmanager",
    },
    {
      key: "orders",
      label: "الطلبات",
      icon: <Truck size={20} />,
      path: "/orders",
    },
  ];

  return (
    <aside className="w-64 bg-white shadow h-screen">
      <div className="p-6 text-center border-b">
        <h2 className="text-xl font-bold text-[#81C408]">لوحة المتجر</h2>
      </div>
      <nav className="p-4">
        <ul className="space-y-2">
          {menu.map((item) => (
            <li key={item.key}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center w-full text-right px-4 py-3 rounded-lg transition ${
                    isActive
                      ? "bg-[#81C408] text-white"
                      : "hover:bg-gray-100 text-gray-700"
                  }`
                }
              >
                <span className="ml-2">{item.icon}</span>
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default SidebarStore;
