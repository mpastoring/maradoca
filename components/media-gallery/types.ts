export type MediaItem = {
  id: string;
  type: "image" | "video";
  title: string;
  description?: string;
  tags: string[];
  cloudinaryId: string;
  width: number;
  height: number;
  thumbnailUrl?: string;
};

export type Filter = "all" | "images" | "videos" | string;

export type MediaGalleryProps = {
  items: MediaItem[];
};
