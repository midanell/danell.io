import "server-only";

import { createClient } from "@sanity/client";
import { apiVersion, dataset, projectId, perspective, token } from "./env";

const useCdn = perspective === "published";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn,
  perspective,
  token,
});
