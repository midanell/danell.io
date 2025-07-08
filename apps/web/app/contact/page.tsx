import { isFeatureEnabled, FeatureFlagEnum } from "@/server/featureFlags";
import Image from "next/image";
import QRCode from "qrcode";
import { createVcard } from "@/utils/vcard";
import type { Metadata } from "next";
import { sanityFetch } from "@/sanity/server/fetch";
import { createMetadata, type SanitySeo } from "@/utils/metaData";
import { CONTACT_PAGE_QUERY, CONTACT_PAGE_SEO_QUERY } from "@/sanity/queries";
import { REVALIDATE } from "@/sanity/server/env";
import type { Contact } from "@/sanity/sanity-schema";
import Error from "@/ui/error";

export async function generateMetadata(): Promise<Metadata> {
  const seo = await sanityFetch<SanitySeo>({
    query: CONTACT_PAGE_SEO_QUERY,
    revalidate: REVALIDATE,
  });

  return createMetadata(seo, " | Danell.IO");
}

export default async function ContactPage() {
  const data = await sanityFetch<Contact>({
    query: CONTACT_PAGE_QUERY,
    revalidate: REVALIDATE,
  });
  if (!data) {
    return <Error />;
  }

  const showVCard = await isFeatureEnabled(FeatureFlagEnum.ShowVCard);
  const vcard = await QRCode.toDataURL(createVcard(data.vcard), qrConfig);
  return (
    <div className="flex flex-col items-center justify-items-center gap-8 p-8 pb-20">
      <h1>{data.title}</h1>
      <div>
        <p>
          {data.vcard.firstName} {data.vcard.lastName}
        </p>
        <p>{data.vcard.title}</p>
        <p>{data.vcard.email}</p>
        <p>{data.vcard.phone}</p>
      </div>
      {showVCard && <Image src={vcard} alt="VCard" width={200} height={200} />}
    </div>
  );
}

const qrConfig = {
  color: {
    dark: "#00F",
    light: "#FFF",
  },
  width: 200,
  height: 200,
};
