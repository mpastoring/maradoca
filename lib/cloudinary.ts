import { MediaItem } from "@/components/media-gallery/types";

const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;

export async function getMediaItems(): Promise<MediaItem[]> {
  try {
    // Fetch both images and videos from the maradoca folder
    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${cloudName}/resources/search`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Basic ${btoa(
            process.env.CLOUDINARY_API_KEY +
              ":" +
              process.env.CLOUDINARY_API_SECRET
          )}`,
        },
        body: JSON.stringify({
          expression: "folder:maradoca/*",
          with_field: "tags",
          max_results: 500,
        }),
      }
    );

    const data = await response.json();

    return data.resources.map((resource: any) => ({
      id: resource.public_id,
      type: resource.resource_type === "video" ? "video" : "image",
      title:
        resource.context?.custom?.caption ||
        resource.public_id.split("/").pop(),
      description: resource.context?.custom?.alt,
      tags: resource.tags || [],
      cloudinaryId: resource.public_id,
      width: resource.width,
      height: resource.height,
    }));
  } catch (error) {
    console.error("Error fetching media items:", error);
    return [];
  }
}
