const heroSchema = {
  name: "hero",
  title: "Hero Section",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "subtitle",
      title: "Subtitle",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "backgroundVideo",
      title: "Background Video",
      type: "object",
      fields: [
        {
          name: "desktop",
          title: "Desktop Video ID",
          type: "string",
          description: "Cloudinary video ID for desktop version",
        },
        {
          name: "mobile",
          title: "Mobile Video ID",
          type: "string",
          description: "Cloudinary video ID for mobile version",
        },
      ],
    },
    {
      name: "socialLinks",
      title: "Social Links",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "platform",
              title: "Platform",
              type: "string",
              options: {
                list: [
                  { title: "Instagram", value: "instagram" },
                  { title: "SoundCloud", value: "soundcloud" },
                  { title: "Email", value: "email" },
                ],
              },
            },
            {
              name: "url",
              title: "URL",
              type: "url",
              validation: (Rule: any) =>
                Rule.uri({
                  scheme: ["http", "https", "mailto"],
                  allowRelative: true,
                }),
            },
            {
              name: "icon",
              title: "Icon",
              type: "string",
              description: "Icon path or name",
            },
          ],
        },
      ],
    },
  ],
};

export default heroSchema;
