import { ScheduleView } from "~/features/guest/views/ScheduleView";
import { DefaultLayout } from "~/features/app/layouts/DefaultLayout";

export function Schedule() {
  return (
    <DefaultLayout>
      <ScheduleView />
    </DefaultLayout>
  );
}
