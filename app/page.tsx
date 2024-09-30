import Hero from "@/components/hero";
import { Montserrat, Playfair_Display } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });
const playfair = Playfair_Display({ subsets: ["latin"] });

type Track = {
  id: number;
  title: string;
  permalink_url: string;
  duration: number;
  playback_count: number;
  likes_count: number;
};

async function getSoundCloudData(): Promise<{ collection: Track[] }> {
  const res = await fetch(
    "https://api-v2.soundcloud.com/users/68560096/tracks?client_id=yLfooVZK5emWPvRLZQlSuGTO8pof6z4t&limit=5&linked_partitioning=1&app_version=1726736933&app_locale=en",
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default async function Home() {
  const { collection: tracks } = await getSoundCloudData();

  return (
    <main>
      <Hero />
    </main>
  );
}
