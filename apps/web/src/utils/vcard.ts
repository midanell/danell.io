import vCardsJS from "vcards-js";

export const createVcard = (): string => {
  const vCard = vCardsJS();
  vCard.firstName = "Mikael";
  vCard.lastName = "Danell";
  vCard.organization = "Danell.IO";
  vCard.title = "Freelance Senior Software Engineer";
  vCard.email = "mikael@danell.io";
  vCard.workPhone = "+4917630626118";
  vCard.url = "https://www.danell.io";
  return vCard.getFormattedString();
};
