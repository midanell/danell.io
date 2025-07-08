import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import Schemas from "./schemaTypes";
import { media } from "sanity-plugin-media";
import { structure } from "./structure/structure";
import resolveNewDocumentOptions from "./newDocumentOptions";

export default defineConfig({
  name: "default",
  title: "Danell IO",

  projectId: process.env.SANITY_STUDIO_PROJECT_ID!,
  dataset: "production",

  plugins: [
    structureTool({
      structure,
    }),
    visionTool({ defaultApiVersion: process.env.SANITY_STUDIO_API_VERSION || "2025-07-04" }),
    media(),
  ],
  document: {
    newDocumentOptions: resolveNewDocumentOptions,
  },
  schema: {
    types: Schemas,
  },
  releases: {
    enabled: false,
  },
});
