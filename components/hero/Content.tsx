import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import SocialLinks from "./SocialLinks";

type ContentProps = {
  orbitronClassName: string;
  toggleMute: () => void;
  isMuted: boolean;
};

export default function Content({
  orbitronClassName,
  toggleMute,
  isMuted,
}: ContentProps) {
  return (
    <div className="relative z-10 flex h-full flex-col items-center justify-center p-4 text-center">
      <h1
        className={cn(
          "mb-4 text-6xl font-bold tracking-wider sm:text-7xl lg:text-8xl",
          orbitronClassName
        )}
      >
        MARADOCA
      </h1>
      <p className="mb-8 max-w-md text-lg font-light sm:text-xl">
        Embark on a journey of freedom through melodic, tropical, and cosmic
        sounds.
      </p>
      <SocialLinks />
      <Button onClick={toggleMute} className="absolute bottom-4 right-4 z-10">
        {isMuted ? "Unmute" : "Mute"}
      </Button>
    </div>
  );
}
