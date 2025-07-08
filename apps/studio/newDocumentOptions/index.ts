import { NewDocumentOptionsContext, TemplateItem } from "sanity";
import { onlyPublishAndUpdateSchemaTypes } from "../schemaTypes/utils";

export default function resolveNewDocumentOptions(
  prev: TemplateItem[],
  { creationContext }: NewDocumentOptionsContext,
) {
  if (creationContext.type === "global") {
    return prev.filter(
      (templateItem) => !onlyPublishAndUpdateSchemaTypes.includes(templateItem.templateId),
    );
  }
  return prev;
}
