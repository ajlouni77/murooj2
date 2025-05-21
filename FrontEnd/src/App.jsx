// import React from "react";
// import { Route, Routes } from "react-router-dom";
// import Navbar from "./pages/Navbar";
// import Home from "./pages/Home";
// import Hero from "./pages/Hero";
// import FeaturedProducts from "./pages/FeaturedProducts";
// import MarketCategories from "./pages/MarketCategories";
// import VegetablesPage from "./pages/VegetablesPage";
// import Shops from "./pages/Shops";
// import ShopId from "./pages/ShopId";
// import AboutUs from "./pages/AboutUs";
// import ContactUs from "./pages/ContactUs";
// import JoinUs from "./pages/joinus";
// import LoginPage from "./pages/LoginPage";
// import RegisterPage from "./pages/RegisterPage";
// import Cart from "./pages/Cart";
// import Fruits from "./pages/Fruits";
// import Vegetables from "./pages/Vegetables";
// import Payment from "./pages/payment";
// // import UserProfile from "./components/Profile/UserProfile";
// import AdminDashboard from "./pages/AdminDashboard";
// import ManageMessages from "./components/adminDashboard/ManageMessages";
// import JoinUsOptions from "./pages/JoinUsOptions";
// import JoinAsStore from "./pages/JoinAsStore";
// import ManagePayments from "./components/adminDashboard/ManagePayments";
// import ManageOrders from "./components/adminDashboard/ManageOrders";
// import ManageAccounts from "./components/adminDashboard/ManageAccounts";
// import Statistics from "./components/adminDashboard/Statistics";
// import DashboardStore from "./components/StoreDashboard/DashboardStore";
// import ProductManager from "./components/StoreDashboard/ProductManager";
// import StoreDetails from "./pages/StoreDetails";


// const App = () => {
//   return (
//     <div>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/hero" element={<Hero />} />
//         <Route path="/central-market" element={<FeaturedProducts />} />
//         <Route path="/vegetables" element={<VegetablesPage />} />
//         <Route path="/shops" element={<Shops />} />
//         <Route path="/shops/:id" element={<ShopId />} />
//         <Route path="/aboutus" element={<AboutUs />} />
//         <Route path="/contact" element={<ContactUs />} />
//         <Route path="/market" element={<MarketCategories />} />
//         <Route path="/joinus" element={<JoinUs />} />
//         <Route path="/login" element={<LoginPage />} />
//         <Route path="/register" element={<RegisterPage />} />
//         <Route path="/cart" element={<Cart />} />
//         <Route path="/payment" element={<Payment />} />
//         <Route path="/fruits" element={<Fruits />} />
//         <Route path="/vegetables" element={<Vegetables />} />
//         <Route path="/DashboardStore" element={<DashboardStore />} />
//         <Route path="/store/:storeId" element={<StoreDetails />} />
//         <Route path="/joinoptions" element={<JoinUsOptions />} />
//         <Route path="/store" element={<JoinAsStore />} />
//         <Route path="/dashboard/*" element={<AdminDashboard />}>
//           <Route path="messages" element={<ManageMessages />} />
//           <Route path="accounts" element={<ManageAccounts />} />
//           <Route path="orders" element={<ManageOrders />} />
//           <Route path="payments" element={<ManagePayments />} />
//           <Route index element={<Statistics />} />
//         </Route>
//         <Route path="/ProductManager" element={<ProductManager />} />
//         {/* UserProfile */}
        
//         {/* UserProfile */}
//       </Routes>
//     </div>
//   );
// };

// export default App;
























import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import Hero from "./pages/Hero";
import FeaturedProducts from "./pages/FeaturedProducts";
import MarketCategories from "./pages/MarketCategories";
import VegetablesPage from "./pages/VegetablesPage";
import Shops from "./pages/Shops";
import ShopId from "./pages/ShopId";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import JoinUs from "./pages/joinus";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import Cart from "./pages/Cart";
import Fruits from "./pages/Fruits";
import Vegetables from "./pages/Vegetables";
import Payment from "./pages/payment";

import AdminDashboard from "./pages/AdminDashboard";
import ManageMessages from "./components/adminDashboard/ManageMessages";
import JoinUsOptions from "./pages/JoinUsOptions";
import JoinAsStore from "./pages/JoinAsStore";
import ManagePayments from "./components/adminDashboard/ManagePayments";
import ManageOrders from "./components/adminDashboard/ManageOrders";
import ManageAccounts from "./components/adminDashboard/ManageAccounts";
import Statistics from "./components/adminDashboard/Statistics";
import DashboardStore from "./components/StoreDashboard/DashboardStore";
import ProductManager from "./components/StoreDashboard/ProductManager";
import StoreDetails from "./pages/StoreDetails";

// ✅ ملفات الملف الشخصي
import PrivateRoute from "./utils/PrivateRoute";
import UserProfile from "./components/Profile/UserProfile";
import Account from "./components/Profile/pages/Account";
import Addresses from "./components/Profile/pages/Addresses";
import Orders from "./components/Profile/pages/Orders";
import Cards from "./components/Profile/pages/Cards";
import Payments from "./components/Profile/pages/Payments";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        {/* صفحات عامة */}
        <Route path="/" element={<Home />} />
        <Route path="/hero" element={<Hero />} />
        <Route path="/central-market" element={<FeaturedProducts />} />
        <Route path="/vegetables" element={<VegetablesPage />} />
        <Route path="/shops" element={<Shops />} />
        <Route path="/shops/:id" element={<ShopId />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/market" element={<MarketCategories />} />
        <Route path="/joinus" element={<JoinUs />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/fruits" element={<Fruits />} />
        <Route path="/vegetables" element={<Vegetables />} />
        <Route path="/DashboardStore" element={<DashboardStore />} />
        <Route path="/store/:storeId" element={<StoreDetails />} />
        <Route path="/joinoptions" element={<JoinUsOptions />} />
        <Route path="/store" element={<JoinAsStore />} />
        <Route path="/ProductManager" element={<ProductManager />} />

        {/* ✅ مسارات لوحة تحكم الأدمن */}
        <Route path="/dashboard/*" element={<AdminDashboard />}>
          <Route path="messages" element={<ManageMessages />} />
          <Route path="accounts" element={<ManageAccounts />} />
          <Route path="orders" element={<ManageOrders />} />
          <Route path="payments" element={<ManagePayments />} />
          <Route index element={<Statistics />} />
        </Route>

        {/* ✅ صفحة الملف الشخصي للمستخدم */}
        <Route path="/profile" element={<PrivateRoute />}>
          <Route element={<UserProfile />}>
            <Route path="account" element={<Account />} />
            <Route path="addresses" element={<Addresses />} />
            <Route path="orders" element={<Orders />} />
            <Route path="cards" element={<Cards />} />
            <Route path="payments" element={<Payments />} />
            <Route index element={<Account />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
};

export default App;
