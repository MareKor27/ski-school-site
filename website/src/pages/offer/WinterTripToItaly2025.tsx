import { DefaultLayout } from "~/features/app/layouts/DefaultLayout";
import { WinterTripToItaly2025View } from "~/features/guest/views/offer/WinterTripToItaly2025View";

export function WinterTripToItaly2025() {
  return (
    <DefaultLayout background={{ type: "color", value: "var(--main-color-2)" }}>
      <WinterTripToItaly2025View />
    </DefaultLayout>
  );
}
