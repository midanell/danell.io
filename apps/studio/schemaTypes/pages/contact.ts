import { defineField, defineType } from "sanity";
import seo, { seoGroup } from "../fields/seo";

export default defineType({
  name: "contact",
  title: "Contact",
  type: "document",
  groups: [
    seoGroup,
    {
      name: "page",
      title: "Page",
      default: true,
    },
  ],
  fields: [
    ...seo,
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      group: "page",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "vcard",
      title: "VCard Information",
      type: "vcardInfo",
      group: "page",
      validation: (Rule) => Rule.required(),
    }),
  ],
});
