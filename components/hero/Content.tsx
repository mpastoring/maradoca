import { Button } from "@/components/ui/button";
import Link from "next/link";
import SocialLinks from "./SocialLinks";

type ContentProps = {
  heroData: HeroData | null;
};

type HeroData = {
  title: string;
  subtitle: string;
  socialLinks: Array<{
    platform: string;
    url: string;
    icon: string;
  }>;
};

export default function Content({ heroData }: ContentProps) {
  if (!heroData) return null;

  return (
    <div className="relative z-10 flex h-full flex-col items-center justify-center p-4 text-center">
      <h1 className="brand-title mb-4">{heroData.title}</h1>
      <p className="mb-8 max-w-md text-lg font-light sm:text-xl">
        {heroData.subtitle}
      </p>
      <SocialLinks links={heroData.socialLinks} />
      <div className="mt-6">
        <Link href="/press-kit" passHref>
          <Button
            variant="outline"
            size="sm"
            className="h-9 px-6 text-sm text-white border-white bg-black bg-opacity-50 hover:bg-white hover:text-black transition-colors"
          >
            View Press Kit
          </Button>
        </Link>
      </div>
    </div>
  );
}
