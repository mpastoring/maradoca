import { cn } from "@/lib/utils";
import SocialLinks from "./SocialLinks";

type ContentProps = {
  orbitronClassName: string;
};

export default function Content({ orbitronClassName }: ContentProps) {
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
    </div>
  );
}
