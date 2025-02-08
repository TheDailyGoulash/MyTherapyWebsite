import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import './index.css';

export default function App() {
  const [inkblotOpacity, setInkblotOpacity] = useState(0);

  useEffect(() => {
    setTimeout(() => setInkblotOpacity(1), 500); // Delay inkblot fade-in
  }, []);

  return (
    <div className="relative h-screen w-full flex items-center justify-center bg-black overflow-hidden">
      {/* Inkblot Background */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: inkblotOpacity, scale: 1 }}
        transition={{ duration: 2, ease: 'easeOut' }}
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center opacity-60"
        style={{ backgroundImage: "url('https://source.unsplash.com/1600x900/?ink,abstract')" }}
      />

      {/* Content */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        className="z-10 text-center text-white"
      >
        <h1 className="text-5xl md:text-6xl font-serif tracking-wide">
          Exploring the Depths of the Psyche
        </h1>
        <p className="text-lg md:text-xl mt-4 opacity-80">
          A journey through the unconscious, shadow work, and personal transformation.
        </p>
        
        {/* Animated Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="mt-8 px-6 py-3 bg-white text-black font-semibold rounded-xl shadow-lg hover:bg-gray-200 transition"
        >
          Begin
        </motion.button>
      </motion.div>
    </div>
  );
}
