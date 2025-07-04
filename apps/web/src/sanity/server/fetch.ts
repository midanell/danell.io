"use server";

import { type QueryParams } from "@sanity/client";
import { client } from "./client";
import { REVALIDATE } from "./env";

export async function sanityFetch<T>({
  query,
  params = {},
  revalidate,
}: {
  query: string;
  params?: QueryParams;
  revalidate?: number | false;
}): Promise<T | null> {
  const revalidateValue = revalidate === undefined ? REVALIDATE : revalidate;
  try {
    return client.fetch<T>(query, params, {
      next: {
        revalidate: revalidateValue,
      },
    });
  } catch (e) {
    console.error(e);
    return null;
  }
}
