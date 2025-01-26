import { MediaItem } from "@/components/media-gallery/types";

interface PressKitImagesResponse {
  images: MediaItem[];
  version: string;
}

// Simple string hash function
function hashCode(str: string): string {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash |= 0; // Convert to 32bit integer
  }
  return hash.toString(16);
}

const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;

export async function getPressKitImages(): Promise<PressKitImagesResponse> {
  try {
    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${cloudName}/resources/search?t=${Date.now()}`,
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

    // Create version hash from all tags
    const versionHash = hashCode(
      data.resources.flatMap((r: any) => r.tags || []).join("|"),
    );

    return {
      images: data.resources.map((resource: any) => ({
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
      })),
      version: versionHash,
    };
  } catch (error) {
    console.error("Error fetching press kit images:", error);
    return {
      images: [],
      version: "0",
    };
  }
}

export async function getMediaItems(): Promise<MediaItem[]> {
  try {
    // Fetch both images and videos from the gallery/performances and gallery/artistpic folders
    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${cloudName}/resources/search?t=${Date.now()}`,
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
