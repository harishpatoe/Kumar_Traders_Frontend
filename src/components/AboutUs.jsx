import React from "react";

const AboutUs = () => {
  return (
    <div className="w-full min-h-screen bg-gray-100 flex flex-col items-center py-12 px-4">
<h2 className="text-3xl font-bold text-center mb-8">About Us</h2>

      <div className="flex flex-col md:flex-row items-center max-w-6xl bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Left Section - Text */}
        <div className="md:w-1/2 p-6">
          <p className="text-gray-700 text-lg leading-relaxed">
            <strong>Shanker Traders</strong> — proudly serving Nabha, Patiala since <strong>1954</strong>, is one of the most trusted names in the construction materials industry.
            <br /><br />
            We specialize in high-quality products including <strong>Sintex water tanks</strong>, <strong>Grandyer water taps</strong>, <strong>CPVC pipe fittings</strong>, <strong>Western toilet seats</strong>, and a wide variety of <strong>durable plastic pipes, bricks, cement, sand, steel, and iron rods</strong>.
            <br /><br />
            Over the years, our unwavering commitment to quality, trust, and timely delivery has made us a household name among contractors, builders, and homeowners alike. We believe in building not just structures, but strong, long-lasting relationships.
            <br /><br />
            Our warehouse is always stocked with top-grade materials ready to serve small-scale home improvements to large commercial projects. Every product we sell is carefully selected and guaranteed for durability and performance.
            <br /><br />
            💻 <strong>Now Online</strong>: Shop our full product range through our digital platform and enjoy the same trusted service from anywhere — 24/7.
            <br /><br />
            🚚 <strong>Fast Delivery</strong>: Get your products delivered directly to your site with efficiency and care.
            <br /><br />
            🤝 <strong>Our Mission</strong>: To provide superior quality products, fair pricing, and customer satisfaction through every transaction.
            <br /><br />
            🏠 <em>Choose Shanker Traders — where quality meets legacy, and your vision becomes reality.</em>
          </p>
        </div>

        {/* Right Section - Image */}
        <div className="md:w-1/2 relative">
          <img
            src="/aboutUs.jpg"
            alt="Construction Site"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
