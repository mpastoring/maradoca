import About from "./components/About";
import Events from "./components/Events";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import MusicControllerWrapper from "./components/MusicControllerWrapper";
import MusicSection from "./components/MusicSection";
import { Track } from "./types";

// Add this function to fetch SoundCloud data
async function getSoundCloudData(): Promise<{ collection: Track[] }> {
  const res = await fetch(
    "https://api-v2.soundcloud.com/users/68560096/tracks?client_id=yLfooVZK5emWPvRLZQlSuGTO8pof6z4t&limit=5&linked_partitioning=1&app_version=1726736933&app_locale=en"
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

// Make the component async
export default async function Page() {
  console.log("Page component rendering");
  const { collection: tracks } = await getSoundCloudData();
  console.log("Fetched tracks:", tracks);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-black text-white">
      <Header />
      <Hero />
      <MusicControllerWrapper tracks={tracks}>
        <main className="container mx-auto px-4 py-12">
          <About />
          <MusicSection />
          <Events />
        </main>
      </MusicControllerWrapper>
      <Footer />
    </div>
  );
}
