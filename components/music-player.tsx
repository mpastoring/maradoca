"use client";

import { motion } from "framer-motion";
import ClientOnly from "./client-only";
import SoundCloudEmbed from "./soundcloud-embed";

export default function MusicPlayer() {
  return (
    <ClientOnly>
      <motion.div
        className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 relative overflow-hidden"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-bold mb-4 text-blue-900 dark:text-blue-100">
          Latest Tracks
        </h2>
        <SoundCloudEmbed
          url="https://soundcloud.com/maradoca/sets/podcast-series"
          title="Podcasts"
        />
      </motion.div>
    </ClientOnly>
  );
}
