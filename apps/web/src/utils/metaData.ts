import type { Metadata } from "next";
import type { SanityImageAsset, SanityImageCrop, SanityImageHotspot } from "@/sanity/sanity-schema";

export const createMetadata = (seo: SanitySeo | null, titleSuffix = ""): Metadata => {
  const title = seo?.metaTitle ? { title: seo?.metaTitle + titleSuffix } : {};
  const description = seo?.metaDescription ? { description: seo?.metaDescription } : {};
  const keywords = seo?.keywords ? { keywords: seo?.keywords } : {};

  //TODO robots and image
  return {
    ...title,
    ...description,
    ...keywords,
  };
};

export interface SanitySeo {
  metaTitle: string;
  metaDescription: string;
  metaImage: {
    asset?: SanityImageAsset;
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
  };
  noindex?: boolean;
  nofollow?: boolean;
  keywords?: string;
  synonyms?: string;
}
