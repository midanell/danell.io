import { defineField } from "sanity";

export const seoGroup = {
  name: "seo",
  title: "SEO",
};

export default [
  defineField({
    name: "metaTitle",
    title: "Meta title",
    type: "string",
    group: "seo",
    validation: (Rule) => [
      Rule.max(60).warning("Shorter titles are usually better"),
      Rule.required().warning("Meta title is required"),
    ],
  }),
  defineField({
    name: "metaDescription",
    title: "Meta description",
    type: "text",
    group: "seo",
    validation: (Rule) => [
      Rule.max(155).warning("Max 155 letters in a meta description"),
      Rule.required().warning("Meta description is advised"),
    ],
  }),
  defineField({
    name: "metaImage",
    title: "Meta image",
    type: "image",
    options: {
      hotspot: true,
    },
    group: "seo",
    validation: (Rule) => [Rule.required().warning("Meta image is advised")],
  }),
  defineField({
    name: "noindex",
    title: "No index",
    type: "boolean",
    initialValue: false,
    description: "Prevent this page from showing in search engine results",
    group: "seo",
  }),
  defineField({
    name: "nofollow",
    title: "No follow",
    type: "boolean",
    initialValue: false,
    description: "Prevent search engine to associate links on this page with our site.",
    group: "seo",
  }),
  defineField({
    name: "keywords",
    title: "Keywords",
    type: "string",
    group: "seo",
  }),
  defineField({
    name: "synonyms",
    title: "Synonyms",
    type: "string",
    group: "seo",
  }),
];
