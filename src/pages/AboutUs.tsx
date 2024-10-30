import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Breadcrums } from "~/components/breadcrumbs/Breadcrumbs";
import { Contener } from "~/components/contener/Contener";
import { Content } from "~/components/content/Content";
//import style from "~/components/content/Content.module.scss";
import { TextBox } from "~/components/textbox/TextBox";
//import useStyles from "~/hooks/useStyle";

export function AboutUs() {
  //  const s = useStyles(style);
  return (
    <Contener className="body-arranged-md">
      <Helmet>
        <title>Poznaj nas | Nasza historia, misja i zespół - FigowSki</title>
        <meta
          name="description"
          content="Poznaj FigowSki - profesjonalną szkołę narciarską z Warszawy. Zapraszamy na Górkę Szczęśliwicką, gdzie uczymy jazdy na nartach i snowboardzie."
        />
      </Helmet>
      <Content className={"content"}>
        <Breadcrums namePage={"O nas"} />
        <TextBox>
          <h1>
            Poznaj Szkołe Narciarska Figowski Sport na Górce Szczęśliwickiej
          </h1>
          <p>
            Poznaj Szkołe Narciarska Figowski Sport na Górce Szczęśliwickiej Od
            kilku lat kadra instruktorów z licencją SITN PZN oraz SITS z pasją i
            zaangażowaniem realizuje proces{" "}
            <b>nauczaniu narciarstwa oraz snowboardu</b> wśród dzieci, młodzieży
            oraz dorosłych na “Górce Szczęśliwickiej”.
          </p>
          <p>
            Michał Jaśkiewicz - kierownik szkoły swoje doświadczenie
            instruktorskie zdobywał już w szeregach studentów wychowania
            fizycznego i nieustannie do dziś jego celem jest dzielenie się
            własną pasja oraz doświadczeniem,{" "}
            <Link to="/galeria">
              tworząc tym samym z młodych I aktywnych ludzi wspaniałych
              narciarzy.
            </Link>
          </p>
          <p>
            Misją szkoły narciarskiej Figowski Sport jest dostarczanie wysokiej
            jakości usług szkoleniowych z zakresu{" "}
            <b>narciarstwa i snowboardu</b>, które nie tylko uczą techniki
            jazdy, ale również inspirują i integrują społeczność narciarską.
            Chcemy, aby każdy kursant doświadczył radości I satysfakcji podczas
            swoich lekcji i <b>treningów na stoku</b>.
          </p>
          <p>
            Zaufaj naszym instruktorom, którzy są aktywni zarówno zimą jak i
            latem. Zawsze z przyjemnością podzielą się z Wami swoją wiedzą i
            umiejętnościami. Dobiorę metodycznie I odpowiedzialne właściwe
            metody nauczania, a to wszystko po to, by każdy nasz kursant mógł
            poczuć się z nami bezpiecznie, a w konsekwencji samodzielnie mógł
            przemierzać dowolnie wybrane przez siebie trasy narciarskie.
          </p>
          <p>
            Znajdziesz nas przy samym stoku narciarskim w głownym budynku
            Aktywnej Warszawy - Górka Szczęśliwicka (poziom -1), adres:{" "}
            <b>ul. Drawska 22 w Warszawie (dzielnica Ochota)</b>. Wokół stoku
            otacza nas malowniczy krajobraz Parku Szczęśliwice, z którego nawet
            podczas spaceru również będziesz mógł nas dostrzec.{" "}
            <Link to="/kontakt">Zapraszamy do kontaktu !</Link> I do zobaczenia
            na stoku!
          </p>
        </TextBox>
      </Content>
    </Contener>
  );
}
