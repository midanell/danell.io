import { defineField } from "sanity";

export default defineField({
  name: "imageAsset",
  title: "Image asset",
  type: "image",
  fields: [
    defineField({
      name: "altText",
      title: "Alternative text",
      type: "string",
    }),
    defineField({
      name: "credit",
      title: "Image credit",
      type: "string",
    }),
  ],
  options: {
    hotspot: true,
  },
});
