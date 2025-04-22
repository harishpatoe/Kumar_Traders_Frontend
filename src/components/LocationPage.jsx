import React from "react";

const LocationPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-6">Our Location</h1>
      <div className="w-full max-w-4xl">
        <iframe
          className="w-full h-96 rounded-lg shadow-lg"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3454.857595743685!2d76.41517337528499!3d30.37582220394647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391028aee66b7b61%3A0xf4f3e1c9b8c4e2f5!2sShanker%20Traders!5e0!3m2!1sen!2sin!4v1710072000000"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default LocationPage;
