import { defineField, defineType } from "sanity";
import seo, { seoGroup } from "../fields/seo";

export default defineType({
  name: "home",
  title: "Home",
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
      name: "description",
      title: "Description",
      type: "text",
      group: "page",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "copy",
      title: "Copy",
      type: "blockText",
      group: "page",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: "Contact button label",
      type: "string",
      name: "contactLinkText",
      group: "page",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: "Contact button link",
      type: "url",
      name: "contactLink",
      group: "page",
      validation: (Rule) =>
        Rule.required().uri({ allowRelative: false, scheme: ["http", "https"] }),
    }),
    defineField({
      title: "Contact button description",
      type: "text",
      name: "contactLinkDescription",
      group: "page",
      validation: (Rule) => Rule.required(),
    }),
  ],
});
