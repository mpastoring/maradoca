"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";
import { PressKitImage } from "@/types/press-kit";
import { Download, ImageIcon } from "lucide-react";
import { CldImage } from "next-cloudinary";
import { useState } from "react";

type PressPhotosProps = {
  mainPortrait: PressKitImage;
  additionalPhotos: PressKitImage[];
};

function getDownloadUrl(cloudinaryId: string) {
  return `https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/fl_attachment/${cloudinaryId}`;
}

export function PressPhotos({
  mainPortrait,
  additionalPhotos,
}: PressPhotosProps) {
  const [loadedImages, setLoadedImages] = useState<Record<string, boolean>>({});

  const handleImageLoad = (imageId: string) => {
    setLoadedImages((prev) => ({ ...prev, [imageId]: true }));
  };

  return (
    <>
      {/* Main Portrait */}
      <div className="relative aspect-[3/4] rounded-2xl overflow-hidden ring-1 ring-white/10 shadow-2xl group">
        {mainPortrait ? (
          <>
            {!loadedImages[mainPortrait.id] && (
              <div className="absolute inset-0">
                <Skeleton className="h-full w-full" />
              </div>
            )}
            <CldImage
              src={mainPortrait.cloudinaryId}
              alt={mainPortrait.description || "MARADOCA"}
              fill
              className={cn(
                "object-cover group-hover:scale-105 transition-transform duration-700",
                loadedImages[mainPortrait.id] ? "opacity-100" : "opacity-0"
              )}
              priority
              onLoad={() => handleImageLoad(mainPortrait.id)}
            />
            {loadedImages[mainPortrait.id] && (
              <a
                href={getDownloadUrl(mainPortrait.cloudinaryId)}
                className="absolute bottom-4 right-4 bg-black/50 hover:bg-black/70 backdrop-blur-sm text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                title="Download full resolution"
              >
                <Download className="w-5 h-5" />
              </a>
            )}
          </>
        ) : (
          <div className="w-full h-full bg-white/[0.02] flex items-center justify-center">
            <ImageIcon className="w-12 h-12 text-white/20" />
          </div>
        )}
      </div>

      {/* Additional Press Photos */}
      <div className="grid grid-cols-2 gap-4">
        {additionalPhotos.map((photo, index) => (
          <div
            key={photo.id}
            className="relative aspect-square rounded-xl overflow-hidden ring-1 ring-white/10 group"
          >
            {!loadedImages[photo.id] && (
              <div className="absolute inset-0">
                <Skeleton className="h-full w-full" />
              </div>
            )}
            <CldImage
              src={photo.cloudinaryId}
              alt={photo.description || `MARADOCA press photo ${index + 1}`}
              fill
              className={cn(
                "object-cover group-hover:scale-105 transition-transform duration-500",
                loadedImages[photo.id] ? "opacity-100" : "opacity-0"
              )}
              onLoad={() => handleImageLoad(photo.id)}
            />
            {loadedImages[photo.id] && (
              <a
                href={getDownloadUrl(photo.cloudinaryId)}
                className="absolute bottom-2 right-2 bg-black/50 hover:bg-black/70 backdrop-blur-sm text-white p-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                title="Download full resolution"
              >
                <Download className="w-4 h-4" />
              </a>
            )}
          </div>
        ))}
        {[...Array(Math.max(0, 4 - additionalPhotos.length))].map((_, i) => (
          <div
            key={`empty-${i}`}
            className="relative aspect-square rounded-xl overflow-hidden ring-1 ring-white/10"
          >
            <div className="w-full h-full bg-white/[0.02] flex items-center justify-center">
              <ImageIcon className="w-8 h-8 text-white/20" />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
