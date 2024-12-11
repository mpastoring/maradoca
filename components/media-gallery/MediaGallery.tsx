"use client";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { AdvancedVideo } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen";
import { fill } from "@cloudinary/url-gen/actions/resize";
import { AnimatePresence, motion } from "framer-motion";
import { ImageIcon, PlayCircle, VideoIcon } from "lucide-react";
import { CldImage } from "next-cloudinary";
import { useCallback, useState } from "react";
import MediaModal from "./MediaModal";
import { Filter, MediaGalleryProps, MediaItem } from "./types";

const cld = new Cloudinary({
  cloud: {
    cloudName: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  },
});

const filters: Array<{ id: Filter; label: string }> = [
  { id: "all", label: "All" },
  { id: "images", label: "Images" },
  { id: "videos", label: "Videos" },
  { id: "performance", label: "Performances" },
  { id: "backstage", label: "Backstage" },
];

export default function MediaGallery({ items }: MediaGalleryProps) {
  const [selectedItem, setSelectedItem] = useState<MediaItem | null>(null);
  const [activeFilter, setActiveFilter] = useState<Filter>("all");

  const getFilteredItems = useCallback(() => {
    return items.filter((item) => {
      if (activeFilter === "all") return true;
      if (activeFilter === "images") return item.type === "image";
      if (activeFilter === "videos") return item.type === "video";
      return item.tags.includes(activeFilter);
    });
  }, [activeFilter, items]);

  const renderMediaItem = (item: MediaItem) => {
    if (item.type === "video") {
      const video = cld.video(item.cloudinaryId).resize(fill());

      return (
        <>
          <AdvancedVideo
            cldVid={video}
            className="h-full w-full object-cover"
            autoPlay={false}
            muted={true}
            controls={false}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <PlayCircle className="h-12 w-12 text-white opacity-70 transition-opacity group-hover:opacity-100" />
          </div>
        </>
      );
    }

    return (
      <CldImage
        src={item.cloudinaryId}
        alt={item.title}
        fill
        className="object-cover transition-transform duration-300 group-hover:scale-105"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        priority={false}
      />
    );
  };

  return (
    <div>
      {/* Filter Section */}
      <div className="mb-8 flex flex-wrap gap-2">
        {filters.map((filter) => (
          <Badge
            key={filter.id}
            variant={activeFilter === filter.id ? "default" : "secondary"}
            className={cn(
              "cursor-pointer px-4 py-2 text-sm transition-colors",
              activeFilter === filter.id
                ? "bg-[#ff5500] hover:bg-[#ff5500]/90"
                : "bg-white/10 hover:bg-white/20 text-gray-100"
            )}
            onClick={() => setActiveFilter(filter.id)}
          >
            {filter.label}
          </Badge>
        ))}
      </div>

      {/* Gallery Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
      >
        <AnimatePresence mode="popLayout">
          {getFilteredItems().map((item) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.2 }}
              className="group relative aspect-square cursor-pointer overflow-hidden rounded-lg bg-black/20"
              onClick={() => setSelectedItem(item)}
            >
              {renderMediaItem(item)}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="absolute bottom-0 left-0 p-4">
                  <h3 className="text-lg font-semibold text-white drop-shadow-md">
                    {item.title}
                  </h3>
                  {item.type === "video" ? (
                    <div className="flex items-center gap-2 text-gray-100">
                      <VideoIcon className="h-4 w-4" />
                      <span>Video</span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-2 text-gray-100">
                      <ImageIcon className="h-4 w-4" />
                      <span>Image</span>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      <MediaModal item={selectedItem} onClose={() => setSelectedItem(null)} />
    </div>
  );
}
