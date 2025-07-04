import { defineCliConfig } from "sanity/cli";

export default defineCliConfig({
  studioHost: process.env.SANITY_STUDIO_STUDIO_HOST!,
  api: {
    projectId: process.env.SANITY_STUDIO_PROJECT_ID!,
    dataset: "production",
  },
  /**
   * Enable auto-updates for studios.
   * Learn more at https://www.sanity.io/docs/cli#auto-updates
   */
  autoUpdates: false,
});
