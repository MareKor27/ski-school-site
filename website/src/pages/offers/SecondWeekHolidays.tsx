import { DefaultLayout } from "~/features/app/layouts/DefaultLayout";
import { SecondWeekHolidaysView } from "~/features/guest/views/offers/SecondWeekHolidays";

export function SecondWeekHolidays() {
  return (
    <DefaultLayout>
      <SecondWeekHolidaysView />
    </DefaultLayout>
  );
}
