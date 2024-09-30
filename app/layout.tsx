import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import { ReactNode } from "react";

import { cn } from "@/lib/utils";
import "./globals.css";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

type RootLayoutProps = {
  children: ReactNode;
};

export const metadata: Metadata = {
  title: "MARADOCA",
  description: "MARADOCA - Music and Personal Growth",
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={cn("font-sans antialiased", fontSans.variable)}>
        {children}
      </body>
    </html>
  );
}
