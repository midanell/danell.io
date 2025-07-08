import { defineField, defineType } from "sanity";

export default defineType({
  name: "vcard",
  title: "VCard",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "vcard",
      title: "VCard Information",
      type: "vcardInfo",
      validation: (Rule) => Rule.required(),
    }),
  ],
});
