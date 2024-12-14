import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getPressKitImages } from "@/lib/cloudinary";
import {
  ArrowRight,
  GlobeIcon,
  HomeIcon,
  ImageIcon,
  InstagramIcon,
  MailIcon,
  MusicIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export type Performance = {
  date: string;
  venue: string;
  location: string;
  isPast: boolean;
};

// Replace the fetch-based approach with direct track URLs
const FEATURED_TRACKS = [
  "1954887755", // Soultechno @ Institut für Zukunft (IFZ) Leipzig I equalize x fem*vak
  "1684032357", // Progressive & Melodic Techno: An emotional journey to freedom! (Luises Garten Teil II)
  "1825612533", // [HOT SHOT SERIES 118] - Podcast by MARADOCA [M.D.H.]
  "1773420381", // Obenmusik Podcast 122 By Maradoca
];

// Update the date formatting function to handle timezone correctly
function formatDate(dateString: string) {
  // Add time to ensure correct date handling
  const date = new Date(dateString + "T12:00:00");
  return date.toLocaleDateString("de-DE", {
    day: "2-digit",
    month: "2-digit",
    year: "2-digit",
  });
}

export default async function Component() {
  const pressKitImages = await getPressKitImages();

  // Use the last image as main portrait
  const mainPortrait = pressKitImages[pressKitImages.length - 1];

  // Use the first 4 images as additional photos
  const additionalPhotos = pressKitImages.slice(0, 4);

  const performances: Performance[] = [
    {
      date: "2025-02-01",
      venue: "Westwerk",
      location: "Leipzig",
      isPast: false,
    },
    {
      date: "2025-01-31",
      venue: "Elsterartig",
      location: "Leipzig",
      isPast: false,
    },
    {
      date: "2024-09-27",
      venue: "Charles Bronson",
      location: "Halle",
      isPast: false,
    },
    {
      date: "2024-10-04",
      venue: "Elsterartig",
      location: "Leipzig",
      isPast: false,
    },
    {
      date: "2024-10-30",
      venue: "IFZ",
      location: "Leipzig",
      isPast: false,
    },
    {
      date: "2024-08-14",
      venue: "Insel der Jugend",
      location: "Magdeburg",
      isPast: true,
    },
    {
      date: "2024-08-10",
      venue: "Wilde Möhre I FLINTA* DJ Workshop Equalize",
      location: "Unknown",
      isPast: true,
    },
    {
      date: "2024-08-02",
      venue: "NatureOne Camp",
      location: "Unknown",
      isPast: true,
    },
    {
      date: "2024-07-26",
      venue: "H12KK Festival",
      location: "Unknown",
      isPast: true,
    },
    {
      date: "2024-07-10",
      venue: "Ilses Erika",
      location: "Leipzig",
      isPast: true,
    },
    {
      date: "2024-05-25",
      venue: "Lisbeth Lauscht",
      location: "Leipzig",
      isPast: true,
    },
    {
      date: "2024-05-03",
      venue: "Charles Bronson",
      location: "Halle (Saale)",
      isPast: true,
    },
    {
      date: "2024-04-19",
      venue: "The GardenLabs",
      location: "Portugal",
      isPast: true,
    },
    {
      date: "2024-03-08",
      venue: "Kulturlounge",
      location: "Leipzig",
      isPast: true,
    },
    {
      date: "2024-03-02",
      venue: "Trash",
      location: "Gera",
      isPast: true,
    },
    {
      date: "2024-02-24",
      venue: "NousNous",
      location: "Leipzig",
      isPast: true,
    },
    {
      date: "2024-01-12",
      venue: "NousNous",
      location: "Leipzig",
      isPast: true,
    },
    {
      date: "2023-10-28",
      venue: "Gewächshäuser",
      location: "Magdeburg",
      isPast: true,
    },
    {
      date: "2023-10-27",
      venue: "Garage Ost",
      location: "Leipzig",
      isPast: true,
    },
    {
      date: "2023-10-21",
      venue: "Station Endlos",
      location: "Halle",
      isPast: true,
    },
    {
      date: "2023-10-14",
      venue: "Tramuntana Flow",
      location: "Mallorca",
      isPast: true,
    },
    {
      date: "2023-10-01",
      venue: "Luises Garten",
      location: "Magdeburg",
      isPast: true,
    },
    {
      date: "2023-09-13",
      venue: "Rooftop Party@ Villa Palma",
      location: "Sardinia",
      isPast: true,
    },
    {
      date: "2023-09-06",
      venue: "Rooftop Party@ Villa Palma",
      location: "Sardinia",
      isPast: true,
    },
    {
      date: "2023-07-28",
      venue: "H12KK Festival",
      location: "Unknown",
      isPast: true,
    },
    {
      date: "2023-05-17",
      venue: "Trash",
      location: "Gera",
      isPast: true,
    },
  ];

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  // Update the date comparison logic
  const sortedPerformances = performances
    .map((gig) => ({
      ...gig,
      isPast: new Date(gig.date + "T12:00:00") < today,
    }))
    .sort((a, b) => {
      const dateA = new Date(a.date + "T12:00:00");
      const dateB = new Date(b.date + "T12:00:00");
      return a.isPast === b.isPast
        ? a.isPast
          ? dateB.getTime() - dateA.getTime()
          : dateA.getTime() - dateB.getTime()
        : a.isPast
          ? 1
          : -1;
    });

  const upcomingGigs = sortedPerformances.filter((gig) => !gig.isPast);
  const pastGigs = sortedPerformances.filter((gig) => gig.isPast);

  return (
    <div className="min-h-screen bg-[#0B1120] text-gray-100">
      {/* Floating Back Button */}
      <Link
        href="/"
        className="fixed top-4 left-4 md:top-8 md:left-8 z-50 flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all group"
        aria-label="Back to Home"
      >
        <HomeIcon className="h-4 w-4 md:h-5 md:w-5 text-gray-400 group-hover:text-[#ff5500] transition-colors" />
      </Link>

      <div className="container mx-auto px-3 md:px-4 py-8 md:py-12 max-w-7xl">
        {/* Press Kit Header */}
        <header className="mb-12 md:mb-20 text-center">
          <div className="inline-block mb-3 px-3 py-1 md:px-4 md:py-1.5 rounded-full bg-white/5 border border-white/10">
            <span className="text-xs md:text-sm font-medium text-gray-300">
              Press Kit 2024
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-3 md:mb-4 text-white tracking-tight">
            MARADOCA
          </h1>
          <p className="text-lg md:text-xl text-gray-400 font-light">
            Electronic Music Artist & DJ
          </p>
          <p className="text-base md:text-lg text-gray-400 font-light">
            Leipzig, Germany
          </p>
        </header>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12">
          {/* Left Column - Image & Connect */}
          <div className="lg:col-span-4 space-y-8">
            {/* Main Portrait */}
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden ring-1 ring-white/10 shadow-2xl">
              {mainPortrait ? (
                <Image
                  src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/q_auto,f_auto,c_fill,g_face,w_800,h_1067/${mainPortrait.cloudinaryId}`}
                  alt={mainPortrait.description || "MARADOCA"}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  priority
                />
              ) : (
                <div className="w-full h-full bg-white/[0.02] flex items-center justify-center">
                  <ImageIcon className="w-12 h-12 text-white/20" />
                </div>
              )}
            </div>

            {/* Additional Press Photos */}
            <div className="grid grid-cols-2 gap-4">
              {additionalPhotos.map((photo, index) => (
                <div
                  key={photo.id}
                  className="relative aspect-square rounded-xl overflow-hidden ring-1 ring-white/10"
                >
                  <Image
                    src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/q_auto,f_auto,c_fill,g_auto,w_400,h_400/${photo.cloudinaryId}`}
                    alt={
                      photo.description || `MARADOCA press photo ${index + 1}`
                    }
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
              {[...Array(Math.max(0, 4 - additionalPhotos.length))].map(
                (_, i) => (
                  <div
                    key={`empty-${i}`}
                    className="relative aspect-square rounded-xl overflow-hidden ring-1 ring-white/10"
                  >
                    <div className="w-full h-full bg-white/[0.02] flex items-center justify-center">
                      <ImageIcon className="w-8 h-8 text-white/20" />
                    </div>
                  </div>
                )
              )}
            </div>

            {/* Connect Card */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-white/[0.05] rounded-2xl blur-xl" />
              <Card className="relative border-0 bg-white/[0.02] backdrop-blur-sm rounded-xl">
                <CardHeader>
                  <CardTitle className="text-lg font-medium text-white/90">
                    Connect
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 md:space-y-4">
                    <li>
                      <a
                        href="https://www.maradoca.com"
                        className="flex items-center text-gray-400 hover:text-white transition-colors group"
                      >
                        <GlobeIcon className="mr-3 h-5 w-5 group-hover:text-[#ff5500]" />
                        <span className="font-light">maradoca.com</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://instagram.com/maradoca"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-gray-400 hover:text-white transition-colors group"
                      >
                        <InstagramIcon className="mr-3 h-5 w-5 group-hover:text-[#ff5500]" />
                        <span className="font-light">@maradoca</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://soundcloud.com/maradoca"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-gray-400 hover:text-white transition-colors group"
                      >
                        <MusicIcon className="mr-3 h-5 w-5 group-hover:text-[#ff5500]" />
                        <span className="font-light">
                          soundcloud.com/maradoca
                        </span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="mailto:maradoca.music@gmail.com"
                        className="flex items-center text-gray-400 hover:text-white transition-colors group"
                      >
                        <MailIcon className="mr-3 h-5 w-5 group-hover:text-[#ff5500]" />
                        <span className="font-light">
                          maradoca.music@gmail.com
                        </span>
                      </a>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Right Column - Main Content */}
          <div className="lg:col-span-8 space-y-12">
            {/* About Section with subtle background */}
            <div className="relative p-4 md:p-6 rounded-2xl">
              <div className="absolute inset-0 bg-gradient-to-r from-white/[0.02] to-transparent rounded-2xl" />
              <section className="relative space-y-6">
                <h2 className="text-2xl font-semibold text-white">About</h2>
                <p className="text-lg text-gray-300 leading-relaxed font-light">
                  MARADOCA delivers a captivating blend of afro/melodic house,
                  cosmic/psy elements, and driving Soultechno. Her sets take you
                  on a progressive journey, balancing tropical daytime vibes
                  with deep, trance-like energy.
                </p>
                <div className="pt-4">
                  <h3 className="text-sm uppercase tracking-wider text-gray-400 mb-4">
                    Signature Sounds
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Melodic House & Techno",
                      "Afrohouse",
                      "Progressive",
                      "Cosmic",
                      "Deep",
                    ].map((genre) => (
                      <Badge
                        key={genre}
                        variant="secondary"
                        className="px-4 py-1.5 bg-white/[0.03] hover:bg-white/[0.06] text-gray-300 border-0"
                      >
                        {genre}
                      </Badge>
                    ))}
                  </div>
                </div>
              </section>
            </div>

            {/* Performances Grid with unified background */}
            <div className="relative p-4 md:p-6 rounded-2xl">
              <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-white/[0.05] rounded-2xl" />
              <div className="relative space-y-8">
                {/* Upcoming Section */}
                <section>
                  <h2 className="text-2xl font-semibold text-white mb-6">
                    Performances
                  </h2>
                  <div className="space-y-8">
                    {/* Upcoming subsection */}
                    <div>
                      <h3 className="text-xl font-medium text-white/90 mb-4">
                        Upcoming
                      </h3>
                      {upcomingGigs.length > 0 ? (
                        <ul className="space-y-2">
                          {upcomingGigs.map((gig, index) => (
                            <li
                              key={index}
                              className="group flex items-center gap-3 bg-white/[0.02] hover:bg-white/[0.05] px-3 py-2 rounded-lg transition-colors border border-white/5"
                            >
                              <time className="text-[#ff5500] text-sm font-medium min-w-[70px]">
                                {formatDate(gig.date)}
                              </time>
                              <span className="font-medium text-gray-200 group-hover:text-white transition-colors">
                                {gig.venue}
                              </span>
                              <span className="text-gray-500">
                                {gig.location}
                              </span>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <div className="bg-white/[0.02] p-4 rounded-lg border border-white/5">
                          <p className="text-gray-400 text-center">
                            New dates TBA
                            <span className="block text-sm mt-1">
                              <a
                                href="mailto:maradoca.music@gmail.com"
                                className="hover:text-white transition-colors hover:underline"
                              >
                                Contact for bookings
                              </a>
                            </span>
                          </p>
                        </div>
                      )}
                    </div>

                    {/* Past Performances subsection */}
                    <div>
                      <h3 className="text-xl font-medium text-white/90 mb-4">
                        Past
                      </h3>
                      {pastGigs.length > 0 ? (
                        <div className="space-y-6">
                          {Object.entries(
                            pastGigs.reduce(
                              (acc, gig) => {
                                const city = gig.location || "Other";
                                if (!acc[city]) acc[city] = new Set();
                                acc[city].add(gig.venue);
                                return acc;
                              },
                              {} as Record<string, Set<string>>
                            )
                          ).map(([city, venues]) => (
                            <div key={city} className="space-y-2">
                              <h4 className="text-sm font-medium text-white/70">
                                {city}
                              </h4>
                              <div className="flex flex-wrap gap-2">
                                {Array.from(venues).map((venue, index) => (
                                  <Badge
                                    key={index}
                                    variant="secondary"
                                    className="px-4 py-1.5 bg-white/[0.03] hover:bg-white/[0.06] text-gray-300 border-0"
                                  >
                                    {venue}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <p className="text-white/60">
                          No past performances to display
                        </p>
                      )}
                    </div>
                  </div>
                </section>

                {/* Featured Sets moved below performances */}
                <section className="pt-8 border-t border-white/10">
                  <h3 className="text-xl font-medium text-white/90 mb-6">
                    Featured Sets
                  </h3>
                  <div className="space-y-3 md:space-y-4 bg-white/[0.02] rounded-xl p-4">
                    {FEATURED_TRACKS.map((trackId) => (
                      <iframe
                        key={trackId}
                        width="100%"
                        height="20"
                        scrolling="no"
                        frameBorder="no"
                        allow="autoplay"
                        className="px-2 md:px-3"
                        src={`https://w.soundcloud.com/player/?url=https://api.soundcloud.com/tracks/${trackId}&color=%23ff5500&inverse=true&auto_play=false&show_user=true&show_playcount=false&show_artwork=false&buying=false&sharing=false&download=false`}
                      ></iframe>
                    ))}
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Add this section before the footer */}
      <section className="border-t border-white/10 bg-white/5 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="mb-4 text-3xl font-bold text-white">
              Media Gallery
            </h2>
            <p className="mb-8 text-gray-400">
              Looking for more photos and videos? Check out our media gallery.
            </p>
            <Link href="/media">
              <Button
                variant="outline"
                size="lg"
                className="group border-white/20 bg-white/5 text-white hover:bg-white hover:text-black"
              >
                View Media Gallery
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
