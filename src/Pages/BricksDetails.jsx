import React from "react";
import Header from "../components/Header"; // Import Header
import Navbar from "../components/Navbar"; // Import Navbar
import Footer from "../components/Footer"; // Import Footer
import ProductDetail from "../components/ProductDetail";

const BricksDetails = () => {
  return (
    <div className="w-full min-h-screen bg-gray-100">
      {/* Header */}
      <Header />

      {/* Navbar */}
      <Navbar />

      {/* Main Content Section */}
      <div className="py-6 flex justify-center">
        <div className="max-w-4xl w-full">
          <ProductDetail
            title="High-Quality Construction Bricks"
            price="₹12"
            oldPrice="₹15"
            category="Construction Materials"
            tags="Bricks, Building Materials"
            description="Our high-quality construction bricks are perfect for building sturdy and durable structures. Made from premium materials, these bricks offer excellent strength and stability, making them ideal for both residential and commercial projects. These bricks are designed to withstand extreme weather conditions and provide long-lasting performance, making them a cost-effective solution for any construction needs."
            image="/bricks.jpg"
            units="per brick"
          />
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default BricksDetails;
