import { StructureResolver } from "sanity/structure";
import { DocumentIcon } from "@sanity/icons";
import { createListItems } from "./utils/listHelpers";
import home from "../schemaTypes/pages/home";
import impressum from "../schemaTypes/pages/impressum";
import contact from "../schemaTypes/pages/contact";

export const structure: StructureResolver = (S) => {
  const itemsPages = createListItems([home, impressum, contact], S);
  const pages = S.listItem()
    .icon(DocumentIcon)
    .title("Pages")
    .child(S.list().title("Pages").items(itemsPages));
  return S.list().title("Content").items([pages]);
};
