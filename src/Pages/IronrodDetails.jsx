import React from "react";
import Header from "../components/Header"; // Import Header
import Navbar from "../components/Navbar"; // Import Navbar
import Footer from "../components/Footer"; // Import Footer
import ProductDetail from "../components/ProductDetail";

const IronrodDetails = () => {
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
            title="High-Strength Iron Rods"
            price={500}
            oldPrice={550}
            category="Construction Materials"
            tags="Iron Rods, Steel Bars, Reinforcement, Building Materials"
            description="Our high-strength iron rods are designed to provide superior reinforcement in concrete structures, ensuring maximum durability and stability. Manufactured using advanced metallurgical techniques, they offer excellent tensile strength, corrosion resistance, and longevity. Whether used for residential, commercial, or industrial construction, these iron rods enhance structural integrity and minimize the risk of weakening over time. Ideal for foundations, beams, and columns, they are an essential component for high-quality construction projects."
            image="/ironrod.jpg" // Replace with actual image link
            units="per 12mm rod"
          />
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default IronrodDetails;
