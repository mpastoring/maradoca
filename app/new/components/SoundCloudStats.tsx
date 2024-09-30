"use client";

import { Track } from "../types";

type SoundCloudStatsProps = {
  onPlay: (track: Track) => void;
  tracks: Track[];
};

export default function SoundCloudStats({
  onPlay,
  tracks,
}: SoundCloudStatsProps) {
  const totalPlays = tracks.reduce(
    (sum, track) => sum + track.playback_count,
    0
  );
  const totalLikes = tracks.reduce((sum, track) => sum + track.likes_count, 0);

  return (
    <section id="soundcloud-stats" className="mb-20">
      <h3 className="text-3xl font-semibold mb-6 text-center">
        SoundCloud Vibes
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
          <h4 className="text-xl font-semibold mb-4">Cosmic Reach</h4>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-400">Total Plays</p>
              <p className="text-2xl font-bold">{totalPlays}</p>
            </div>
            <div>
              <p className="text-sm text-gray-400">Total Likes</p>
              <p className="text-2xl font-bold">{totalLikes}</p>
            </div>
            <div>
              <p className="text-sm text-gray-400">Total Tracks</p>
              <p className="text-2xl font-bold">{tracks.length}</p>
            </div>
          </div>
        </div>
        <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
          <h4 className="text-xl font-semibold mb-4">Latest Journeys</h4>
          {tracks.map((track) => (
            <div key={track.id} className="flex items-center mb-4 last:mb-0">
              <div className="flex-grow">
                <h5 className="font-semibold">{track.title}</h5>
                <p className="text-sm text-gray-400">
                  {track.playback_count} plays • {track.likes_count} likes
                </p>
              </div>
              <button
                onClick={() => {
                  console.log("track", track);
                  onPlay(track);
                }}
                className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-3 rounded-full transition-colors text-xs"
              >
                Play
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
