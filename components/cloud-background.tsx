"use client";
import { motion } from "framer-motion";

const Cloud = ({ delay = 0, duration = 20, ...props }) => (
  <motion.div
    className="absolute opacity-70"
    animate={{
      x: ["0%", "100%"],
      y: ["-10%", "10%"],
    }}
    transition={{
      x: {
        repeat: Infinity,
        repeatType: "reverse",
        duration,
        delay,
      },
      y: {
        repeat: Infinity,
        repeatType: "reverse",
        duration: duration / 2,
        delay,
      },
    }}
    {...props}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100"
      height="60"
      viewBox="0 0 100 60"
      fill="currentColor"
      className="text-blue-100 dark:text-blue-900"
    >
      <path d="M0 30 Q25 0 50 30 T100 30 Q75 60 50 30 T0 30" />
    </svg>
  </motion.div>
);

export default function CloudBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      <Cloud delay={0} duration={25} style={{ top: "10%", left: "5%" }} />
      <Cloud delay={2} duration={30} style={{ top: "30%", left: "25%" }} />
      <Cloud delay={4} duration={22} style={{ top: "50%", left: "45%" }} />
      <Cloud delay={6} duration={28} style={{ top: "70%", left: "65%" }} />
      <Cloud delay={8} duration={26} style={{ top: "90%", left: "85%" }} />
    </div>
  );
}
