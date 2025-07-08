import { IMPRESSUM_PAGE_QUERY, IMPRESSUM_PAGE_SEO_QUERY } from "@/sanity/queries";
import type { Impressum } from "@/sanity/sanity-schema";
import { REVALIDATE } from "@/sanity/server/env";
import { sanityFetch } from "@/sanity/server/fetch";
import Error from "@/ui/error";
import { createMetadata, type SanitySeo } from "@/utils/metaData";
import PortableText from "@/ui/portableText";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const seo = await sanityFetch<SanitySeo>({
    query: IMPRESSUM_PAGE_SEO_QUERY,
    revalidate: REVALIDATE,
  });

  return createMetadata(seo, " | Danell.IO");
}

export default async function ImpressumPage() {
  const data = await sanityFetch<Impressum>({
    query: IMPRESSUM_PAGE_QUERY,
    revalidate: REVALIDATE,
  });
  if (!data) {
    return <Error />;
  }

  return (
    <div className="flex flex-col items-center justify-items-center gap-8 p-8 pb-20">
      <h1>{data.title}</h1>
      <div>
        <PortableText value={data.imprint} />
      </div>
    </div>
  );
}
