import { BlankLayout } from "~/features/app/layouts/BlankLayout";
import { CalendarAddReservationView } from "~/features/adminPanel/views/CalendarAddReservationView";

export function AdminCalendarAddReservation() {
  return (
    <BlankLayout>
      <CalendarAddReservationView />
    </BlankLayout>
  );
}
