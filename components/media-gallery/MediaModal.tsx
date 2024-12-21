"use client";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { AdvancedVideo } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen";
import { fill } from "@cloudinary/url-gen/actions/resize";
import { ChevronLeft, ChevronRight, Download, Loader2, X } from "lucide-react";
import { CldImage } from "next-cloudinary";
import { useCallback, useEffect, useState } from "react";
import { MediaItem } from "./types";

const cld = new Cloudinary({
  cloud: {
    cloudName: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  },
});

type MediaModalProps = {
  item: MediaItem | null;
  onClose: () => void;
  items: MediaItem[];
};

export default function MediaModal({ item, items, onClose }: MediaModalProps) {
  const [currentItem, setCurrentItem] = useState<MediaItem | null>(item);
  const [loadedImages, setLoadedImages] = useState<Record<string, boolean>>({});

  useEffect(() => {
    setCurrentItem(item);
  }, [item]);

  const currentIndex = currentItem
    ? items.findIndex((i) => i.id === currentItem.id)
    : -1;

  const handleNext = useCallback(() => {
    if (currentIndex < items.length - 1) {
      setCurrentItem(items[currentIndex + 1]);
    }
  }, [currentIndex, items]);

  const handlePrevious = useCallback(() => {
    if (currentIndex > 0) {
      setCurrentItem(items[currentIndex - 1]);
    }
  }, [currentIndex, items]);

  const handleImageLoad = useCallback((itemId: string) => {
    setLoadedImages((prev) => ({ ...prev, [itemId]: true }));
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrevious();
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleNext, handlePrevious, onClose]);

  const handleDownload = async () => {
    if (!currentItem) return;
    const response = await fetch(
      `https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/` +
        `${currentItem.type === "video" ? "video" : "image"}/upload/` +
        `${currentItem.cloudinaryId}`
    );
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = currentItem.title;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  };

  if (!currentItem) return null;

  return (
    <Dialog open={!!currentItem} onOpenChange={() => onClose()}>
      <DialogContent className="max-w-screen h-screen p-0 overflow-hidden bg-black/95 border-none">
        <button
          onClick={onClose}
          className="absolute right-6 top-6 z-50 rounded-full bg-black/50 p-2 text-white/80 backdrop-blur-sm transition-colors hover:bg-black/70 hover:text-white"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="relative h-full flex items-center justify-center">
          {currentIndex > 0 && (
            <button
              onClick={handlePrevious}
              className="absolute left-6 z-50 rounded-full bg-black/50 p-3 text-white/80 backdrop-blur-sm transition-colors hover:bg-black/70 hover:text-white"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
          )}
          {currentIndex < items.length - 1 && (
            <button
              onClick={handleNext}
              className="absolute right-6 z-50 rounded-full bg-black/50 p-3 text-white/80 backdrop-blur-sm transition-colors hover:bg-black/70 hover:text-white"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          )}

          <div className="relative max-h-screen max-w-screen">
            {currentItem.type === "video" ? (
              <div className="relative aspect-video w-screen max-w-screen">
                <AdvancedVideo
                  cldVid={cld.video(currentItem.cloudinaryId).resize(fill())}
                  className="absolute inset-0 h-full w-full object-contain"
                  controls
                  muted={false}
                  autoPlay={true}
                />
              </div>
            ) : (
              <div className="relative w-screen max-w-screen h-screen flex items-center justify-center">
                {!loadedImages[currentItem.id] && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Loader2 className="h-8 w-8 animate-spin text-white/70" />
                  </div>
                )}
                <CldImage
                  src={currentItem.cloudinaryId}
                  alt={currentItem.title}
                  fill
                  className={cn(
                    "object-contain transition-opacity duration-300",
                    loadedImages[currentItem.id] ? "opacity-100" : "opacity-0"
                  )}
                  priority
                  onLoad={() => handleImageLoad(currentItem.id)}
                />
                {loadedImages[currentItem.id] && (
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={handleDownload}
                    className="absolute bottom-6 right-6 text-white hover:bg-white/20"
                  >
                    <Download className="h-5 w-5" />
                  </Button>
                )}
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
