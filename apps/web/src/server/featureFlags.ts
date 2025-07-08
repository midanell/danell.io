import "server-only";

export const isFeatureEnabled = async (flag: FeatureFlagEnum): Promise<boolean> => {
  return process.env[flag] === "true";
};

export enum FeatureFlagEnum {
  ShowVCard = "FF_SHOW_VCARD",
}
