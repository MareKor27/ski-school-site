import { DefaultLayout } from "~/features/app/layouts/DefaultLayout";
import { PriceListView } from "~/features/guest/views/PriceListView";

export function PriceList() {
  return (
    <DefaultLayout>
      <PriceListView />
    </DefaultLayout>
  );
}
