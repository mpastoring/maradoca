"use client";

import { cn } from "@/lib/utils";
import { Orbitron, Roboto } from "next/font/google";
import { useEffect, useState } from "react";
import BackgroundVideo from "./hero/BackgroundVideo";
import Content from "./hero/Content";

const orbitron = Orbitron({ subsets: ["latin"] });
const roboto = Roboto({ subsets: ["latin"], weight: ["300", "400", "700"] });

export default function Hero() {
  const [isMuted, setIsMuted] = useState(true);

  // Handle spacebar press
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      // Only toggle if space is pressed and not in an input/textarea
      if (
        event.code === "Space" &&
        !["INPUT", "TEXTAREA"].includes((event.target as HTMLElement).tagName)
      ) {
        event.preventDefault(); // Prevent page scroll
        setIsMuted((prev) => !prev);
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, []);

  return (
    <div
      className={cn(
        "h-full w-full bg-black text-white overflow-hidden",
        roboto.className
      )}
    >
      <BackgroundVideo
        isMuted={isMuted}
        onToggleMute={() => setIsMuted(!isMuted)}
      />
      <Content orbitronClassName={orbitron.className} />
    </div>
  );
}
