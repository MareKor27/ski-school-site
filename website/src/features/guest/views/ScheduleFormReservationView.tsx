import { Helmet } from "react-helmet-async";
import { Breadcrums } from "~/components/breadcrumbs/Breadcrumbs";
import { Contener } from "~/components/contener/Contener";
import { Content } from "~/components/content/Content";
import { CalendarAddReservation } from "~/features/adminPanel/components/CalendarAddReservation.tsx/CalendarAddReservation";
import { Paths } from "~/features/app/constants/Paths";

import { useCanonicalLink } from "~/hooks/useCanonicalLink";

export function ScheduleFormReservationView() {
  const canonicalUrl = useCanonicalLink();
  return (
    <Contener className="body-arranged-md">
      <Helmet>
        <title>Rezerwacja zajęć - FigowSki</title>
        <meta
          name="description"
          content="FigowSki - Rezerwacja zajęć narciarskich i snowboardowych na Górce Szczęśliwickiej."
        />
        <link rel="canonical" href={canonicalUrl} />
      </Helmet>
      <Content className={"content"}>
        <Breadcrums namePage={"Harmonogram / Rezerwacja"} />
        <CalendarAddReservation
          getSummaryLink={Paths.SCHEDULE.RESERVATION_SUMMARY.absolute}
        />
      </Content>
    </Contener>
  );
}
