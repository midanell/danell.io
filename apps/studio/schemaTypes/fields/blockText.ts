import { defineArrayMember, defineField } from "sanity";

export default defineField({
  type: "array",
  name: "blockText",
  title: "Block Text With Header Styles",
  of: [
    defineArrayMember({
      type: "block",
      styles: [
        { title: "Normal", value: "normal" },
        { title: "H2", value: "h2" },
        { title: "H3", value: "h3" },
      ],
      lists: [{ title: "Bullet", value: "bullet" }],
      marks: {
        decorators: [
          {
            title: "Emphasis",
            value: "em",
          },
          {
            title: "Bold",
            value: "strong",
          },
        ],
        annotations: [
          {
            name: "link",
            type: "object",
            title: "Link",
            fields: [
              defineField({
                name: "href",
                type: "url",
                description: `Use "/advise/.." for internal links`,
                validation: (Rule) =>
                  Rule.uri({
                    allowRelative: true,
                    scheme: ["http", "https", "mailto", "tel"],
                  }),
              }),
            ],
          },
        ],
      },
    }),
  ],
});
