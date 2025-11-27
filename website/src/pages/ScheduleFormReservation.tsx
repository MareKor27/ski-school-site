import { DefaultLayout } from "~/features/app/layouts/DefaultLayout";
import { ScheduleFormReservationView } from "~/features/guest/views/ScheduleFormReservationView";

export function ScheduleFormReservation() {
  return (
    <DefaultLayout>
      <ScheduleFormReservationView />
    </DefaultLayout>
  );
}
