import React from "react";
import {
  FaLeaf,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const styles = {
  primaryText: { color: "#81c408" },
  headingAccent: { borderColor: "#81c408" },
};

const Footer = () => {
  const socialLinks = [
    { icon: FaFacebook, url: "https://www.facebook.com" },
    { icon: FaTwitter, url: "https://www.twitter.com" },
    { icon: FaInstagram, url: "https://www.instagram.com" },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2 space-x-reverse">
              <FaLeaf className="text-3xl" style={styles.primaryText} />
              <span className="text-3xl font-bold" style={styles.primaryText}>
                مُروج
              </span>
            </div>
            <p className="text-gray-400 text-lg leading-relaxed">
              منصة توصيل المنتجات الطازجة من السوق المركزي إلى المحلات ومن
              المحلات إلى المستهلكين.
            </p>
            <div className="flex space-x-4 space-x-reverse pt-2">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition duration-300 bg-gray-800 hover:bg-green-600 p-2.5 rounded-full w-10 h-10 flex items-center justify-center"
                >
                  <social.icon className="text-lg" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3
              className="text-xl font-bold mb-6 border-r-4 pr-4"
              style={styles.headingAccent}
            >
              روابط سريعة
            </h3>
            <ul className="space-y-3">
              {[
                { path: "/", text: "الرئيسية" },
                { path: "/shops", text: "المحلات" },
                { path: "/aboutus", text: "من نحن" },
                { path: "/contact", text: "اتصل بنا" },
              ].map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-white transition duration-300 flex items-center py-2"
                  >
                    <span className="w-2 h-2 bg-green-500 rounded-full inline-block ml-2"></span>
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3
              className="text-xl font-bold mb-6 border-r-4 pr-4"
              style={styles.headingAccent}
            >
              تواصل معنا
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 space-x-reverse text-gray-400 group">
                <div className="p-2 bg-gray-800 rounded-full group-hover:bg-green-600 transition duration-300 flex-shrink-0">
                  <FaMapMarkerAlt className="text-sm" />
                </div>
                <span className="group-hover:text-white transition duration-300 leading-relaxed">
                  الزرقاء , حي النزهة , مجمع الوائر
                </span>
              </li>
              <li className="flex items-start space-x-3 space-x-reverse text-gray-400 group">
                <div className="p-2 bg-gray-800 rounded-full group-hover:bg-green-600 transition duration-300 flex-shrink-0">
                  <FaEnvelope className="text-sm" />
                </div>
                <span className="group-hover:text-white transition duration-300">
                  murooj@gmail.com
                </span>
              </li>
              <li className="flex items-start space-x-3 space-x-reverse text-gray-400 group">
                <div className="p-2 bg-gray-800 rounded-full group-hover:bg-green-600 transition duration-300 flex-shrink-0">
                  <FaPhoneAlt className="text-sm" />
                </div>
                <span className="group-hover:text-white transition duration-300">
                  0798407205
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0">
            &copy; 2025 جميع الحقوق محفوظة | مُروج
          </p>
          <div>
            <ul className="flex space-x-6 space-x-reverse">
              <li>
                <Link
                  to="/privacy"
                  className="text-gray-400 hover:text-white transition duration-300 text-sm"
                >
                  سياسة الخصوصية
                </Link>
              </li>
              <li>
                <Link
                  to="/terms"
                  className="text-gray-400 hover:text-white transition duration-300 text-sm"
                >
                  الشروط والأحكام
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
