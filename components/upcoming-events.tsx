"use client";

import { motion } from "framer-motion";
import ClientOnly from "./client-only";

export default function UpcomingEvents() {
  const events = [
    { date: "2024-08-14", venue: "Insel der Jugend", location: "Magdeburg" },
    // Add more events as needed
  ];

  return (
    <ClientOnly>
      <motion.div
        className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 relative overflow-hidden mt-12"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="absolute bottom-0 right-0 w-40 h-40 bg-blue-100 dark:bg-blue-700 rounded-full -mr-20 -mb-20 opacity-50"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 45, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        <h2 className="text-2xl font-bold mb-4 text-blue-900 dark:text-blue-100 relative z-10">
          Upcoming Events
        </h2>
        <ul className="space-y-4 relative z-10">
          {events.map((event, index) => (
            <motion.li
              key={index}
              className="bg-blue-50 dark:bg-blue-900 p-4 rounded-md shadow"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="text-lg font-semibold text-blue-800 dark:text-blue-200">
                {event.date}
              </div>
              <div className="text-blue-700 dark:text-blue-300">
                {event.venue}
              </div>
              <div className="text-blue-600 dark:text-blue-400">
                {event.location}
              </div>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </ClientOnly>
  );
}
