"use client";

import { cn } from "@/lib/utils";
import { Orbitron, Roboto } from "next/font/google";
import { useEffect, useRef, useState } from "react";
import BackgroundVideo from "./hero/BackgroundVideo";
import Content from "./hero/Content";
import Overlay from "./hero/Overlay";

const orbitron = Orbitron({ subsets: ["latin"] });
const roboto = Roboto({ subsets: ["latin"], weight: ["300", "400", "700"] });

export default function Hero() {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    setIsVideoLoaded(true);
  }, []);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div
      className={cn(
        "relative h-screen w-full overflow-hidden bg-black text-white",
        roboto.className,
      )}
    >
      <BackgroundVideo
        ref={videoRef}
        isLoaded={isVideoLoaded}
        isMuted={isMuted}
      />
      <Overlay />

      <Content
        orbitronClassName={orbitron.className}
        toggleMute={toggleMute}
        isMuted={isMuted}
      />
    </div>
  );
}
