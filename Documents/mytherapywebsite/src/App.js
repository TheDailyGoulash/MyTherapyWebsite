import React from "react";
import { motion } from "framer-motion";

const App = () => {
  return (
    <div className="relative min-h-screen bg-black text-white flex items-center justify-center">
      {/* Background Inkblot Effect */}
      <motion.div
        className="absolute inset-0 bg-noise"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 2 }}
      />

      {/* Content */}
      <motion.div
        className="z-10 text-center p-6"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <h1 className="text-5xl font-bold mb-4">
          Exploring the Depths of the Psyche
        </h1>
        <p className="text-lg text-gray-400 mb-6">
          A journey through the unconscious, shadow work, and personal transformation.
        </p>
        
        <motion.button
          className="px-6 py-3 text-lg font-semibold bg-white text-black rounded-lg shadow-lg hover:bg-gray-300 transition"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Begin
        </motion.button>
      </motion.div>
    </div>
  );
};

export default App;
