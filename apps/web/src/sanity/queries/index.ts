// import { IMAGE_QUERY } from "@/sanity/queries/image";
import { SEO_QUERY } from "@/sanity/queries/seo";

//#region PAGE

export const HOME_PAGE_QUERY = `*[_type == "home"]{
  ...,
}[0]`;

export const IMPRESSUM_PAGE_QUERY = `*[_type == "impressum"]{
  ...,
}[0]`;
export const CONTACT_PAGE_QUERY = `*[_type == "contact"]{
  ...,
}[0]`;

//#endregion

//#region SEO

export const HOME_PAGE_SEO_QUERY = `*[_type == "home"]{
  ${SEO_QUERY}
}[0]`;

export const IMPRESSUM_PAGE_SEO_QUERY = `*[_type == "impressum"]{
  ${SEO_QUERY}
}[0]`;
export const CONTACT_PAGE_SEO_QUERY = `*[_type == "contact"]{
  ${SEO_QUERY}
}[0]`;

//#endregion
