import { BlankLayout } from "~/features/app/layouts/BlankLayout";
import { CalendarView } from "~/features/adminPanel/views/CalendarView";

export function AdminCalendar() {
  return (
    <BlankLayout>
      <CalendarView />
    </BlankLayout>
  );
}
