import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { CartContext } from "./CartContext";

const Products = () => {
  const [products, setProducts] = useState([]);
  const { cart, setCart } = useContext(CartContext); // 👈 use context
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/auth/getproduct");
        const productsWithQuantity = response.data.product.map((product) => ({
          ...product,
          quantity: 0,
        }));
        setProducts(productsWithQuantity);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const handleQuantityChange = (productId, action) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product._id === productId
          ? {
              ...product,
              quantity:
                action === "increase"
                  ? product.quantity + 1
                  : product.quantity > 0
                  ? product.quantity - 1
                  : 0,
            }
          : product
      )
    );
  };

  const handleAddToCart = (product, quantity) => {
    if (quantity > 0) {
      const existingProduct = cart.find((item) => item._id === product._id);
      if (existingProduct) {
        setCart(
          cart.map((item) =>
            item._id === product._id
              ? { ...item, quantity: item.quantity + quantity }
              : item
          )
        );
      } else {
        setCart([...cart, { ...product, quantity }]);
      }
    }
  };

  return (
    <div className="w-full min-h-screen bg-gray-100 flex flex-col items-center py-6">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">Our Products</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 px-4 w-full max-w-7xl">
        {products.length === 0 ? (
          <p className="text-center text-xl font-semibold text-gray-700">Loading products...</p>
        ) : (
          products.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden text-center p-4 transform transition-transform duration-300 hover:scale-110 border-2 border-yellow-500"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-cover rounded-md shadow-md mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">{item.name}</h3>
              <p className="text-lg text-yellow-600 font-semibold">{item.price}</p>
              <p className="text-md text-gray-500">Stock: {item.stock}</p>

              <div className="flex items-center justify-center my-2">
                <button
                  onClick={() => handleQuantityChange(item._id, "decrease")}
                  className="px-3 py-1 bg-gray-300 text-black rounded-full"
                >
                  -
                </button>
                <span className="mx-4 text-lg text-black">{item.quantity}</span>
                <button
                  onClick={() => handleQuantityChange(item._id, "increase")}
                  className="px-3 py-1 bg-gray-300 text-black rounded-full"
                >
                  +
                </button>
              </div>

              <button
                onClick={() => handleAddToCart(item, item.quantity)}
                className="mt-4 py-2 px-6 bg-yellow-500 hover:bg-yellow-600 text-black font-medium rounded-full shadow-md transform transition-all duration-300 ease-in-out hover:scale-105"
              >
                Add to Cart
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Products;
