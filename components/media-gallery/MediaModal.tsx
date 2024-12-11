"use client";

import { Dialog, DialogContent } from "@/components/ui/dialog";
import { AdvancedVideo } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen";
import { fill } from "@cloudinary/url-gen/actions/resize";
import { X } from "lucide-react";
import { CldImage } from "next-cloudinary";
import { MediaItem } from "./types";

const cld = new Cloudinary({
  cloud: {
    cloudName: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  },
});

type MediaModalProps = {
  item: MediaItem | null;
  onClose: () => void;
};

export default function MediaModal({ item, onClose }: MediaModalProps) {
  if (!item) return null;

  return (
    <Dialog open={!!item} onOpenChange={() => onClose()}>
      <DialogContent className="max-w-[95vw] max-h-[95vh] p-0 overflow-hidden bg-black/90 border-none">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-50 rounded-full bg-black/50 p-2 text-white/80 backdrop-blur-sm transition-colors hover:bg-black/70 hover:text-white"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="relative flex aspect-auto max-h-[90vh] items-center justify-center">
          {item.type === "video" ? (
            <AdvancedVideo
              cldVid={cld.video(item.cloudinaryId).resize(fill())}
              className="h-auto max-h-[90vh] w-auto max-w-[95vw] object-contain"
              controls
              autoPlay={false}
              muted={true}
            />
          ) : (
            <CldImage
              src={item.cloudinaryId}
              alt={item.title}
              width={1920}
              height={1080}
              className="h-auto max-h-[90vh] w-auto max-w-[95vw] object-contain"
              priority
            />
          )}
        </div>

        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
          <h2 className="text-xl font-semibold text-white">{item.title}</h2>
          {item.description && (
            <p className="mt-1 text-sm text-gray-200">{item.description}</p>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
