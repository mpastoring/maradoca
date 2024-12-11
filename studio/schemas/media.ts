export default {
  name: "media",
  title: "Media",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "cloudinaryId",
      title: "Cloudinary ID",
      type: "string",
    },
    {
      name: "type",
      title: "Type",
      type: "string",
      options: {
        list: [
          { title: "Image", value: "image" },
          { title: "Video", value: "video" },
        ],
      },
    },
    {
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
  ],
};
