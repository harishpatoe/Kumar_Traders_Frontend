import React from "react";
import { useCart } from "../components/CartContext";
import { Button } from "antd";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const CartPage = () => {
  const { cart, removeFromCart } = useCart();

  const handleRemoveFromCart = (productId) => {
    removeFromCart(productId);
  };

  if (!cart || cart.length === 0) {
    return (
      <>
        <Header />
        <Navbar />
        <div className="flex items-center justify-center h-screen">
          <p className="text-xl text-gray-600">Your cart is empty.</p>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <Navbar />
      <div className="cart-page p-6 bg-gray-100 min-h-screen">
        <h2 className="text-2xl font-bold mb-4">Your Cart</h2>

        <div className="space-y-4">
          {cart.map((product) => (
            <div key={product.id} className="cart-item flex justify-between items-center p-4 bg-white shadow-md rounded-lg">
              <div className="flex items-center space-x-4">
                {product.image && (
                  <img src={product.image} alt={product.name} className="w-16 h-16 object-cover rounded-md" />
                )}
                <div>
                  <h3 className="text-lg font-semibold">{product.name}</h3>
                  <p className="text-gray-600">₹{product.price} x {product.quantity}</p>
                  <p className="font-semibold text-gray-800">Subtotal: ₹{product.price * product.quantity}</p>
                </div>
              </div>
              <Button onClick={() => handleRemoveFromCart(product.id)} danger>
                Remove
              </Button>
            </div>
          ))}
        </div>

        {/* Total Price Section */}
        <div className="mt-6 p-4 bg-white shadow-md rounded-lg">
          <h3 className="text-xl font-bold">Total Amount</h3>
          <p className="text-gray-800 text-lg">
            ₹{cart.reduce((total, item) => total + item.price * item.quantity, 0)}
          </p>
          <Button type="primary" className="mt-3 bg-green-600 hover:bg-green-700 text-white">
            Proceed to Pay
          </Button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CartPage;
