"use client";

import { Dialog, DialogContent } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { AdvancedVideo } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen";
import { fill } from "@cloudinary/url-gen/actions/resize";
import { motion } from "framer-motion";
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
      <DialogContent
        className="max-h-screen max-w-screen border-none bg-black/90 p-0 backdrop-blur-lg"
        onInteractOutside={onClose}
      >
        <motion.button
          onClick={onClose}
          className="absolute right-6 top-6 z-50 rounded-full bg-black/50 p-3 text-white/80 backdrop-blur-sm hover:bg-black/70 hover:text-white"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <X className="h-6 w-6" />
        </motion.button>

        {currentIndex > 0 && (
          <motion.button
            onClick={handlePrevious}
            className="absolute left-6 z-50 rounded-full bg-black/50 p-3 text-white/80 backdrop-blur-sm hover:bg-black/70 hover:text-white"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronLeft className="h-6 w-6" />
          </motion.button>
        )}

        {currentIndex < items.length - 1 && (
          <motion.button
            onClick={handleNext}
            className="absolute right-6 z-50 rounded-full bg-black/50 p-3 text-white/80 backdrop-blur-sm hover:bg-black/70 hover:text-white"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronRight className="h-6 w-6" />
          </motion.button>
        )}

        <motion.div
          className="relative max-h-screen max-w-screen"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
        >
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
                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <Loader2 className="h-8 w-8 animate-spin text-white/70" />
                </motion.div>
              )}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
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
              </motion.div>
              {loadedImages[currentItem.id] && (
                <motion.button
                  variant="ghost"
                  size="icon"
                  onClick={handleDownload}
                  className="absolute bottom-6 right-6 text-white hover:bg-white/20 rounded-full bg-black/50 p-2 backdrop-blur-sm"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Download className="h-5 w-5" />
                </motion.button>
              )}
            </div>
          )}
        </motion.div>
      </DialogContent>
    </Dialog>
  );
}
