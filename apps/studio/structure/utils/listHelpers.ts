import type { DocumentDefinition } from "sanity";
import { StructureBuilder } from "sanity/structure";

export const createListItems = (typeDefArray: DocumentDefinition[], S: StructureBuilder) => {
  return typeDefArray.map((typeDef) => {
    return S.listItem()
      .title(typeDef.title!)
      .icon(typeDef.icon)
      .child(
        S.editor()
          .id(typeDef.name)
          .title(typeDef.title || "No Title")
          .schemaType(typeDef.name)
          .documentId(typeDef.name),
      );
  });
};
