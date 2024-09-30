import { CldVideoPlayer } from "next-cloudinary";
import "next-cloudinary/dist/cld-video-player.css";

const BackgroundVideo = () => {
  return (
    <>
      <div className="hidden sm:block absolute inset-0 overflow-hidden">
        <CldVideoPlayer
          id="hero-video-desktop"
          width="1920"
          height="1080"
          src="maradoca/2014_09_27_charles-bronson.mp4"
          controls={false}
          muted
          loop
          autoplay
          playsinline
        />
      </div>
      <div className="sm:hidden absolute inset-0 overflow-hidden">
        <CldVideoPlayer
          id="hero-video-mobile"
          width="1080"
          height="1920"
          src="maradoca/2014_09_27_charles-bronson-vertical.mp4"
          controls={false}
          muted
          loop
          autoplay
          playsinline
        />
      </div>
      <div className="absolute inset-0 bg-black opacity-25" />
      <div className="absolute inset-0 bg-white opacity-0 animate-flash" />
    </>
  );
};

export default BackgroundVideo;
