import type { VcardInfo } from "@/sanity/sanity-schema";
import vCardsJS from "vcards-js";

export const createVcard = (vcardInfo: VcardInfo): string => {
  const vCard = vCardsJS();
  vCard.firstName = vcardInfo.firstName;
  vCard.lastName = vcardInfo.lastName;
  vCard.organization = vcardInfo.organization;
  vCard.title = vcardInfo.title;
  vCard.email = vcardInfo.email;
  vCard.workPhone = vcardInfo.phone;
  vCard.url = vcardInfo.website;
  return vCard.getFormattedString();
};
