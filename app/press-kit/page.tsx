import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  CalendarIcon,
  GlobeIcon,
  InstagramIcon,
  MusicIcon,
} from "lucide-react";
import Image from "next/image";

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
              <div className="space-y-2">
                {FEATURED_TRACKS.map((trackId) => (
                  <div key={trackId}>
                    <iframe
                      width="100%"
                      height="28"
                      scrolling="no"
                      frameBorder="no"
                      allow="autoplay"
                      className="bg-white/5 p-1 rounded"
                      src={`https://w.soundcloud.com/player/?url=https://api.soundcloud.com/tracks/${trackId}&color=%23ff5500&inverse=true&auto_play=false&show_user=true&show_playcount=false&show_artwork=false&buying=false&sharing=false&download=false`}
                    ></iframe>
                  </div>
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
      </div>
    </div>
  );
}
