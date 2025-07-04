import { IMAGE_QUERY } from "./image";

export const SEO_QUERY = `
    metaTitle,
    metaDescription,
    metaImage ${IMAGE_QUERY},
    noindex,
    nofollow,
    keywords,
    synonyms,
 `;
