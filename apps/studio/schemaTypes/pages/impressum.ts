import { defineField, defineType } from "sanity";
import seo, { seoGroup } from "../fields/seo";

export default defineType({
  name: "impressum",
  title: "Impressum",
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
      name: "imprint",
      title: "Imprint",
      type: "blockText",
      group: "page",
      validation: (Rule) => Rule.required(),
    }),
  ],
});
