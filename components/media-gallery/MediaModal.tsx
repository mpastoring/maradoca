"use client";

import { Badge } from "@/components/ui/badge";
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
    <Dialog open={!!item} onOpenChange={onClose}>
      <DialogContent className="max-w-5xl bg-black/95 p-0">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-50 rounded-full bg-black/50 p-2 text-white hover:bg-black/70"
        >
          <X className="h-6 w-6" />
        </button>

        <div className="relative aspect-video w-full">
          {item.type === "image" ? (
            <CldImage
              src={item.cloudinaryId}
              fill
              alt={item.title}
              className="object-contain"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
              priority
            />
          ) : (
            <AdvancedVideo
              cldVid={cld.video(item.cloudinaryId).resize(fill())}
              className="h-full w-full"
              controls
              autoPlay
              muted={false}
            />
          )}
        </div>

        <div className="p-6">
          <h2 className="mb-2 text-xl font-semibold text-white">
            {item.title}
          </h2>
          {item.description && (
            <p className="text-gray-300">{item.description}</p>
          )}
          <div className="mt-4 flex flex-wrap gap-2">
            {item.tags.map((tag) => (
              <Badge
                key={tag}
                variant="secondary"
                className="bg-white/10 hover:bg-white/20"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
