import { DefaultLayout } from "~/features/app/layouts/DefaultLayout";
import { SkiWeekendPolandView } from "~/features/guest/views/offers/SkiWeekendPolandView";

export function SkiWeekendPoland() {
  return (
    <DefaultLayout>
      <SkiWeekendPolandView />
    </DefaultLayout>
  );
}
