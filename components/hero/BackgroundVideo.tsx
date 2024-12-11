import { cn } from "@/lib/utils";
import { AdvancedVideo } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen";
import { fill } from "@cloudinary/url-gen/actions/resize";
import { Volume2, VolumeX } from "lucide-react";

const cld = new Cloudinary({
  cloud: {
    cloudName: "dgydlubmz",
  },
});

const BackgroundVideo = ({ isMuted, onToggleMute }: VideoProps) => {
  return (
    <>
      <DesktopVideo isMuted={isMuted} onToggleMute={onToggleMute} />
      <MobileVideo isMuted={isMuted} onToggleMute={onToggleMute} />
      <Overlay />
      <UnmuteButton isMuted={isMuted} onToggle={onToggleMute} />
    </>
  );
};

type VideoProps = {
  isMuted: boolean;
  onToggleMute: () => void;
};

const DesktopVideo = ({ isMuted, onToggleMute }: VideoProps) => {
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
        playsInline
        className={cn(
          "h-full min-w-full object-cover",
          "sm:aspect-video sm:overflow-clip"
        )}
      />
    </div>
  );
};

const MobileVideo = ({ isMuted, onToggleMute }: VideoProps) => {
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
        playsInline
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

const UnmuteButton = ({
  isMuted,
  onToggle,
}: {
  isMuted: boolean;
  onToggle: () => void;
}) => (
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

export default BackgroundVideo;
