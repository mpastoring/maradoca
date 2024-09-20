"use client";

import { motion } from "framer-motion";

type Track = {
  id: number;
  title: string;
  permalink_url: string;
  duration: number;
  playback_count: number;
  likes_count: number;
};

type MusicPlayerProps = {
  tracks: Track[];
};

export default function MusicPlayer({ tracks }: MusicPlayerProps) {
  return (
    <motion.div
      className="max-w-2xl mx-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h2
        className="text-3xl font-bold mb-6 text-center text-gray-200"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Latest Tracks
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {tracks.map((track, index) => (
          <motion.a
            key={track.id}
            href={track.permalink_url}
            target="_blank"
            rel="noopener noreferrer"
            className="block p-4 bg-gray-800 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:rotate-1 hover:bg-gray-700"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            whileHover={{ y: -5 }}
          >
            <h3 className="text-lg font-semibold text-blue-400 mb-2">
              {track.title}
            </h3>
            <p className="text-sm text-gray-400">
              {Math.floor(track.duration / 60000)}m | {track.playback_count}{" "}
              plays
            </p>
          </motion.a>
        ))}
      </div>
    </motion.div>
  );
}
