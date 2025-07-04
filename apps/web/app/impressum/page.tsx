import { IMPRESSUM_PAGE_QUERY } from "@/sanity/queries";
import type { Impressum } from "@/sanity/sanity-schema";
import { REVALIDATE } from "@/sanity/server/env";
import { sanityFetch } from "@/sanity/server/fetch";

export default async function ImpressumPage() {
  const data = await sanityFetch<Impressum>({
    query: IMPRESSUM_PAGE_QUERY,
    revalidate: REVALIDATE,
  });
  return (
    <div className="flex flex-col items-center justify-items-center gap-16 p-8 pb-20">
      <h1>{data?.title}</h1>
      <p>{data?.description}</p>
    </div>
  );
}
