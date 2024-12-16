import { groq } from "next-sanity";
import { client } from "./sanity.client";

export async function getPerformances() {
  return client.fetch(`
    *[_type == "performance"] | order(date desc) {
      _id,
      date,
      venue,
      location,
      isPast
    }
  `);
}

export async function getMediaItems() {
  return client.fetch(`
    *[_type == "media"] {
      _id,
      title,
      cloudinaryId,
      type,
      tags,
      description
    }
  `);
}

export const heroQuery = groq`*[_type == "hero"][0]{
  title,
  subtitle,
  backgroundVideo {
    desktop,
    mobile
  },
  socialLinks[] {
    platform,
    url,
    icon
  }
}`;

export const pressKitQuery = `*[_type == "pressKit"][0] {
  about {
    description,
    genres
  },
  performances[] {
    date,
    venue,
    location
  },
  featuredTracks[] {
    trackId,
    title
  },
  socialLinks {
    website,
    instagram,
    soundcloud,
    email
  }
}`;
