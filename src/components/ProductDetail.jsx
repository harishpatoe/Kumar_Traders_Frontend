import React, { useState } from "react";
import { InputNumber, Button, message } from "antd";
import { HeartOutlined, ShareAltOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { useCart } from "../components/CartContext";

const ProductDetail = ({ id, title, price, oldPrice, category, tags, description, image, units = "per unit" }) => {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({ id, name: title, price, quantity });
    message.success(`${quantity} ${title} added to cart!`);
  };

  return (
    <div className="p-8 bg-white shadow-lg rounded-lg mx-auto mt-10 max-w-screen-lg">
      {/* Product Layout */}
      <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
        {/* Product Image */}
        <div className="w-full md:w-1/3">
          <img
            src={image}
            alt={title}
            className="w-full h-64 object-contain rounded-lg shadow-xl"
          />
        </div>

        {/* Product Info */}
        <div className="w-full md:w-2/3 space-y-4">
          <h2 className="text-3xl font-bold text-gray-800">{title}</h2>
          <div className="flex items-center space-x-4">
            <p className="text-lg text-gray-600">
              <span className="text-green-600 font-semibold">₹{price} {units}</span>
              {oldPrice && (
                <span className="line-through text-gray-400 ml-4">₹{oldPrice} {units}</span>
              )}
            </p>
            {/* Star Rating */}
            <div className="text-yellow-500 text-xl">
              ★★★★☆ <span className="text-gray-600 text-sm">(50 reviews)</span>
            </div>
          </div>
          
          {/* Quantity & Add to Cart */}
          <div className="flex items-center space-x-4">
            <span className="text-gray-700 text-lg">Quantity:</span>
            <InputNumber
              min={1}
              max={100}
              value={quantity}
              onChange={(value) => setQuantity(value)}
              className="w-20"
            />
            <Button
              type="primary"
              icon={<ShoppingCartOutlined />}
              onClick={handleAddToCart}
              className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-6 rounded-lg shadow-md"
            >
              Add to Cart
            </Button>
          </div>
        </div>
      </div>

      {/* Wishlist & Share Buttons */}
      <div className="flex justify-start space-x-6 mt-4">
        <Button
          icon={<HeartOutlined />}
          className="bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-lg py-2 px-6"
        >
          Add to Wishlist
        </Button>
        <Button
          icon={<ShareAltOutlined />}
          className="bg-blue-500 hover:bg-blue-600 text-white rounded-lg py-2 px-6"
        >
          Share
        </Button>
      </div>

      {/* Category & Tags */}
      <div className="text-left text-gray-600 mt-6">
        <p><strong>Category:</strong> {category}</p>
        <p><strong>Tags:</strong> {tags}</p>
      </div>

      {/* Description Section */}
      <div className="mt-6">
        <h3 className="text-2xl font-semibold text-gray-800">Description</h3>
        <p className="text-gray-700 mt-2 text-lg leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default ProductDetail;
