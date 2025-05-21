import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  FaShoppingCart,
  FaUser,
  FaLeaf,
  FaBars,
  FaTimes,
  FaUserCircle,
  FaSignInAlt,
  FaSignOutAlt, // Logout icon
} from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [cartCount, setCartCount] = useState(3);
  const location = useLocation();
  const navigate = useNavigate();

  // Track scroll to change navbar style
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Check if the current path is active to highlight it
  const isActive = (path) => {
    return location.pathname === path;
  };

  // Check login status
  const isLoggedIn = !!localStorage.getItem("token");

  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem("token"); // Remove the token from localStorage
    navigate("/login"); // Redirect to the login page
  };

  return (
    <div className="navbar-container sticky top-0 z-50">
      <nav
        className={`py-4 px-6 transition-all duration-300 ${
          scrolled ? "bg-white shadow-lg" : "bg-white/90 backdrop-blur-md"
        }`}
        dir="rtl"
      >
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center space-x-2 space-x-reverse transition-transform duration-300 hover:scale-105"
            >
              <FaLeaf className="text-2xl" style={{ color: "#81c408" }} />
              <span className="text-2xl font-bold" style={{ color: "#81c408" }}>
                مُروج
              </span>
            </Link>

            {/* Desktop Navigation Menu */}
            <ul className="hidden lg:flex space-x-9 space-x-reverse">
              {[
                { path: "/", label: "الرئيسية" },
                { path: "/shops", label: "المحلات" },
                { path: "/joinoptions", label: "انضم إلينا" },
                { path: "/aboutus", label: "من نحن" },
                { path: "/contact", label: "اتصل بنا" },
              ].map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={`relative py-2 px-1 font-medium transition-colors duration-300 hover:text-green-600 ${
                      isActive(item.path)
                        ? "text-green-600 font-semibold"
                        : "text-gray-700"
                    }`}
                  >
                    {item.label}
                    <span
                      className={`absolute bottom-0 left-0 right-0 h-0.5 transition-transform duration-300 ${
                        isActive(item.path)
                          ? "scale-x-100"
                          : "scale-x-0 hover:scale-x-100"
                      }`}
                      style={{ backgroundColor: "#81c408" }}
                    ></span>
                  </Link>
                </li>
              ))}
            </ul>

            {/* Icons on the left */}
            <div className="flex items-center space-x-6 space-x-reverse">
              {!isLoggedIn ? (
                // Show Login button if the user is not logged in
                <Link
                  to="/login"
                  className="group relative text-xl text-gray-700 hover:text-green-600 transition-all duration-300 hover:scale-110"
                  aria-label="تسجيل الدخول"
                >
                  <FaSignInAlt />
                  <span className="absolute top-full right-1/2 transform translate-x-1/2 mt-1 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    تسجيل الدخول
                  </span>
                </Link>
              ) : (
                // Show Logout button if the user is logged in
                <button
                  onClick={handleLogout}
                  className="group relative text-xl text-gray-700 hover:text-green-600 transition-all duration-300 hover:scale-110"
                  aria-label="تسجيل الخروج"
                >
                  <FaSignOutAlt />
                  <span className="absolute top-full right-1/2 transform translate-x-1/2 mt-1 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    تسجيل الخروج
                  </span>
                </button>
              )}

              {/* Shopping Cart */}
              <Link
                to="/cart"
                className="group relative text-xl text-gray-700 hover:text-green-600 transition-all duration-300 hover:scale-110"
                aria-label="سلة التسوق"
              >
                <FaShoppingCart />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
                <span className="absolute top-full right-1/2 transform translate-x-1/2 mt-1 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  سلة التسوق
                </span>
              </Link>

              {/* Profile */}
              <Link
                to="/profile"
                className="group relative text-xl text-gray-700 hover:text-green-600 transition-all duration-300 hover:scale-110"
                aria-label="الملف الشخصي"
              >
                <FaUserCircle />
                <span className="absolute top-full right-1/2 transform translate-x-1/2 mt-1 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  الملف الشخصي
                </span>
              </Link>

              {/* Hamburger Menu for mobile */}
              <button
                className="lg:hidden text-gray-700 focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="قائمة المحتويات"
              >
                {isOpen ? (
                  <FaTimes className="text-xl" />
                ) : (
                  <FaBars className="text-xl" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-0 bg-white z-50 transition-transform duration-300 ease-in-out transform ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        }`}
        dir="rtl"
      >
        <div className="container mx-auto p-6">
          <div className="flex justify-between items-center mb-6">
            <Link
              to="/"
              className="flex items-center space-x-2 space-x-reverse"
              onClick={() => setIsOpen(false)}
            >
              <FaLeaf className="text-2xl" style={{ color: "#81c408" }} />
              <span className="text-2xl font-bold" style={{ color: "#81c408" }}>
                مُروج
              </span>
            </Link>
            <button
              className="text-gray-700 focus:outline-none"
              onClick={() => setIsOpen(false)}
              aria-label="إغلاق القائمة"
            >
              <FaTimes className="text-2xl" />
            </button>
          </div>

          <ul className="space-y-6">
            {[
              { path: "/", label: "الرئيسية" },
              { path: "/shops", label: "المحلات" },
              { path: "/joinus", label: "انضم إلينا" },
              { path: "/aboutus", label: "من نحن" },
              { path: "/contact", label: "اتصل بنا" },
            ].map((item) => (
              <li key={item.path} className="border-b border-gray-100 pb-2">
                <Link
                  to={item.path}
                  className={`block text-lg font-medium ${
                    isActive(item.path) ? "text-green-600" : "text-gray-700"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col space-y-4">
            {!isLoggedIn ? (
              <Link
                to="/login"
                className="flex items-center space-x-2 space-x-reverse text-gray-700 hover:text-green-600 transition-colors duration-300 w-1/3 justify-center py-2 rounded-lg border border-gray-200 hover:border-green-500"
                onClick={() => setIsOpen(false)}
              >
                <FaSignInAlt className="text-xl" />
                <span>تسجيل الدخول</span>
              </Link>
            ) : (
              <button
                onClick={handleLogout}
                className="flex items-center space-x-2 space-x-reverse text-gray-700 hover:text-green-600 transition-colors duration-300 w-1/3 justify-center py-2 rounded-lg border border-gray-200 hover:border-green-500"
              >
                <FaSignOutAlt className="text-xl" />
                <span>تسجيل الخروج</span>
              </button>
            )}

            <Link
              to="/cart"
              className="flex items-center space-x-2 space-x-reverse text-gray-700 hover:text-green-600 transition-colors duration-300 w-1/3 justify-center py-2 rounded-lg border border-gray-200 hover:border-green-500"
              onClick={() => setIsOpen(false)}
            >
              <FaShoppingCart className="text-xl" />
              <span>سلة التسوق</span>
              {cartCount > 0 && (
                <span className="bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>

            <Link
              to="/profile"
              className="flex items-center space-x-2 space-x-reverse text-gray-700 hover:text-green-600 transition-colors duration-300 w-1/3 justify-center py-2 rounded-lg border border-gray-200 hover:border-green-500"
              onClick={() => setIsOpen(false)}
            >
              <FaUserCircle className="text-xl" />
              <span>الملف الشخصي</span>
            </Link>
          </div>

          <button
            className="mt-4 py-3 rounded-lg transition-colors duration-300 text-white font-medium w-full"
            style={{ backgroundColor: "#81c408" }}
            onClick={() => setIsOpen(false)}
          >
            العودة للمتجر
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
