"use client";

import { ReactNode, useEffect, useRef, useState } from "react";
import { Track } from "../types";
import SoundCloudStats from "./SoundCloudStats";

declare global {
  interface Window {
    SC: {
      Widget: {
        new (iframe: HTMLIFrameElement): any;
        Events: { READY: string; PLAY: string; PAUSE: string; FINISH: string };
      };
    };
  }
}

type MusicControllerWrapperProps = {
  children: ReactNode;
  tracks: Track[];
};

export default function MusicControllerWrapper({
  children,
  tracks,
}: MusicControllerWrapperProps) {
  const [currentTrack, setCurrentTrack] = useState<Track | null>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const widgetRef = useRef<any>(null);

  // Use a default SoundCloud URL (e.g., your artist profile or a specific track)
  const defaultSoundCloudUrl = "https://soundcloud.com/maradoca";

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://w.soundcloud.com/player/api.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      if (iframeRef.current) {
        widgetRef.current = new window.SC.Widget(iframeRef.current);
        widgetRef.current.bind(window.SC.Widget.Events.READY, () => {
          console.log("SoundCloud Widget is ready");
        });
      }
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handlePlay = (track: Track) => {
    setCurrentTrack(track);
    console.log("currentTrack", currentTrack);
    if (widgetRef.current) {
      widgetRef.current.load(track.permalink_url, {
        auto_play: true,
      });
    }
  };

  return (
    <>
      <SoundCloudStats onPlay={handlePlay} tracks={tracks} />
      {children}
      <div className="fixed bottom-0 left-0 w-full">
        <iframe
          ref={iframeRef}
          width="100%"
          height="166"
          scrolling="no"
          frameBorder="no"
          allow="autoplay"
          src={`https://w.soundcloud.com/player/?url=${currentTrack?.permalink_url || defaultSoundCloudUrl}&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true`}
        ></iframe>
      </div>
    </>
  );
}
