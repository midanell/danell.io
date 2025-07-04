import { type SanityImageSource } from "@sanity/image-url/lib/types/types";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "./client";

const builder = imageUrlBuilder(client);

/**
 * Can be accessed from the client side.
 *
 * Uses simplified client without api tokens,
 * to ensure API READ KEY does not leak to client.
 *
 * Important, do not change to server/client import!
 */
export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}
