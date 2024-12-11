import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  CalendarIcon,
  GlobeIcon,
  InstagramIcon,
  MusicIcon,
} from "lucide-react";
import dynamic from "next/dynamic";
import Image from "next/image";

const DynamicMap = dynamic(() => import("@/components/PerformanceMap"), {
  ssr: false,
});

type SoundCloudTrack = {
  id: number;
  title: string;
  permalink_url: string;
  playback_count: number;
  likes_count: number;
  reposts_count: number;
  created_at: string;
};

export type Performance = {
  date: string;
  venue: string;
  location: string;
  isPast: boolean;
};

function cleanDescription(description: string): string {
  if (!description) return "No description available";

  const excludePatterns = [/Track:?/i, /Tracks:?/i, /TRACK IDs:?/i];
  let cleanedDescription = description;

  for (const pattern of excludePatterns) {
    const match = cleanedDescription.match(pattern);
    if (match && match.index !== undefined) {
      if (pattern.source.includes("TRACK IDs") || match[0].charAt(0) === "T") {
        cleanedDescription = cleanedDescription
          .substring(0, match.index)
          .trim();
      }
    }
  }

  return cleanedDescription || "No description available";
}

// Replace the fetch-based approach with direct track URLs
const FEATURED_TRACKS = [
  "1954887755", // Soultechno @ Institut für Zukunft (IFZ) Leipzig I equalize x fem*vak
  "1684032357", // Progressive & Melodic Techno: An emotional journey to freedom! (Luises Garten Teil II)
  "1825612533", // [HOT SHOT SERIES 118] - Podcast by MARADOCA [M.D.H.]
  "1773420381", // Obenmusik Podcast 122 By Maradoca
];

