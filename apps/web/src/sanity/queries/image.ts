export const IMAGE_QUERY = `{
  ..., 
  asset -> {
    ...,
    ...metadata {
      lqip, // the lqip can be used for blurHashUrl or other low-quality placeholders
      ...dimensions {
        width,
        height
      }
    }
  }
}`;
