"use client";

import { motion } from "framer-motion";

type HeroProps = {
  playfairFont: string;
};

export default function Hero({ playfairFont }: HeroProps) {
  return (
    <div className="text-center py-20">
      <motion.h1
        className={`text-8xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 ${playfairFont}`}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, type: "spring" }}
      >
        MARADOCA
      </motion.h1>
      <motion.p
        className="text-2xl mb-8 text-gray-300"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Where science meets sound in ethereal journeys
      </motion.p>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="text-5xl"
      >
        ☁️
      </motion.div>
    </div>
  );
}
