"use client";

/**
 * This configuration is used to for the Sanity Studio that's mounted on the `/app/studio/[[...tool]]/page.tsx` route
 */

import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import { schema } from "./sanity/schemaTypes";

export default defineConfig({
  name: "default",
  title: "Maradoca",
  projectId: 'exxpqu5g',
  dataset: 'production',
  plugins: [deskTool(), visionTool()],
  schema: {
    types: schema.types,
  },
  cors: {
    origin: [
      'http://localhost:3000',
      'http://localhost:3001',
      'http://localhost:3333',
      'http://localhost:5173',
    ],
    credentials: true,
  },
});
