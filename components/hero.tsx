"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import ClientOnly from "./client-only";

export default function Hero() {
  return (
    <ClientOnly>
      <div className="relative overflow-hidden py-20">
        <motion.div
          className="absolute inset-0 bg-blue-200 dark:bg-blue-800 opacity-20"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        <div className="relative z-10 text-center">
          <motion.h1
            className="text-6xl md:text-8xl font-bold mb-4 text-blue-900 dark:text-blue-100"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            MARADOCA
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl mb-8 text-blue-800 dark:text-blue-200"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Embark on a journey through the clouds of sound
          </motion.p>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              Explore My Music
            </Button>
          </motion.div>
        </div>
      </div>
    </ClientOnly>
  );
}
