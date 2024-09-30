import { forwardRef } from 'react';

type BackgroundVideoProps = {
  isLoaded: boolean;
  isMuted: boolean;
};

const BackgroundVideo = forwardRef<HTMLVideoElement, BackgroundVideoProps>(
  ({ isLoaded, isMuted }, ref) => {
    if (!isLoaded) return null;

    return (
      <video
        ref={ref}
        autoPlay
        loop
        muted={isMuted}
        playsInline
        className="absolute inset-0 h-full w-full object-cover opacity-70"
      >
        <source src="/hero-video.MP4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    );
  }
);

BackgroundVideo.displayName = 'BackgroundVideo';

export default BackgroundVideo;
