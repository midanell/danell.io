import { isFeatureEnabled, FeatureFlagEnum } from "@/server/featureFlags";
import Image from "next/image";
import QRCode from "qrcode";
import { createVcard } from "@/utils/vcard";

export default async function VCardPage() {
  const showVCard = await isFeatureEnabled(FeatureFlagEnum.ShowVCard);
  if (!showVCard) {
    return (
      <div className="flex flex-col items-center justify-items-center gap-16 p-8 pb-20">
        <p>Denied</p>
      </div>
    );
  }

  const vcard = await QRCode.toDataURL(createVcard(), qrConfig);
  return (
    <div className="flex flex-col items-center justify-items-center gap-16 p-8 pb-20">
      <Image src={vcard} alt="VCard" width={200} height={200} />
    </div>
  );
}

const qrConfig = {
  color: {
    dark: "#00F",
    light: "#FFF",
  },
  width: 200,
  height: 200,
};
