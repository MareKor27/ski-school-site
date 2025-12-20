import { DefaultLayout } from "~/features/app/layouts/DefaultLayout";
import { WinterView } from "~/features/guest/views/WinterView";

export function Winter() {
  return (
    <DefaultLayout background={{ type: "color", value: "var(--main-color-2)" }}>
      <WinterView />
    </DefaultLayout>
  );
}
