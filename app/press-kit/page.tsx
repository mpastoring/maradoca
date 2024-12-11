"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GlobeIcon } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

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

export default function Component() {
  const [showAllPast, setShowAllPast] = useState(false);

  const performances: Performance[] = [
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

  // Update isPast dynamically based on current date
  const sortedPerformances = performances
    .map((gig) => ({
      ...gig,
      isPast: new Date(gig.date) < today,
    }))
    .sort((a, b) => {
      // Sort upcoming gigs in ascending order (nearest first)
      // Sort past gigs in descending order (most recent first)
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
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
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        {/* Press Kit Header */}
        <header className="mb-20 text-center">
          <div className="inline-block mb-3 px-4 py-1.5 rounded-full bg-white/5 border border-white/10">
            <span className="text-sm font-medium text-gray-300">
              Press Kit 2024
            </span>
          </div>
          <h1 className="text-7xl font-bold mb-4 text-white tracking-tight">
            MARADOCA
          </h1>
          <p className="text-xl text-gray-400 font-light">
            Electronic Music Artist & DJ
          </p>
          <p className="text-lg text-gray-400 font-light">Leipzig, Germany</p>
        </header>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column - Image & Connect */}
          <div className="lg:col-span-4 space-y-8">
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden ring-1 ring-white/10 shadow-2xl">
              <Image
                src="/maradoca-portrait.jpg"
                alt="MARADOCA"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
                priority
              />
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-white/[0.05] rounded-2xl blur-xl" />
              <Card className="relative border-0 bg-white/[0.02] backdrop-blur-sm rounded-xl">
                <CardHeader>
                  <CardTitle className="text-lg font-medium text-white/90">
                    Connect
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    <li>
                      <a
                        href="https://www.maradoca.com"
                        className="flex items-center text-gray-400 hover:text-white transition-colors group"
                      >
                        <GlobeIcon className="mr-3 h-5 w-5 group-hover:text-[#ff5500]" />
                        <span className="font-light">maradoca.com</span>
                      </a>
                    </li>
                    {/* Other social links */}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Right Column - Main Content */}
          <div className="lg:col-span-8 space-y-12">
            {/* About Section with subtle background */}
            <div className="relative p-6 rounded-2xl">
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

            {/* Featured Sets with different background */}
            <div className="relative p-6 rounded-2xl">
              <div className="absolute inset-0 bg-gradient-to-r from-[#ff5500]/[0.02] to-transparent rounded-2xl" />
              <section className="relative space-y-6">
                <h2 className="text-2xl font-semibold text-white">
                  Featured Sets
                </h2>
                <div className="space-y-3">
                  {FEATURED_TRACKS.map((trackId) => (
                    <iframe
                      key={trackId}
                      width="100%"
                      height="20"
                      scrolling="no"
                      frameBorder="no"
                      allow="autoplay"
                      className="px-3"
                      src={`https://w.soundcloud.com/player/?url=https://api.soundcloud.com/tracks/${trackId}&color=%23ff5500&inverse=true&auto_play=false&show_user=true&show_playcount=false&show_artwork=false&buying=false&sharing=false&download=false`}
                    ></iframe>
                  ))}
                </div>
              </section>
            </div>

            {/* Performances Grid with unified background */}
            <div className="relative p-6 rounded-2xl">
              <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-white/[0.05] rounded-2xl" />
              <div className="relative space-y-8">
                {/* Upcoming Section */}
                <section>
                  <h2 className="text-xl font-medium text-white/90 mb-4">
                    Upcoming
                  </h2>
                  {upcomingGigs.length > 0 ? (
                    <ul className="space-y-3">
                      {upcomingGigs.map((gig, index) => (
                        <li
                          key={index}
                          className="group bg-white/[0.02] hover:bg-white/[0.05] p-3 rounded-lg transition-colors border border-white/5"
                        >
                          <time className="text-[#ff5500] text-sm font-medium block mb-1">
                            {new Date(gig.date).toLocaleDateString("de-DE")}
                          </time>
                          <div className="text-gray-200 group-hover:text-white transition-colors">
                            <span className="font-medium">{gig.venue}</span>
                            <span className="text-gray-400 ml-2">
                              {gig.location}
                            </span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <div className="bg-white/[0.02] p-4 rounded-lg border border-white/5">
                      <p className="text-gray-400 text-center">
                        New dates TBA
                        <span className="block text-sm mt-1">
                          Contact for bookings
                        </span>
                      </p>
                    </div>
                  )}
                </section>

                {/* Past Section - With show more functionality */}
                <section>
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-xl font-medium text-white/90">Past</h2>
                    {pastGigs.length > 6 && (
                      <button
                        onClick={() => setShowAllPast(!showAllPast)}
                        className="text-sm text-gray-400 hover:text-white transition-colors"
                      >
                        {showAllPast
                          ? "Show less"
                          : `Show all (${pastGigs.length})`}
                      </button>
                    )}
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {(showAllPast ? pastGigs : pastGigs.slice(0, 6)).map(
                      (gig, index) => (
                        <li
                          key={index}
                          className="group hover:bg-white/[0.02] p-2 rounded-lg transition-colors list-none"
                        >
                          <time className="text-gray-500 text-sm block mb-0.5">
                            {new Date(gig.date).toLocaleDateString("de-DE")}
                          </time>
                          <div className="text-gray-400 group-hover:text-gray-300 transition-colors">
                            <span className="font-medium">{gig.venue}</span>
                            <span className="text-gray-600 ml-2">
                              {gig.location}
                            </span>
                          </div>
                        </li>
                      )
                    )}
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
