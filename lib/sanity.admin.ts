import { createClient } from "next-sanity";

export const adminClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: "2024-03-20",
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
  perspective: "published",
});
