"use client";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

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
      className="text-white dark:text-gray-800"
    >
      <path d="M0 30 Q25 0 50 30 T100 30 Q75 60 50 30 T0 30" />
    </svg>
  </motion.div>
);

export default function CloudBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const createCloud = () => {
      const cloud = document.createElement("div");
      cloud.style.position = "absolute";
      cloud.style.left = `${Math.random() * 100}%`;
      cloud.style.top = `${Math.random() * 100}%`;
      container.appendChild(cloud);

      return cloud;
    };

    const clouds = Array.from({ length: 10 }, createCloud);

    return () => {
      clouds.forEach((cloud) => cloud.remove());
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden pointer-events-none"
    >
      <Cloud delay={0} duration={25} style={{ top: "10%", left: "5%" }} />
      <Cloud delay={2} duration={30} style={{ top: "30%", left: "25%" }} />
      <Cloud delay={4} duration={22} style={{ top: "50%", left: "45%" }} />
      <Cloud delay={6} duration={28} style={{ top: "70%", left: "65%" }} />
      <Cloud delay={8} duration={26} style={{ top: "90%", left: "85%" }} />
    </div>
  );
}
