"use client";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { AdvancedVideo } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen";
import { fill } from "@cloudinary/url-gen/actions/resize";
import { ChevronLeft, ChevronRight, Download, X } from "lucide-react";
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
      <DialogContent className="max-w-[90vw] h-[90vh] p-0 overflow-hidden bg-black/90 border-none">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-50 rounded-full bg-black/50 p-2 text-white/80 backdrop-blur-sm transition-colors hover:bg-black/70 hover:text-white"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="relative h-full flex items-center justify-center">
          {currentIndex > 0 && (
            <button
              onClick={handlePrevious}
              className="absolute left-4 z-50 rounded-full bg-black/50 p-3 text-white/80 backdrop-blur-sm transition-colors hover:bg-black/70 hover:text-white"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
          )}
          {currentIndex < items.length - 1 && (
            <button
              onClick={handleNext}
              className="absolute right-4 z-50 rounded-full bg-black/50 p-3 text-white/80 backdrop-blur-sm transition-colors hover:bg-black/70 hover:text-white"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          )}

          <div className="relative max-h-full max-w-full">
            {currentItem.type === "video" ? (
              <AdvancedVideo
                cldVid={cld.video(currentItem.cloudinaryId).resize(fill())}
                className="max-h-[calc(90vh-100px)] w-auto max-w-full object-contain"
                controls
                muted
              />
            ) : (
              <div className="relative">
                <CldImage
                  src={currentItem.cloudinaryId}
                  alt={currentItem.title}
                  width={1920}
                  height={1080}
                  className="max-h-[calc(90vh-40px)] w-auto max-w-full object-contain"
                  priority
                />
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={handleDownload}
                  className="absolute bottom-4 right-4 text-white hover:bg-white/20"
                >
                  <Download className="h-5 w-5" />
                </Button>
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
