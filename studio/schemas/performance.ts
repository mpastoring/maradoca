export default {
  name: "performance",
  title: "Performance",
  type: "document",
  fields: [
    {
      name: "date",
      title: "Date",
      type: "datetime",
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
    {
      name: "isPast",
      title: "Is Past Event",
      type: "boolean",
      initialValue: false,
    },
  ],
};
