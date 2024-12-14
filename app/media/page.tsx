import MediaGallery from "@/components/media-gallery/MediaGallery";
import { Button } from "@/components/ui/button";
import { getMediaItems } from "@/lib/cloudinary";
import { HomeIcon } from "lucide-react";
import Link from "next/link";

export default async function MediaPage() {
  const mediaItems = await getMediaItems();

  return (
    <div className="min-h-screen bg-[#0B1120] pb-16 pt-24">
      <Link
        href="/"
        className="fixed left-4 top-4 z-50 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur-sm transition-all hover:bg-white/10 group md:left-8 md:top-8 md:h-12 md:w-12"
        aria-label="Back to Home"
      >
        <HomeIcon className="h-4 w-4 text-gray-400 transition-colors group-hover:text-[#ff5500] md:h-5 md:w-5" />
      </Link>

      <div className="container mx-auto px-4">
        <header className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl">
            Media Gallery
          </h1>
          <p className="text-lg text-gray-400">
            Explore moments from performances, artist pictures, and more
          </p>
          <div className="mt-6">
            <Link href="/press-kit">
              <Button
                variant="outline"
                size="lg"
                className="border-white bg-black/50 text-white transition-colors hover:bg-white hover:text-black"
              >
                View Press Kit
              </Button>
            </Link>
          </div>
        </header>
        <MediaGallery items={mediaItems} />
      </div>
    </div>
  );
}
