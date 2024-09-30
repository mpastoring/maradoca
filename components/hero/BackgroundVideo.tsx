import { CldVideoPlayer } from "next-cloudinary";
import "next-cloudinary/dist/cld-video-player.css";

const BackgroundVideo = () => {
  return (
    <div className="absolute h-full bg-black opacity-25 top-0 left-0 w-full">
      <CldVideoPlayer
        id="hero-video"
        width="1920"
        height="1080"
        src="https://res.cloudinary.com/dgydlubmz/video/upload/v1727725886/maradoca/2014_09_27_charles-bronson.mp4"
        controls={false}
        muted
        loop
        autoplay
        playsinline
      />
    </div>
  );
};

export default BackgroundVideo;
