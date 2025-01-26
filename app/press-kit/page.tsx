import { SoundCloudEmbed } from "@/components/embeds/SoundCloudEmbed";
import { AboutSection } from "@/components/press-kit/AboutSection";
import { ConnectCard } from "@/components/press-kit/ConnectCard";
import { PressKitHeader } from "@/components/press-kit/Header";
import { PerformanceList } from "@/components/press-kit/PerformanceList";
import { PressPhotos } from "@/components/press-kit/PressPhotos";
import { Button } from "@/components/ui/button";
import { getPressKitImages } from "@/lib/cloudinary";
import { sortPerformances } from "@/lib/date-utils";
import { pressKitQuery } from "@/lib/sanity.queries";
import { sanityFetch, SanityLive } from "@/sanity/lib/live";
import { Track } from "@/types/press-kit";
import { ArrowRight, HomeIcon } from "lucide-react";
import Link from "next/link";

export default async function PressKitPage() {
  const pressKitImages = await getPressKitImages();
  const { data: pressKitData } = await sanityFetch({ query: pressKitQuery });

  // Helper functions for image filtering
  const hasMainPortraitTag = (image: { tags: string[] }) =>
    image.tags.includes("main-portrait");

  const getMainPortrait = (images: typeof pressKitImages) => {
    if (!images.length) throw new Error("No press kit images available");
    return images.find(hasMainPortraitTag) ?? images[images.length - 1];
  };

  const getAdditionalPhotos = (images: typeof pressKitImages) =>
    images.filter((image) => !hasMainPortraitTag(image));

  // Get main portrait with fallback to last image
  const mainPortrait = getMainPortrait(pressKitImages);

  // Get all photos except the main portrait
  const additionalPhotos = getAdditionalPhotos(pressKitImages);

  const { upcomingGigs, pastGigs } = sortPerformances(
    pressKitData.performances
  );

  return (
    <>
      <SanityLive />
      <div className="min-h-screen bg-[#0B1120] text-gray-100" role="main">
        {/* Floating Back Button with improved accessibility */}
        <Link
          href="/"
          className="fixed top-4 left-4 md:top-8 md:left-8 z-50 flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all group focus:outline-none focus:ring-2 focus:ring-[#ff5500] focus:ring-offset-2 focus:ring-offset-[#0B1120]"
          aria-label="Back to Home"
        >
          <HomeIcon
            className="h-4 w-4 md:h-5 md:w-5 text-gray-400 group-hover:text-[#ff5500] transition-colors"
            aria-hidden="true"
          />
        </Link>

        <div className="container mx-auto px-3 md:px-4 py-8 md:py-12 max-w-7xl">
          <PressKitHeader
            title="MARADOCA"
            subtitle="Electronic Music Artist & DJ"
            location="Leipzig, Germany"
          />

          {/* Main Content Grid with semantic structure */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12">
            {/* Left Column */}
            <aside className="lg:col-span-4 space-y-8">
              <PressPhotos
                mainPortrait={mainPortrait}
                additionalPhotos={additionalPhotos}
              />
              <ConnectCard socialLinks={pressKitData.socialLinks} />
            </aside>

            {/* Right Column */}
            <main className="lg:col-span-8 space-y-12">
              <AboutSection
                description={pressKitData.about.description}
                genres={pressKitData.about.genres}
              />

              <section
                className="relative p-4 md:p-6 rounded-2xl"
                aria-labelledby="performances-heading"
              >
                <div
                  className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-white/[0.05] rounded-2xl"
                  aria-hidden="true"
                />
                <div className="relative space-y-8">
                  <h2
                    id="performances-heading"
                    className="text-2xl font-semibold text-white mb-8"
                  >
                    Performances
                  </h2>

                  <PerformanceList
                    upcomingGigs={upcomingGigs}
                    pastGigs={pastGigs}
                    contactEmail={pressKitData.socialLinks.email}
                  />

                  {/* Featured Sets with lazy loading */}
                  <section
                    className="pt-8 border-t border-white/10"
                    aria-labelledby="featured-sets-heading"
                  >
                    <h3
                      id="featured-sets-heading"
                      className="text-xl font-medium text-white/90 mb-6"
                    >
                      Featured Sets
                    </h3>
                    <div className="space-y-3 md:space-y-4 bg-white/[0.02] rounded-xl p-4">
                      {pressKitData.featuredTracks.map((track: Track) => (
                        <SoundCloudEmbed
                          key={track.trackId}
                          trackId={track.trackId}
                          title={track.title}
                        />
                      ))}
                    </div>
                  </section>
                </div>
              </section>
            </main>
          </div>
        </div>

        {/* Media Gallery CTA */}
        <section
          className="border-t border-white/10 bg-white/5 py-16"
          aria-labelledby="media-gallery-heading"
        >
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h2
                id="media-gallery-heading"
                className="mb-4 text-3xl font-bold text-white"
              >
                Media Gallery
              </h2>
              <p className="mb-8 text-gray-400">
                Looking for more photos and videos? Check out our media gallery.
              </p>
              <Link
                href="/media"
                className="inline-block focus:outline-none focus:ring-2 focus:ring-[#ff5500] focus:ring-offset-2 focus:ring-offset-[#0B1120]"
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="group border-white/20 bg-white/5 text-white hover:bg-white hover:text-black"
                >
                  View Media Gallery
                  <ArrowRight
                    className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
