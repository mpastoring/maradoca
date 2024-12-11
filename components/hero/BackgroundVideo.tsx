import { cn } from "@/lib/utils";
import { AdvancedVideo } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen";
import { fill } from "@cloudinary/url-gen/actions/resize";
import { Volume2, VolumeX } from "lucide-react";
import { memo } from "react";

const cld = new Cloudinary({
  cloud: {
    cloudName: "dgydlubmz",
  },
});

type VideoProps = {
  isMuted: boolean;
  onToggleMute: () => void;
  desktopVideoId?: string;
  mobileVideoId?: string;
};

// Memoized Desktop Video Component
const MemoizedDesktopVideo = memo(function DesktopVideo({
  videoId,
}: {
  videoId?: string;
}) {
  if (!videoId) return null;

  const video = cld.video(videoId).resize(fill());

  return (
    <div className={cn("absolute inset-0 overflow-clip", "hidden sm:block")}>
      <AdvancedVideo
        cldVid={video}
        autoPlay
        muted
        loop
        playsInline
        className={cn(
          "h-full min-w-full object-cover",
          "sm:aspect-video sm:overflow-clip"
        )}
      />
    </div>
  );
});

// Memoized Mobile Video Component
const MemoizedMobileVideo = memo(function MobileVideo({
  videoId,
}: {
  videoId?: string;
}) {
  if (!videoId) return null;

  const video = cld.video(videoId).resize(fill());

  return (
    <div className={cn("absolute inset-0 overflow-clip", "sm:hidden")}>
      <AdvancedVideo
        cldVid={video}
        autoPlay
        muted
        loop
        playsInline
        className={cn(
          "h-full min-w-full object-cover",
          "sm:aspect-video sm:overflow-clip"
        )}
      />
    </div>
  );
});

const BackgroundVideo = ({
  isMuted,
  onToggleMute,
  desktopVideoId,
  mobileVideoId,
}: VideoProps) => {
  return (
    <>
      <MemoizedDesktopVideo videoId={desktopVideoId} />
      <MemoizedMobileVideo videoId={mobileVideoId} />
      <Overlay />
      <UnmuteButton isMuted={isMuted} onToggle={onToggleMute} />
      {/* Add a hidden video element to control mute state */}
      <video
        id="muteController"
        muted={isMuted}
        className="hidden"
        onVolumeChange={(e) => {
          // Sync mute state with all videos
          const videos = document.querySelectorAll("video");
          videos.forEach((v) => (v.muted = isMuted));
        }}
      />
    </>
  );
};

const Overlay = memo(function Overlay() {
  return <div className="absolute inset-0 bg-black opacity-25" />;
});

const UnmuteButton = memo(function UnmuteButton({
  isMuted,
  onToggle,
}: {
  isMuted: boolean;
  onToggle: () => void;
}) {
  return (
    <button
      onClick={onToggle}
      className="absolute bottom-4 right-4 z-20 flex items-center gap-2 rounded-full bg-black/50 px-4 py-2 text-sm text-white backdrop-blur-sm transition-all hover:bg-black/70"
    >
      {isMuted ? (
        <>
          <VolumeX className="h-4 w-4" />
          <span className="hidden sm:inline">Press Space to Unmute</span>
        </>
      ) : (
        <>
          <Volume2 className="h-4 w-4" />
          <span className="hidden sm:inline">Press Space to Mute</span>
        </>
      )}
    </button>
  );
});

export default BackgroundVideo;
