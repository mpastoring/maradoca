import type { Metadata } from "next";
import { Inter as FontSans, Space_Grotesk } from "next/font/google";
import { ReactNode } from "react";

import { cn } from "@/lib/utils";
import "./globals.css";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const fontDisplay = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
});

type RootLayoutProps = {
  children: ReactNode;
};

export const metadata: Metadata = {
  title: "MARADOCA",
  description: "Melodic Techno DJ Crafting Cosmic Journeys • Leipzig",
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(fontSans.variable, fontDisplay.variable, "h-[100dvh]")}
      >
        {children}
      </body>
    </html>
  );
}
