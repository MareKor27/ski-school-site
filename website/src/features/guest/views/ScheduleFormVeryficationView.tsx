import { Helmet } from "react-helmet-async";
import { Breadcrums } from "~/components/breadcrumbs/Breadcrumbs";
import { Contener } from "~/components/contener/Contener";
import { Content } from "~/components/content/Content";
import ReservationVerification from "~/features/adminPanel/components/ReservationVerification/ReservationVerification";

import { useCanonicalLink } from "~/hooks/useCanonicalLink";

export function ScheduleFormVeryficationView() {
  const canonicalUrl = useCanonicalLink();
  return (
    <Contener className="body-arranged-md">
      <Helmet>
        <title>Weryfikacja zajęć - FigowSki</title>
        <meta
          name="description"
          content="FigowSki - Weryfikacja zajęć narciarskich i snowboardowych na Górce Szczęśliwickiej."
        />
        <link rel="canonical" href={canonicalUrl} />
      </Helmet>
      <Content className={"content"}>
        <Breadcrums namePage={"Harmonogram / Weryfikacja"} />
        <ReservationVerification />
      </Content>
    </Contener>
  );
}
