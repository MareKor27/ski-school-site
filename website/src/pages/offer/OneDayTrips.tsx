import { DefaultLayout } from "~/features/app/layouts/DefaultLayout";
import { OneDayTripsView } from "~/features/guest/views/offer/OneDayTripsView";

export function OneDayTrips() {
  return (
    <DefaultLayout>
      <OneDayTripsView />
    </DefaultLayout>
  );
}
