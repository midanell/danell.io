import ReloadButton from "@/ui/buttons/reloadButton";
import { Suspense } from "react";

export default function Error() {
  return (
    <div className="flex flex-col items-center justify-items-center gap-16 p-8 pb-20">
      <div>Could not load information, please try again.</div>
      <Suspense>
        <ReloadButton />
      </Suspense>
    </div>
  );
}
