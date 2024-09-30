import Hero from "@/components/hero";
import "next-cloudinary/dist/cld-video-player.css";
import { Montserrat, Playfair_Display } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });
const playfair = Playfair_Display({ subsets: ["latin"] });

export default function Home() {
  return <Hero />;
}
