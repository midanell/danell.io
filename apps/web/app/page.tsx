import { HOME_PAGE_QUERY } from "@/sanity/queries";
import type { Home } from "@/sanity/sanity-schema";
import { REVALIDATE } from "@/sanity/server/env";
import { sanityFetch } from "@/sanity/server/fetch";

export default async function HomePage() {
  const data = await sanityFetch<Home>({
    query: HOME_PAGE_QUERY,
    revalidate: REVALIDATE,
  });
  return (
    <div className="grid min-h-screen grid-rows-[20px_1fr_20px] items-center justify-items-center gap-16 p-8 pb-20 font-[family-name:var(--font-geist-sans)] sm:p-20">
      <div className="row-start-2 flex flex-col items-center gap-[32px] sm:items-start">
        <h1>{data?.title}</h1>
        <p>{data?.description}</p>
      </div>
    </div>
  );
}
