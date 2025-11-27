import { Helmet } from "react-helmet-async";
import { Breadcrums } from "~/components/breadcrumbs/Breadcrumbs";
import { Contener } from "~/components/contener/Contener";
import { Content } from "~/components/content/Content";
import ReservationSummary from "~/features/adminPanel/components/ReservationSummary/ReservationSummary";

import { useCanonicalLink } from "~/hooks/useCanonicalLink";

export function ScheduleFormSummaryView() {
  const canonicalUrl = useCanonicalLink();
  return (
    <Contener className="body-arranged-md">
      <Helmet>
        <title>Podsumowanie rezerwacji zajęć - FigowSki</title>
        <meta
          name="description"
          content="FigowSki - Podsumowanie rezerwacji zajęć"
        />
        <link rel="canonical" href={canonicalUrl} />
      </Helmet>
      <Content className={"content"}>
        <Breadcrums namePage={"Harmonogram / Podsumowanie"} />
        <ReservationSummary />
      </Content>
    </Contener>
  );
}
