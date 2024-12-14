import { MediaItem } from "@/components/media-gallery/types";

const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;

export async function getPressKitImages(): Promise<MediaItem[]> {
  try {
    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${cloudName}/resources/search`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Basic ${btoa(
            process.env.CLOUDINARY_API_KEY +
              ":" +
              process.env.CLOUDINARY_API_SECRET,
          )}`,
        },
        body: JSON.stringify({
          expression: "folder:maradoca/press-kit",
          with_field: "tags",
          max_results: 500,
        }),
      },
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
    console.error("Error fetching press kit images:", error);
    return [];
  }
}

export async function getMediaItems(): Promise<MediaItem[]> {
  try {
    // Fetch both images and videos from the gallery/performances and gallery/artistpic folders
    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${cloudName}/resources/search`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Basic ${btoa(
            process.env.CLOUDINARY_API_KEY +
              ":" +
              process.env.CLOUDINARY_API_SECRET,
          )}`,
        },
        body: JSON.stringify({
          expression:
            "folder:maradoca/gallery/performance/* OR folder:maradoca/gallery/artistpic/*",
          with_field: "tags",
          max_results: 500,
        }),
      },
    );

    const data = await response.json();

    return data.resources.map((resource: any) => {
      // Extract folder from public_id (e.g., "maradoca/gallery/performances" or "maradoca/gallery/artistpic")
      const folderPath = resource.public_id.split("/").slice(0, -1).join("/");
      const folder = folderPath.split("/").pop(); // Get the last folder name (performances or artistpic)

      return {
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
        folder: folder || "",
      };
    });
  } catch (error) {
    console.error("Error fetching media items:", error);
    return [];
  }
}
