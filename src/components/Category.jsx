import React from "react";

const categories = [
  { name: "Sand", image: "/sand.jpg" },
  { name: "Cement", image: "/cement.jpg" },
  { name: "Steel", image: "/steel.jpg" },
  { name: "Gravel", image: "/gravel.jpg" },
  { name: "Iron Rods", image: "/ironrods.jpg" },
  { name: "Bricks", image: "/bricks.jpg" },
  { name: "Crushed Stone", image: "/crushedstone.jpg" },
];

const Category = () => {
  return (
    <div className="w-full min-h-screen bg-white flex flex-col items-center justify-center">
      <h2 className="text-4xl font-bold text-center mb-8">Categories</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-6 w-full max-w-7xl">
        {categories.map((item, index) => (
          <div key={index} className="text-center transform transition-transform duration-300 hover:scale-110 border-2 border-yellow-500 rounded-lg">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-60 object-cover rounded-lg shadow-lg hover:shadow-xl"
            />
            <h3 className="mt-3 text-xl font-semibold">{item.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
