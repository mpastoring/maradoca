"use client";

import { client } from "@/lib/sanity.client";
import { heroQuery } from "@/lib/sanity.queries";
import { cn } from "@/lib/utils";
import { Orbitron, Roboto } from "next/font/google";
import { useEffect, useState } from "react";
import BackgroundVideo from "./hero/BackgroundVideo";
import Content from "./hero/Content";

const orbitron = Orbitron({ subsets: ["latin"] });
const roboto = Roboto({ subsets: ["latin"], weight: ["300", "400", "700"] });

type HeroData = {
  title: string;
  subtitle: string;
  backgroundVideo: {
    desktop: string;
    mobile: string;
  };
  socialLinks: Array<{
    platform: string;
    url: string;
    icon: string;
  }>;
};

export default function Hero() {
  const [isMuted, setIsMuted] = useState(true);
  const [heroData, setHeroData] = useState<HeroData | null>(null);

  // Fetch hero data
  useEffect(() => {
    async function fetchHeroData() {
      const data = await client.fetch(heroQuery);
      setHeroData(data);
    }
    fetchHeroData();
  }, []);

  // Handle spacebar press
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (
        event.code === "Space" &&
        !["INPUT", "TEXTAREA"].includes((event.target as HTMLElement).tagName)
      ) {
        event.preventDefault();
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
        roboto.className,
      )}
    >
      <BackgroundVideo
        isMuted={isMuted}
        onToggleMute={() => setIsMuted(!isMuted)}
        desktopVideoId={heroData?.backgroundVideo?.desktop}
        mobileVideoId={heroData?.backgroundVideo?.mobile}
      />
      <Content orbitronClassName={orbitron.className} heroData={heroData} />
    </div>
  );
}
