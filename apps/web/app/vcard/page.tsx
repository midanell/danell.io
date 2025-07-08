import { isFeatureEnabled, FeatureFlagEnum } from "@/server/featureFlags";

export default async function VCardPage() {
  const showVCard = await isFeatureEnabled(FeatureFlagEnum.ShowVCard);
  if (!showVCard) {
    return (
      <div className="flex flex-col items-center justify-items-center gap-16 p-8 pb-20">
        <p>Denied</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-items-center gap-16 p-8 pb-20">
      <p>VCardPage</p>
    </div>
  );
}
