import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schemaTypes";
import { media } from "sanity-plugin-media";
import { structure } from "./structure/structure";

export default defineConfig({
  name: "default",
  title: "Danell IO",

  projectId: process.env.SANITY_STUDIO_PROJECT_ID!,
  dataset: "production",

  plugins: [
    structureTool({
      structure,
    }),
    visionTool(),
    media(),
  ],

  schema: {
    types: schemaTypes,
  },
  releases: {
    enabled: false,
  },
});