export default async function Component() {
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
    { date: "2024-10-30", venue: "tba <3", location: "Leipzig", isPast: false },
    {
      date: "2024-10-31",
      venue: "Argentina Tour",
      location: "Argentina",
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

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <div className="container mx-auto px-4 py-12">
        <header className="mb-16 text-center">
          <h1 className="text-5xl font-bold mb-4 text-gray-100">MARADOCA</h1>
          {/* <p className="text-xl text-gray-300">📍Leipzig | GERMANY</p>
          <p className="text-lg text-gray-300 mt-2">
            Tropical I Cosmic I Deep I Progressive &lt;3
          </p>
          <p className="text-lg text-gray-300 mt-2">
            Music for Body, Mind & Soul
          </p>
          <p className="text-lg text-gray-300 mt-2">
            Join me on my journey to FREEDOM!
          </p> */}
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-semibold mb-4 text-gray-100">
                About the Artist
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                MARADOCA, a rising artist based in Leipzig, Germany, delivers a
                captivating blend of afro/melodic house, cosmic/psy elements,
                and driving Soultechno. Her sets take you on a progressive
                journey, balancing tropical daytime vibes with the deep,
                trance-like energy of the night. With a seamless flow of
                emotional depth and epic vocals, MARADOCA&apos;s music
                isn&apos;t just about tracks—it&apos;s a transformative
                experience.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-3 text-gray-100">
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
                    className="bg-gray-700 text-gray-200 hover:bg-gray-600"
                  >
                    {genre}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/maradoca-portrait.jpg"
              alt="DJ MARADOCA performing"
              fill
              className="transition-transform duration-300 hover:scale-105 object-cover"
              style={{ objectPosition: "100% 35%" }}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Card className="bg-gray-800 shadow-md md:col-span-2 row-span-2">
            <CardHeader>
              <CardTitle className="flex items-center text-gray-100">
                <MusicIcon className="mr-2" />
                Featured Sets
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-1">
                {FEATURED_TRACKS.map((trackId) => (
                  <iframe
                    key={trackId}
                    width="100%"
                    height="166"
                    scrolling="no"
                    frameBorder="no"
                    allow="autoplay"
                    src={`https://w.soundcloud.com/player/?url=https://api.soundcloud.com/tracks/${trackId}&color=%237c6c74&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=false`}
                  ></iframe>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-800 shadow-md">
            <CardHeader>
              <CardTitle className="flex items-center text-gray-100">
                <CalendarIcon className="mr-2" />
                Upcoming Gigs
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center">
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  <span>
                    <strong>27.09.2024:</strong> Charles Bronson, Halle | L300
                  </span>
                </li>
                <li className="flex items-center">
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  <span>
                    <strong>04.10.2024:</strong> Elsterartig, Leipzig
                  </span>
                </li>
                <li className="flex items-center">
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  <span>
                    <strong>30.10.2024:</strong> tba &lt;3, Leipzig
                  </span>
                </li>
                <li className="flex items-center">
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  <span>
                    <strong>31.10.-17.12.2024:</strong> Argentina
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-gray-800 shadow-md">
            <CardHeader>
              <CardTitle className="flex items-center text-gray-100">
                <GlobeIcon className="mr-2" />
                Connect
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <a
                    href="https://www.maradoca.com"
                    className="flex items-center hover:text-gray-100 transition-colors"
                  >
                    <GlobeIcon className="mr-2 h-4 w-4" />
                    maradoca.com
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/maradoca"
                    className="flex items-center hover:text-gray-100 transition-colors"
                  >
                    <InstagramIcon className="mr-2 h-4 w-4" />
                    @maradoca
                  </a>
                </li>
                <li>
                  <a
                    href="https://soundcloud.com/maradoca"
                    className="flex items-center hover:text-gray-100 transition-colors"
                  >
                    <MusicIcon className="mr-2 h-4 w-4" />
                    soundcloud.com/maradoca
                  </a>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* <div className="mb-16">
          <h2 className="text-3xl font-semibold mb-6 text-gray-100">
            Performance Map
          </h2>
          <div className="h-[400px] bg-gray-800 rounded-lg overflow-hidden">
            <Map performances={performances} />
          </div>
        </div> */}

        {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-8"> */}
        <div className="bg-gray-800 rounded-lg p-8 shadow-md max-h-[600px] overflow-y-auto">
          <h2 className="text-3xl font-semibold mb-6 text-gray-100">
            Artist Biography
          </h2>
          <div className="prose prose-lg max-w-none text-gray-300">
            <p>
              MARADOCA, a rising artist based in Leipzig, Germany, delivers a
              captivating blend of afro/melodic house, cosmic/psy elements, and
              driving Soultechno. Her sets take you on a progressive journey,
              balancing tropical daytime vibes with the deep, trance-like energy
              of the night. With a seamless flow of emotional depth and epic
              vocals, MARADOCA&apos;s music isn&apos;t just about
              tracks—it&apos;s a transformative experience.
            </p>
            <p>
              From conscious dance events to nightclubs, her &quot;Ecstatic
              Rave&quot; creates a powerful connection on the dancefloor,
              uniting people to feel, move, and break free from genre
              boundaries. Whether it&apos;s an intimate retreat or a late-night
              it&apos;s an intimate retreat or a late-night festival, MARADOCA
              brings a sound that&apos;s unforgettable.
            </p>
            <p>
              MARADOCA&apos;s philosophy is deeply rooted in the holistic
              connection between mind and body. Her mission is to harness the
              power of music as a catalyst for emotional exploration, personal
              growth, and profound human connection.
            </p>
            <p>
              Join MARADOCA on her journey to FREEDOM! Her music is crafted for
              Body, Mind & Soul, inviting listeners to explore the depths of
              their emotions and break free from conventional limitations.
            </p>
          </div>
        </div>

        {/* <div className="bg-gray-800 rounded-lg p-8 shadow-md h-[600px] flex flex-col">
            <h2 className="text-3xl font-semibold mb-6 text-center text-gray-100">
              Past Performances
            </h2>
            <div className="flex-grow overflow-y-auto">
              <ul className="space-y-2 text-gray-300">
                <li>
                  <s>14.08.2024 Insel der Jugend, Magdeburg</s>
                </li>
                <li>
                  <s>10.08.2024 Wilde Möhre I FLINTA* DJ Workshop Equalize</s>
                </li>
                <li>
                  <s>02.08.2024 NatureOne Camp</s>
                </li>
                <li>
                  <s>26.07.2024 H12KK Festival</s>
                </li>
                <li>
                  <s>10.07.2024 Ilses Erika, Leipzig</s>
                </li>
                <li>
                  <s>25.05.2024 Lisbeth Lauscht, Leipzig</s>
                </li>
                <li>
                  <s>03.05.2024 Charles Bronson, Halle (Saale) I L300</s>
                </li>
                <li>
                  <s>19.04.2024 The GardenLabs, Portugal</s>
                </li>
                <li>
                  <s>08.03.2024 Kulturlounge, Leipzig I Equalize</s>
                </li>
                <li>
                  <s>
                    02.03.2024 Trash, Gera I Melodienschmiede Contest (Platz2)
                  </s>
                </li>
                <li>
                  <s>24.02.2024 NousNous, Leipzig</s>
                </li>
                <li>
                  <s>12.01.2024 NousNous, Leipzig</s>
                </li>
                <li>
                  <s>28.10.2023 Gewächshäuser, Magdeburg</s>
                </li>
                <li>
                  <s>27.10.2023 Garage Ost, Leipzig</s>
                </li>
                <li>
                  <s>21.10.2023 Station Endlos, Halle (private)</s>
                </li>
                <li>
                  <s>14.10.2023 Tramuntana Flow, Mallorca (Retreat)</s>
                </li>
                <li>
                  <s>01.10.2023 Luises Garten, Magdeburg</s>
                </li>
                <li>
                  <s>13.09.2023 Rooftop Party@ Villa Palma, Sardinia</s>
                </li>
                <li>
                  <s>06.09.2023 Rooftop Party@ Villa Palma, Sardinia</s>
                </li>
                <li>
                  <s>28.07.2023 H12KK Festival</s>
                </li>
                <li>
                  <s>17.05.2023 Trash, Gera</s>
                </li>
              </ul>
            </div>
          </div> */}
        {/* 
<div className="mb-16">
          <h2 className="text-3xl font-semibold mb-6 text-center text-gray-100">
            Featured Playlist
          </h2>
          <div className="bg-gray-800 rounded-lg p-4 shadow-md">
            <iframe
              width="100%"
              height="300"
              scrolling="no"
              frameBorder="no"
              allow="autoplay"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1799944080&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
            ></iframe>
            <div className="text-xs text-gray-400 mt-2">
              <a
                href="https://soundcloud.com/maradoca"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                MARADOCA
              </a>{" "}
              ·
              <a
                href="https://soundcloud.com/maradoca/sets/progressive-i-melodic-house"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Progressive I Melodic House & Techno (~125bpm)
              </a>
            </div>
          </div>
        </div> */}
      </div>
    </div>
    // </div>
  );
}
