import Hero from "@/components/hero";
import CloudBackground from "@/components/cloud-background";
import MusicPlayer from "@/components/music-player";
import UpcomingEvents from "@/components/upcoming-events";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-b from-blue-100 to-white dark:from-blue-900 dark:to-gray-900">
      <CloudBackground />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Hero />
        <div className="mt-16">
          <MusicPlayer />
        </div>
        <div className="mt-16">
          <UpcomingEvents />
        </div>
      </div>
    </main>
  );
}
