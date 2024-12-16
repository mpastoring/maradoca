import { defineField, defineType } from "sanity";

export default defineType({
  name: "pressKit",
  title: "Press Kit",
  type: "document",
  fields: [
    defineField({
      name: "about",
      title: "About",
      type: "object",
      fields: [
        {
          name: "description",
          title: "Description",
          type: "text",
        },
        {
          name: "genres",
          title: "Genres",
          type: "array",
          of: [{ type: "string" }],
        },
      ],
    }),
    defineField({
      name: "performances",
      title: "Performances",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "date",
              title: "Date",
              type: "date",
            },
            {
              name: "venue",
              title: "Venue",
              type: "string",
            },
            {
              name: "location",
              title: "Location",
              type: "string",
            },
          ],
        },
      ],
    }),
    defineField({
      name: "featuredTracks",
      title: "Featured Tracks",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "trackId",
              title: "SoundCloud Track ID",
              type: "string",
            },
            {
              name: "title",
              title: "Track Title",
              type: "string",
            },
          ],
        },
      ],
    }),
    defineField({
      name: "socialLinks",
      title: "Social Links",
      type: "object",
      fields: [
        {
          name: "website",
          title: "Website",
          type: "string",
        },
        {
          name: "instagram",
          title: "Instagram",
          type: "string",
        },
        {
          name: "soundcloud",
          title: "SoundCloud",
          type: "string",
        },
        {
          name: "email",
          title: "Email",
          type: "string",
        },
      ],
    }),
  ],
  preview: {
    select: {
      description: "about.description",
      genres: "about.genres",
      performances: "performances",
    },
    prepare({ description, genres = [], performances = [] }) {
      const subtitle = [
        `${genres.length} genres`,
        `${performances.length} performances`,
      ].join(" • ");

      return {
        title: "Press Kit",
        subtitle,
      };
    },
  },
});
