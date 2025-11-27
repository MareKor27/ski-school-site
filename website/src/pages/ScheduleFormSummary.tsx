import { DefaultLayout } from "~/features/app/layouts/DefaultLayout";
import { ScheduleFormSummaryView } from "~/features/guest/views/ScheduleFormSummaryView";

export function ScheduleFormSummary() {
  return (
    <DefaultLayout>
      <ScheduleFormSummaryView />
    </DefaultLayout>
  );
}
