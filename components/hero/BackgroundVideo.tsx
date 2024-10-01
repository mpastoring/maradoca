import { cn } from "@/lib/utils";
import "next-cloudinary/dist/cld-video-player.css";

const BackgroundVideo = () => {
  return (
    <>
      <DesktopVideo />
      <MobileVideo />
      <Overlay />
      <FlashEffect />
    </>
  );
};

const DesktopVideo = () => {
  return (
    <div className={cn("absolute inset-0 overflow-clip", "hidden sm:block")}>
      <VideoIframe videoId="2014_09_27_charles-bronson" />
    </div>
  );
};

const MobileVideo = () => {
  return (
    <div className={cn("absolute inset-0 overflow-clip", "sm:hidden")}>
      <VideoIframe videoId="2014_09_27_charles-bronson-vertical" />
    </div>
  );
};

const VideoIframe = ({ videoId }: { videoId: string }) => {
  const commonIframeProps = {
    allow: "autoplay; fullscreen; encrypted-media; picture-in-picture",
    className: cn(
      "h-full min-w-full object-cover",
      "sm:aspect-video sm:overflow-clip"
    ),
  };

  const commonPlayerParams =
    "player[autoplay]=true&player[autoplayMode]=on-scroll&player[muted]=true&player[loop]=true&player[controls]=false&player[hideContextMenu]=true&player[showLogo]=false";

  const baseUrl =
    "https://player.cloudinary.com/embed/?cloud_name=dgydlubmz&public_id=maradoca%2F";

  return (
    <iframe
      src={`${baseUrl}${videoId}&${commonPlayerParams}`}
      {...commonIframeProps}
    />
  );
};

const Overlay = () => {
  return <div className="absolute inset-0 bg-black opacity-25" />;
};

const FlashEffect = () => {
  return <div className="absolute inset-0 bg-white opacity-0 animate-flash" />;
};

export default BackgroundVideo;
