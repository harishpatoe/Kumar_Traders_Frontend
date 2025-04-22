import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-100 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold text-black">
          Shanker Traders
        </Link>

        {/* Navigation Links */}
        <div className="space-x-6">
          <Link to="/" className="text-gray-700 hover:text-[#c69639]">
            Home
          </Link>
          <Link to="/Aboutus" className="text-gray-700 hover:text-[#c69639]">
            About
          </Link>
          <Link to="/Products" className="text-gray-700 hover:text-[#c69639]">
            Products
          </Link>
          <Link to="/ContactPage" className="text-gray-700 hover:text-[#c69639]">
            Contact
          </Link>
          <Link to="/Category" className="text-gray-700 hover:text-[#c69639]">
            Categories
          </Link>
          <Link to="/Gallery" className="text-gray-700 hover:text-[#c69639]">
            Gallery
          </Link>
          <Link to="/VedioGallery" className="text-gray-700 hover:text-[#c69639]">
            Videos
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
