import { StructureResolver } from "sanity/structure";
import { DocumentIcon } from "@sanity/icons";
import { createListItems } from "./utils/listHelpers";
import home from "../schemaTypes/pages/home";

export const structure: StructureResolver = (S) => {
  const itemsPages = createListItems([home], S);
  const pages = S.listItem()
    .icon(DocumentIcon)
    .title("Pages")
    .child(S.list().title("Pages").items(itemsPages));
  return S.list().title("Content").items([pages]);
};
