import { defineField } from "sanity";

export default defineField({
  name: "vcardInfo",
  title: "VCard Information",
  type: "object",
  fields: [
    defineField({
      title: "First name",
      type: "string",
      name: "firstName",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: "Last name",
      type: "string",
      name: "lastName",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: "Organization",
      type: "string",
      name: "organization",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: "Title",
      type: "string",
      name: "title",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: "Email",
      type: "string",
      name: "email",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: "Phone",
      type: "string",
      name: "phone",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: "Website",
      type: "url",
      name: "website",
      validation: (Rule) => Rule.required().uri({ allowRelative: false, scheme: ["https"] }),
    }),
  ],
});
