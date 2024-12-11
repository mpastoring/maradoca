import { cn } from "@/lib/utils";
import { AdvancedVideo } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen";
import { fill } from "@cloudinary/url-gen/actions/resize";

const cld = new Cloudinary({
  cloud: {
    cloudName: "dgydlubmz",
  },
});

const BackgroundVideo = () => {
  return (
    <>
      <DesktopVideo />
      <MobileVideo />
      <Overlay />
    </>
  );
};

const DesktopVideo = () => {
  const video = cld
    .video("maradoca/2014_09_27_charles-bronson_2e10a1")
    .resize(fill());

  return (
    <div className={cn("absolute inset-0 overflow-clip", "hidden sm:block")}>
      <AdvancedVideo
        cldVid={video}
        autoPlay
        muted
        loop
        className={cn(
          "h-full min-w-full object-cover",
          "sm:aspect-video sm:overflow-clip"
        )}
      />
    </div>
  );
};

const MobileVideo = () => {
  const video = cld
    .video("maradoca/2014_09_27_charles-bronson-vertical")
    .resize(fill());

  return (
    <div className={cn("absolute inset-0 overflow-clip", "sm:hidden")}>
      <AdvancedVideo
        cldVid={video}
        autoPlay
        muted
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

export default BackgroundVideo;
