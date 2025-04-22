import React from "react";
import Header from "../components/Header"; // Import Header
import Navbar from "../components/Navbar"; // Import Navbar
import Footer from "../components/Footer"; // Import Footer
import ProductDetail from "../components/ProductDetail";

const CementDetails = () => {
  return (
    <div className="w-full min-h-screen bg-gray-100 flex flex-col">
      {/* Header */}
      <Header />

      {/* Navbar */}
      <Navbar />

      {/* Main Content Section */}
      <div className="flex-grow py-6 flex justify-center">
        <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg">
          <ProductDetail
            title="Premium Quality Cement"
            price={350}
            oldPrice={400}
            category="Construction Materials"
            tags="Cement, Concrete, Building Materials"
            description="Our premium quality cement is formulated for superior strength and durability in construction projects. It provides excellent binding properties, ensuring a solid foundation for residential, commercial, and industrial structures. This cement offers high resistance to environmental factors like moisture and temperature variations, making it an ideal choice for long-lasting construction. Whether used for bricklaying, plastering, or large-scale infrastructure projects, it delivers consistent performance with minimal wastage. Invest in the best quality cement for your construction needs and experience reliability that lasts."
            image="/cement.jpg" // Replace with actual image link
            units="per 50kg bag"
          />
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default CementDetails;
