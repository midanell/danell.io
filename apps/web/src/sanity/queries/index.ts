// import { IMAGE_QUERY } from "@/sanity/queries/image";
// import { SEO_QUERY } from "@/sanity/queries/seo";

//#region PAGE

export const HOME_PAGE_QUERY = `*[_type == "home"]{
  ...,
}[0]`;

export const IMPRESSUM_PAGE_QUERY = `*[_type == "impressum"]{
  ...,
}[0]`;

//#endregion
