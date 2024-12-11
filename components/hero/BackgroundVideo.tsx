import { cn } from "@/lib/utils";
import { AdvancedVideo } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen";
import { fill } from "@cloudinary/url-gen/actions/resize";
import { Volume2, VolumeX } from "lucide-react";
import { useState } from "react";

const cld = new Cloudinary({
  cloud: {
    cloudName: "dgydlubmz",
  },
});

const BackgroundVideo = () => {
  const [isMuted, setIsMuted] = useState(true);

  return (
    <>
      <DesktopVideo isMuted={isMuted} />
      <MobileVideo isMuted={isMuted} />
      <Overlay />
      <UnmuteButton isMuted={isMuted} onToggle={() => setIsMuted(!isMuted)} />
    </>
  );
};

type VideoProps = {
  isMuted: boolean;
};

const DesktopVideo = ({ isMuted }: VideoProps) => {
  const video = cld
    .video("maradoca/2014_09_27_charles-bronson_2e10a1")
    .resize(fill());

  return (
    <div className={cn("absolute inset-0 overflow-clip", "hidden sm:block")}>
      <AdvancedVideo
        cldVid={video}
        autoPlay
        muted={isMuted}
        loop
        className={cn(
          "h-full min-w-full object-cover",
          "sm:aspect-video sm:overflow-clip"
        )}
      />
    </div>
  );
};

const MobileVideo = ({ isMuted }: VideoProps) => {
  const video = cld
    .video("maradoca/2014_09_27_charles-bronson-vertical")
    .resize(fill());

  return (
    <div className={cn("absolute inset-0 overflow-clip", "sm:hidden")}>
      <AdvancedVideo
        cldVid={video}
        autoPlay
        muted={isMuted}
        loop
        className={cn(
          "h-full min-w-full object-cover",
          "sm:aspect-video sm:overflow-clip"
        )}
      />
    </div>
  );
};

const Overlay = () => {
  return <div className="absolute inset-0 bg-black opacity-25" />;
};

type UnmuteButtonProps = {
  isMuted: boolean;
  onToggle: () => void;
};

const UnmuteButton = ({ isMuted, onToggle }: UnmuteButtonProps) => {
  return (
    <button
      onClick={onToggle}
      className={cn(
        "absolute bottom-4 right-4 z-20",
        "rounded-full p-2",
        "bg-black/50 text-white",
        "hover:bg-black/70 transition-colors",
        "focus:outline-none focus:ring-2 focus:ring-white/50"
      )}
      aria-label={isMuted ? "Unmute video" : "Mute video"}
    >
      {isMuted ? (
        <VolumeX className="h-6 w-6" />
      ) : (
        <Volume2 className="h-6 w-6" />
      )}
    </button>
  );
};

export default BackgroundVideo;
