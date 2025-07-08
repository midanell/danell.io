import type { BlockText } from "@/sanity/sanity-schema";
import clsx from "clsx";
import { PortableText } from "@portabletext/react";

interface Props {
  value: BlockText;
  className?: string;
}

export default function PortableTextWrapper({ value, className }: Props) {
  return (
    <div className={clsx(["portable", className])}>
      <PortableText value={value} />
    </div>
  );
}
