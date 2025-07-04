import "server-only";

import type { ClientPerspective } from "@sanity/client";

const allowedPerspectives: ClientPerspective[] = ["drafts", "published", "raw"];
const getPerspective = (): ClientPerspective => {
  const perspective = process.env.SANITY_PERSPECTIVE as ClientPerspective;
  if (!perspective) {
    return "published";
  }

  if (allowedPerspectives.includes(perspective)) {
    return perspective;
  }

  // TODO Content Releases:
  // parse perspective to support content releases, e.g. perspective.split(" ")

  return "published";
};

export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;
export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2025-05-22";
export const token = process.env.SANITY_API_READ_TOKEN;
export const perspective = getPerspective();
export const IN_DRAFT_MODE = perspective === "drafts";
export const DYNAMIC = IN_DRAFT_MODE ? "force-dynamic" : "force-static";
export const REVALIDATE = IN_DRAFT_MODE
  ? 0
  : process.env.REVALIDATE_INTERVAL
    ? parseInt(process.env.REVALIDATE_INTERVAL)
    : false;
