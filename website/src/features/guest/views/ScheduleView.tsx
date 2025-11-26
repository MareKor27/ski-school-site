import { Helmet } from "react-helmet-async";
import { Breadcrums } from "~/components/breadcrumbs/Breadcrumbs";
import { Contener } from "~/components/contener/Contener";
import { Content } from "~/components/content/Content";
import { TextBox } from "~/components/textbox/TextBox";
import { CalendarTable } from "~/features/adminPanel/components/Schedule/CalendarTable/CalendarTable";
import { useCanonicalLink } from "~/hooks/useCanonicalLink";

export function ScheduleView() {
  const canonicalUrl = useCanonicalLink();
  return (
    <Contener className="body-arranged-md">
      <Helmet>
        <title>Harmonogram Zajęć - FigowSki</title>
        <meta
          name="description"
          content="FigowSki - Harmonogram zajęć narciarskich i snowboardowych na Górce Szczęśliwickiej. Sprawdź dostępne terminy lekcji indywidualnych i grupowych."
        />
        <link rel="canonical" href={canonicalUrl} />
      </Helmet>
      <Content className={"content"}>
        <Breadcrums namePage={"Harmonogram"} />
        <TextBox>
          <h1>Harmonogram Zajęć</h1>
          <p>
            Zapoznaj się z naszym aktualnym harmonogramem zajęć narciarskich i
            snowboardowych na Górce Szczęśliwickiej. Wybierz dogodny termin
            lekcji indywidualnych lub grupowych i rozpocznij swoją przygodę z
            zimowymi sportami!
          </p>
        </TextBox>
        <CalendarTable />
      </Content>
    </Contener>
  );
}
