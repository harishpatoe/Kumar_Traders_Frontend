import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion"; // Import motion

const Home = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}       // start faded and slightly below
      animate={{ opacity: 1, y: 0 }}        // animate to visible and in place
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative w-screen max-w-none h-[400px] lg:h-[500px] xl:h-[600px] flex items-center justify-center text-center bg-gray-900"
    >
      {/* Background Image */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center opacity-80"
        style={{
          backgroundImage: "url('/home2.jpg')",
        }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg- bg-opacity-40"></div>

      {/* Content */}
      <motion.div
        className="relative z-10 text-white px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <h1 className="text-3xl lg:text-5xl font-bold mb-2">Shanker Traders</h1>
        <p className="text-lg lg:text-xl mb-4">Providing Superior Quality</p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate("/Products")}
          className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-2 px-6 rounded-lg shadow-lg"
        >
          Shop Now
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default Home;
