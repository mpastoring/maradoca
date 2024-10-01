"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  CalendarIcon,
  GlobeIcon,
  HeartIcon,
  InstagramIcon,
  MusicIcon,
  PlayIcon,
} from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

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
    "https://api-v2.soundcloud.com/users/68560096/tracks?client_id=yLfooVZK5emWPvRLZQlSuGTO8pof6z4t&limit=5&linked_partitioning=1&app_version=1726736933&app_locale=en"
  );
  return res.json();
}

export default function Component() {
  const [tracks, setTracks] = useState<Track[]>([]);

  useEffect(() => {
    getSoundCloudData().then((data) => setTracks(data.collection));
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <div className="container mx-auto px-4 py-12">
        <header className="mb-16 text-center">
          <h1 className="text-5xl font-bold mb-4 text-gray-900">DJ MARADOCA</h1>
          <p className="text-xl text-gray-600">
            Mandy Rauschner | Leipzig, Germany
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-semibold mb-4 text-gray-800">
                About the Artist
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                MARADOCA is an emerging talent in the electronic music scene,
                based in Leipzig, Germany. Her unique approach blends melodic,
                tropical, and cosmic elements into progressive journeys that
                deeply resonate with audiences. MARADOCA&apos;s music transcends
                mere sound, offering an emotional expedition through carefully
                crafted soundscapes.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-3 text-gray-800">
                Signature Sounds
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Melodic House",
                  "Techno",
                  "Progressive",
                  "Afrohouse",
                  "Trance",
                ].map((genre) => (
                  <Badge
                    key={genre}
                    variant="secondary"
                    className="bg-gray-200 text-gray-700 hover:bg-gray-300"
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
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-300 hover:scale-105"
              style={{ objectPosition: "100% 35%" }}
            />
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-semibold mb-6 text-center text-gray-800">
            Featured Playlist
          </h2>
          <div className="bg-white rounded-lg p-4 shadow-md">
            <iframe
              width="100%"
              height="300"
              scrolling="no"
              frameBorder="no"
              allow="autoplay"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1799944080&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
            ></iframe>
            <div className="text-xs text-gray-500 mt-2">
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
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Card className="bg-white shadow-md">
            <CardHeader>
              <CardTitle className="flex items-center text-gray-800">
                <MusicIcon className="mr-2" />
                Top Tracks
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4 text-gray-600">
                {tracks.map((track) => (
                  <li key={track.id} className="flex flex-col">
                    <a
                      href={track.permalink_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium hover:text-gray-900 transition-colors"
                    >
                      {track.title}
                    </a>
                    <div className="flex items-center text-sm text-gray-500 mt-1">
                      <PlayIcon className="h-4 w-4 mr-1" />
                      <span className="mr-3">
                        {track.playback_count.toLocaleString()}
                      </span>
                      <HeartIcon className="h-4 w-4 mr-1" />
                      <span>{track.likes_count.toLocaleString()}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-md">
            <CardHeader>
              <CardTitle className="flex items-center text-gray-800">
                <CalendarIcon className="mr-2" />
                Upcoming Gigs
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  <span>
                    <strong>14.08.2024:</strong> Insel der Jugend, Magdeburg
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-md">
            <CardHeader>
              <CardTitle className="flex items-center text-gray-800">
                <GlobeIcon className="mr-2" />
                Connect
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-600">
                <li>
                  <a
                    href="https://www.changeandcreate.de"
                    className="flex items-center hover:text-gray-900 transition-colors"
                  >
                    <GlobeIcon className="mr-2 h-4 w-4" />
                    changeandcreate.de
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/change.and.create"
                    className="flex items-center hover:text-gray-900 transition-colors"
                  >
                    <InstagramIcon className="mr-2 h-4 w-4" />
                    @change.and.create
                  </a>
                </li>
                <li>
                  <a
                    href="https://soundcloud.com/maradoca"
                    className="flex items-center hover:text-gray-900 transition-colors"
                  >
                    <MusicIcon className="mr-2 h-4 w-4" />
                    soundcloud.com/maradoca
                  </a>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="bg-white rounded-lg p-8 shadow-md">
          <h2 className="text-3xl font-semibold mb-6 text-gray-800">
            Artist Biography
          </h2>
          <div className="prose prose-lg max-w-none text-gray-600">
            <p>
              Mandy Rauschner, known professionally as MARADOCA, is a
              multifaceted artist who brings a unique perspective to the
              electronic music scene. With a Master&apos;s degree in Molecular
              Medicine and a pending PhD in Cancer Research, MARADOCA infuses
              her scientific background into her musical creations, resulting in
              a distinctive and analytical approach to sound.
            </p>
            <p>
              As the founder of Change & Create, MARADOCA goes beyond creating
              music; she crafts immersive experiences. Her sets are meticulously
              curated journeys that transcend traditional genre boundaries,
              inviting listeners to explore the depths of their emotions and
              break free from conventional limitations.
            </p>
            <p>
              MARADOCA&apos;s philosophy is deeply rooted in the holistic
              connection between mind and body. Whether she&apos;s headlining a
              vibrant festival, setting the atmosphere in an intimate nightclub,
              or guiding participants through a transformative wellness retreat,
              her mission remains consistent: to harness the power of music as a
              catalyst for emotional exploration, personal growth, and profound
              human connection.
            </p>
            <p>
              Blending melodic house, techno, and progressive elements with
              tropical and cosmic influences, MARADOCA doesn&apos;t simply play
              tracks—she weaves narratives. Each set is a carefully constructed
              progression that builds and evolves, taking the audience on a
              sonic journey that resonates long after the final note fades away.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
