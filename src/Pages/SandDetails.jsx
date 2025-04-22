import React from "react";
import Header from "../components/Header"; // Import Header
import Navbar from "../components/Navbar"; // Import Navbar
import Footer from "../components/Footer"; // Import Footer
import ProductDetail from "../components/ProductDetail";

const SandDetails = () => {
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
            title="Premium Quality Sand"
            price={50}
            oldPrice={60}
            category="Construction Materials"
            tags="Sand, Fine Sand, River Sand, Building Materials"
            description="Our premium quality sand is essential for high-quality construction projects, ensuring excellent binding properties in concrete mixtures. This sand is carefully sourced and refined to provide optimal texture, strength, and durability, making it perfect for plastering, bricklaying, and foundational work. With superior filtration and water drainage capabilities, it is also ideal for landscaping, leveling surfaces, and other structural applications. Resistant to impurities, this fine sand delivers consistent performance and reliability, helping create long-lasting structures."
            image="/sand.jpg" // Replace with actual image link
            units="per 50kg bag"
          />
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default SandDetails;
