import React, { useState } from "react";
import { Input, Button } from "antd";
import { SearchOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    const trimmedQuery = searchQuery.trim().toLowerCase();
  
    if (trimmedQuery !== "") {
      const capitalized =
        trimmedQuery.charAt(0).toUpperCase() + trimmedQuery.slice(1);
  
      navigate(`/${capitalized}Details`);
      setSearchQuery("");
    }
  };
  

  return (
    <div className="w-full bg-gray-100 border-b border-gray-300 py-4">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center px-6 space-y-4 md:space-y-0">
        
        {/* Left - Social & Contact Info */}
        <div className="flex items-center flex-wrap gap-4 text-gray-700">
          {[FaFacebook, FaTwitter, FaInstagram, FaLinkedin].map((Icon, idx) => (
            <Icon key={idx} className="text-xl cursor-pointer hover:text-[#c69639] transition" />
          ))}
          <div className="flex items-center space-x-2 text-sm hover:text-[#c69639] transition">
            <FaPhone className="text-lg" />
            <span>9876543212</span>
          </div>
          <div className="flex items-center space-x-2 text-sm hover:text-[#c69639] transition">
            <FaEnvelope className="text-lg" />
            <span>shankertraders@gmail.com</span>
          </div>
        </div>

        {/* Middle - Search Bar */}
        <div className="w-full md:max-w-xs">
          <Input
            placeholder="Search for bricks, cement, etc."
            prefix={<SearchOutlined className="text-gray-500" />}
            className="rounded-lg shadow-sm"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onPressEnter={handleSearch}
            allowClear
          />
        </div>

        {/* Right - Cart & Auth Buttons */}
        <div className="flex items-center gap-4 text-gray-700">
          <ShoppingCartOutlined
            className="text-2xl cursor-pointer hover:text-[#c69639]"
            onClick={() => navigate("/CartPage")}
          />

          <Link to="/Login">
            <Button
              style={{
                backgroundColor: "#c69639",
                color: "#fff",
                border: "none",
              }}
              className="hover:!bg-[#b18330] active:!bg-[#a07228]"
            >
              Login
            </Button>
          </Link>

          <Link to="/SignUp">
            <Button
              style={{
                backgroundColor: "#c69639",
                color: "#fff",
                border: "none",
              }}
              className="hover:!bg-[#b18330] active:!bg-[#a07228]"
            >
              Register
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
