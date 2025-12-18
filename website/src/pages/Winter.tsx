import { DefaultLayout } from "~/features/app/layouts/DefaultLayout";
import { WinterView } from "~/features/guest/views/WinterView";

export function Winter() {
  return (
    <DefaultLayout>
      <WinterView />
    </DefaultLayout>
  );
}
