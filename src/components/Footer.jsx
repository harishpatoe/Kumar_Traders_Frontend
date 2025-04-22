import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6">
        {/* Left Section */}
        <div className="text-center md:text-left">
          <h2 className="text-xl font-semibold text-white mb-2">Shanker Traders</h2>
          <p className="text-sm">Your trusted building material supplier.</p>
          <p className="text-sm mt-1">&copy; 2025 Shanker Traders. All rights reserved.</p>
        </div>

        {/* Center Section - Quick Links */}
        <div className="mt-4 md:mt-0">
          <h3 className="text-lg font-semibold text-white">Quick Links</h3>
          <ul className="mt-2 space-y-1">
            <li>
              <Link to="/AboutUs" className="hover:text-yellow-500 transition">About Us</Link>
            </li>
            <li>
              <Link to="/ContactPage" className="hover:text-yellow-500 transition">Contact Us</Link>
            </li>
            <li>
              <Link to="/Products" className="hover:text-yellow-500 transition">Our Products</Link>
            </li>
          </ul>
        </div>

        {/* Right Section - Contact & Social */}
        <div className="mt-4 md:mt-0 text-center md:text-right">
          <h3 className="text-lg font-semibold text-white">Follow Us</h3>
          <div className="flex justify-center md:justify-end mt-2 space-x-4">
            <a href="#" className="text-gray-400 hover:text-white transition">
              <FaFacebook size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition">
              <FaTwitter size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition">
              <FaInstagram size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition">
              <FaLinkedin size={20} />
            </a>
          </div>
          <div className="mt-4">
            <p className="flex items-center justify-center md:justify-end space-x-2">
              <FaPhone size={16} /> <span>9876543212</span>
            </p>
            <p className="flex items-center justify-center md:justify-end space-x-2 mt-1">
              <FaEnvelope size={16} /> <span>shankertraders@gmail.com</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
