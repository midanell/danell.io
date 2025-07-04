import { createClient } from "@sanity/client";
import { apiVersion, dataset, projectId } from "./env";

const useCdn = true;
const perspective = "published";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn,
  perspective,
});
