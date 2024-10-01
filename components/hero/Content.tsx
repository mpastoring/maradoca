import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import SocialLinks from "./SocialLinks";

type ContentProps = {
  orbitronClassName: string;
};

export default function Content({ orbitronClassName }: ContentProps) {
  return (
    <div className="relative z-10 flex h-full flex-col items-center justify-center p-4 text-center">
      <h1
        className={cn(
          "mb-4 text-5xl font-bold tracking-wider sm:text-6xl md:text-7xl lg:text-8xl",
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
      <div className="mt-8">
        <Link href="/press-kit" passHref>
          <Button
            variant="outline"
            size="lg"
            className="text-white border-white bg-black bg-opacity-50 hover:bg-white hover:text-black transition-colors"
          >
            View Press Kit
          </Button>
        </Link>
      </div>
    </div>
  );
}
