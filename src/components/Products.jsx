import React from "react";
import { useNavigate } from "react-router-dom";

const products = [
  { name: "Sand", image: "/sand.jpg", route: "/SandDetails", price: "₹500", units: "per kg" },
  { name: "Cement", image: "/cement.jpg", route: "/CementDetails", price: "₹350", units: "per bag" },
  { name: "Bricks", image: "/bricks.jpg", route: "/BricksDetails", price: "₹1000", units: "per 100 pcs" },
  { name: "Steel", image: "/steel.jpg", route: "/SteelDetails", price: "₹7000", units: "per ton" },
  { name: "Gravel", image: "/gravel.jpg", route: "/GravelDetails", price: "₹800", units: "per ton" },
  { name: "Iron Rods", image: "/ironrods.jpg", route: "/IronrodDetails", price: "₹1500", units: "per meter" },
];

const Products = () => {
  const navigate = useNavigate();

  const handleBuyNow = (route) => {
    navigate(route);
  };

  return (
    <div className="w-full min-h-screen bg-gray-100 flex flex-col items-center py-6">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">Our Products</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 px-4 w-full max-w-7xl">
        {products.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden text-center p-4 transform transition-transform duration-300 hover:scale-110 border-2 border-yellow-500 rounded-lg"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-48 object-cover rounded-md shadow-md mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800">{item.name}</h3>
            <p className="text-lg text-yellow-600 font-semibold">{item.price}</p>
            <p className="text-md text-gray-500">{item.units}</p>
            <button
              onClick={() => handleBuyNow(item.route)}
              className="mt-4 py-2 px-6 bg-yellow-500 hover:bg-yellow-600 text-black font-medium rounded-full shadow-md transform transition-all duration-300 ease-in-out hover:scale-105"
            >
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
