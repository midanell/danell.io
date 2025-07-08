import { HOME_PAGE_QUERY, HOME_PAGE_SEO_QUERY } from "@/sanity/queries";
import type { Home } from "@/sanity/sanity-schema";
import { REVALIDATE } from "@/sanity/server/env";
import { sanityFetch } from "@/sanity/server/fetch";
import Error from "@/ui/error";
import PortableText from "@/ui/portableText";
import { createMetadata, type SanitySeo } from "@/utils/metaData";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "react-feather";

export async function generateMetadata(): Promise<Metadata> {
  const seo = await sanityFetch<SanitySeo>({
    query: HOME_PAGE_SEO_QUERY,
    revalidate: REVALIDATE,
  });

  return createMetadata(seo, " | Danell.IO");
}

export default async function HomePage() {
  const data = await sanityFetch<Home>({
    query: HOME_PAGE_QUERY,
    revalidate: REVALIDATE,
  });
  if (!data) {
    return <Error />;
  }

  return (
    <div className="flex flex-col items-center justify-items-center gap-8 p-8 pb-20">
      <h1>{data.title}</h1>
      <p>{data.description}</p>
      <div>
        <PortableText value={data.copy} />
      </div>
      <p>{data.contactLinkDescription}</p>
      <Link
        href={data.contactLink}
        className="flex items-center gap-2 rounded-full border px-6 py-4"
      >
        {data.contactLinkText} <ArrowRight />
      </Link>
    </div>
  );
}
