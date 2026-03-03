import { DefaultLayout } from "~/features/app/layouts/DefaultLayout";
import { MainOffertView } from "~/features/guest/views/offers/MainOffertView";

export function MainOffert() {
  return (
    <DefaultLayout>
      <MainOffertView />
    </DefaultLayout>
  );
}
