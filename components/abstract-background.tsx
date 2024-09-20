"use client";
import { motion } from "framer-motion";

const WaveCloud = ({ delay = 0, ...props }) => (
  <motion.div
    className="absolute"
    initial={{ opacity: 0 }}
    animate={{ opacity: [0.2, 0.5, 0.2] }}
    transition={{
      repeat: Infinity,
      duration: 8,
      ease: "easeInOut",
      delay,
    }}
    {...props}
  >
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 200 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        d="M0 50 Q50 0 100 50 T200 50"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      <motion.path
        d="M0 50 Q50 100 100 50 T200 50"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
          delay: 1,
        }}
      />
    </svg>
  </motion.div>
);

export default function AbstractBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      <WaveCloud
        delay={0}
        className="text-blue-500"
        style={{ top: "10%", left: "5%", width: "30vw" }}
      />
      <WaveCloud
        delay={2}
        className="text-purple-500"
        style={{ top: "40%", right: "10%", width: "35vw" }}
      />
      <WaveCloud
        delay={4}
        className="text-teal-500"
        style={{ bottom: "15%", left: "15%", width: "40vw" }}
      />
    </div>
  );
}
