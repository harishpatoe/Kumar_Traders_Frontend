import React from "react";
import Header from "../components/Header"; // Import Header
import Navbar from "../components/Navbar"; // Import Navbar
import Footer from "../components/Footer"; // Import Footer
import ProductDetail from "../components/ProductDetail";

const GravelDetails = () => {
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
            title="High-Quality Construction Gravel"
            price={20}
            oldPrice={25}
            category="Construction Materials"
            tags="Gravel, Aggregate, Building Materials, Landscaping"
            description="Our high-quality construction gravel is engineered for durability and versatility. Ideal for concrete mixing, road construction, and landscaping projects, this gravel enhances stability and provides efficient drainage. Its uniform size ensures better compaction, making it a reliable choice for foundations, driveways, and pathways. Resistant to weathering and erosion, it maintains long-lasting performance, ensuring cost-effective solutions for construction needs. Choose premium-grade gravel for your building projects and experience superior strength and resilience."
            image="/gravel.jpg" // Replace with actual image link
            units="per 50kg bag"
          />
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default GravelDetails;
