import React from "react";
import Header from "../components/Header"; // Import Header
import Navbar from "../components/Navbar"; // Import Navbar
import Footer from "../components/Footer"; // Import Footer
import ProductDetail from "../components/ProductDetail";

const SteelDetails = () => {
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
            title="High-Tensile Steel Rods"
            price={500}
            oldPrice={550}
            category="Construction Materials"
            tags="Steel, Iron Rods, Reinforcement, Building Materials"
            description="Our high-tensile steel rods are engineered for maximum durability, flexibility, and load-bearing capacity, making them essential for construction and infrastructure projects. Manufactured using high-grade steel, these rods provide superior resistance to corrosion, weathering, and heavy stress, ensuring long-lasting structural integrity. Ideal for reinforcement in concrete structures such as beams, columns, and bridges, these rods enhance stability while minimizing the risk of cracking or failure over time. Their excellent tensile strength makes them a reliable choice for both residential and commercial projects."
            image="/steel.jpg" // Replace with actual image link
            units="per 12mm rod"
          />
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default SteelDetails;
