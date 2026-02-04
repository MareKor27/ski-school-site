import { Helmet } from "react-helmet-async";
import { Breadcrums } from "~/components/breadcrumbs/Breadcrumbs";
import { Contener } from "~/components/contener/Contener";
import { Content } from "~/components/content/Content";
import { TextBox } from "~/components/textbox/TextBox";
import { useCanonicalLink } from "~/hooks/useCanonicalLink";

export function StatuteView() {
  const canonicalUrl = useCanonicalLink();
  return (
    <Contener className="body-arranged-md">
      <Helmet>
        <title>
          Galeria | Nasze zdjęcia z zajęć narciarskich i snowboardowych -
          FigowSki
        </title>
        <link rel="canonical" href={canonicalUrl} />
        <meta
          name="description"
          content="Odwiedź naszą galerię, aby zobaczyć zdjęcia z naszych zajęć nauki jazdy na nartach i snowboardzie. Przekonaj się, dlaczego warto dołączyć do naszej szkoły narciarskiej!"
        />
      </Helmet>
      <Content className={"content"}>
        <Breadcrums namePage={"Regulamin"} />
        <TextBox>
          <h1>Regulamin</h1>
          <p>§ 1. Postanowienia ogólne</p>
        </TextBox>
      </Content>
    </Contener>
  );
}
