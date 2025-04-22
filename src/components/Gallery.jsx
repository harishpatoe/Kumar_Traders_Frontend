import React from "react";
import { Carousel } from "antd";

const images = [
  "/gallery1.jpg",
  "gallery2.jpg",
  "/gallery3.jpg",
  "/gallery4.jpg",
];

const GalleryPage = () => {
  return (
    <div className="w-full min-h-screen bg-gray-100 py-10 px-4">
      {/* Header Section */}
      <div className="max-w-5xl mx-auto text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800">Our Gallery</h1>
        <p className="text-gray-600 mt-2">
          Explore our collection of high-quality construction materials.
        </p>
      </div>

      {/* Carousel Slider */}
      <div className="max-w-4xl mx-auto">
        <Carousel autoplay dots={{ className: "custom-dots" }} effect="fade">
          {images.map((img, index) => (
            <div key={index} className="flex justify-center">
              <img
                src={img}
                alt={`Gallery ${index + 1}`}
                className="w-full h-96 object-cover rounded-xl shadow-lg"
              />
            </div>
          ))}
        </Carousel>
      </div>

      {/* Description Section */}
      <div className="max-w-3xl mx-auto text-center mt-10 px-4">
        <p className="text-lg text-gray-700">
          Shanker Traders provides premium construction materials, ensuring top
          quality and durability. Browse our collection and choose the best
          products for your needs.
        </p>
      </div>
    </div>
  );
};

export default GalleryPage;
