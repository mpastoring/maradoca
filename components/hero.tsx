"use client";

import { cn } from "@/lib/utils";
import { Orbitron, Roboto } from "next/font/google";
import BackgroundVideo from "./hero/BackgroundVideo";
import Content from "./hero/Content";

const orbitron = Orbitron({ subsets: ["latin"] });
const roboto = Roboto({ subsets: ["latin"], weight: ["300", "400", "700"] });

export default function Hero() {
  return (
    <div className={cn("h-full w-full bg-black text-white", roboto.className)}>
      <BackgroundVideo />
      <Content orbitronClassName={orbitron.className} />
    </div>
  );
}
