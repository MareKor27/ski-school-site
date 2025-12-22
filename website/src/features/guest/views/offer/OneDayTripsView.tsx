import { Phone, AtSign, Globe } from "lucide-react";

import { Helmet } from "react-helmet-async";
import { Breadcrums } from "~/components/breadcrumbs/Breadcrumbs";
import { Contener } from "~/components/contener/Contener";
import { Content } from "~/components/content/Content";
import style from "~/components/content/Content.module.scss";
import { Gallery } from "~/components/gallery/Gallery";
import { TextBox } from "~/components/textbox/TextBox";
import { useCanonicalLink } from "~/hooks/useCanonicalLink";
import useStyles from "~/hooks/useStyle";
import { Link } from "react-router-dom";

export function OneDayTripsView() {
  const s = useStyles(style);
  const canonicalUrl = useCanonicalLink();
  return (
    <Contener className="body-arranged-md">
      <Helmet>
        <title>Wyjazdy jednodniowe - Szkoła narciarska FigowSki Sport</title>
        <meta
          name="description"
          content="Figowski Sport organizuje wyjazdy jednodniowe, pólkolonie oraz jednodniówki zapraszamy do zapoznania się z ofertą!"
        />
        <link rel="canonical" href={canonicalUrl} />
      </Helmet>
      <Content className={"content"}>
        <Breadcrums namePage={"Zima-Oferta / Wyjazdy jednodniowe"} />
        <TextBox>
          <h1>Wyjazdy jednodniowe razem z Figowski Sport</h1>
          <img
            className={s(`contentimg imgRight`)}
            src="/images/gallery/sabat-krajno/sabat-krajno-1.webp"
            alt={"Górka Szczęśliwicka z rana"}
          />
          <p>
            W ramach uatrakcyjnienia naszej oferty, organizujemy jednodniowe
            wyjazdy narciarskie, które łączą profesjonalne szkolenie dla dzieci,
            młodzieży i&nbsp;dorosłych z&nbsp;integracją oraz aktywnym
            wypoczynkiem na&nbsp;świeżym powietrzu. To doskonała alternatywa dla
            osób, które z&nbsp;różnych powodów nie mogą skorzystać
            z&nbsp;kilkudniowych wyjazdów w&nbsp;góry.
          </p>

          <h2>Kilka słów o ofercie</h2>
          <p>W ramach wyjazdu oferujemy:</p>
          <ul>
            <li>
              jednodniowe szkolenie narciarskie orgaznizowane w&nbsp;pobliżu
              Warszawy przez naszą Licencjonowaną Szkołę Narciarską Figowski
              Sport SITN PZN
            </li>
            <li>całodniową opiekę przez naszych doświadczonych instruktorów</li>
            <li>
              możliwość zorganizowania dojazdu przez Szkołę Figowski Sport lub
              wybór dojazdu własnego
            </li>
            <li>lunch na stoku w&nbsp;trakcie szkolenia</li>
            <li>realizację Programu Nauczania Narciarstwa SITN PZN</li>
            <li>
              przedszkole narciarskie dla dzieci 4-6&nbsp;lat
              <br />
              (Sitnusiowy System Nauczania Narciarstwa Dzieci)
            </li>
            <li>
              możliwość wypożyczenia sprzętu narciarskiego na&nbsp;czas
              szkolenia
            </li>
            <li>
              pełne zaplecze formalne: licencja Szkoły Narciarskiej, licencja
              transportowa na przewóz osób oraz wpis do Rejestru Organizatorów
              Turystyki w Urzędzie Marszałkowskim
            </li>
          </ul>
          <h2>MIEJSCE - Stacja narciarska blisko Warszawy</h2>
          <p>
            Szkolenia realizowane są – w zależności od warunków śniegowych, w
            jednej z poniższych lokalizacji:
          </p>

          <h3>SABAT KRAJNO / RYBNO / SZWAJCARIA BAŁTOWSKA / KAZIMIERZ DOLNY</h3>

          <h2>TERMINY*</h2>
          <h3>Grudzień</h3>
          <div className={s("offer-dates-grid")}>
            <div className={s("date-grid")}>29.12.2025</div>
            <div className={s("date-grid")}>30.12.2025</div>
            <div className={s("date-grid")}>31.12.2025</div>
          </div>
          <h3>Styczeń</h3>
          <div className={s("offer-dates-grid")}>
            <div className={s("date-grid")}>02.01.2026</div>
            <div className={s("date-grid")}>03.01.2026</div>
            <div className={s("date-grid")}>04.01.2026</div>
            <div className={s("date-grid")}>05.01.2026</div>
            <div className={s("date-grid")}>09.01.2026</div>
            <div className={s("date-grid")}>10.01.2026</div>
            <div className={s("date-grid")}>11.01.2026</div>
            <div className={s("date-grid")}>26.01.2026</div>
            <div className={s("date-grid")}>27.01.2026</div>
            <div className={s("date-grid")}>28.01.2026</div>
            <div className={s("date-grid")}>29.01.2026</div>
            <div className={s("date-grid")}>30.01.2026</div>
            <div className={s("date-grid")}>31.01.2026</div>
          </div>
          <h3>Luty</h3>
          <div className={s("offer-dates-grid")}>
            <div className={s("date-grid")}>01.02.2026</div>
          </div>
          <p>
            * możliwa zmiana terminów
            <br />* realizacja oferty uzależniona jest od otwarcia stacji
            narciarskich, warunków śniegowych na stokach oraz zapisu minimalnej
            liczby osób w&nbsp;grupie
          </p>

          <h2>SZKOLENIE NARCIARSKIE (4-4,5h dziennie)</h2>
          <ul>
            <li>
              szkolenie w grupach z podziałem na wiek i poziom umiejętności
              kursantów (grupy 4-6 osób)
            </li>
            <li>
              szkolenie indywidualne* – 100% uwagi instruktora, zalecane w
              szczególności dla początkujących
            </li>
            <li>
              realizujemy sprawdzony System Nauczania Narciarstwa Dzieci SITN,
              oparty na stopniowym zdobywaniu umiejętności narciarskich bez
              rywalizacji, ze wskazaniem na zabawę i integrację.
            </li>
          </ul>
          <p>
            *lekcje indywidualne realizowane po wcześniejszym umówieniu, koszt
            130 zł/h
          </p>

          <h2>SKIPASS</h2>
          <ul>
            <li>
              całodniowy karnet narciarski w cenie wyjazdu i szkolenia grupowego
            </li>
            <li>
              skipass przekazujemy uczestnikom przed rozpoczęciem szkolenia
            </li>
          </ul>
          <h2>WYŻYWIENIE</h2>
          <ul>
            <li>
              w połowie szkolenia obowiązuje przerwa na lunch (ok. 45-60 minut)
            </li>
            <li>posiłek oferowany jest w restauracji lub barze przy stoku</li>
            <li>
              menu dobieramy zgodnie z preferencjami i możliwościami
              żywieniowymi uczestników
            </li>
          </ul>
          <h2>DOJAZD</h2>
          <ul>
            <li>
              organizujemy dla grupy dojazd i powrót z opieką instruktorów
            </li>
            <li>
              wyjazd ok. godz. 8:00 z ustalonego miejsca (np. Górka
              Szczęśliwicka, Decathlon Bemowo lub inne)
            </li>
            <li>powrót ok. godz. 19:00</li>
            <li>
              istnieje możliwość dojazdu własnego i dołączenia do grup
              szkoleniowych bezpośrednio przy wyciągu
            </li>
          </ul>
          <h2 className={s("trip-price")}>CENA: 395 zł</h2>

          <h3>CENA ZAWIERA</h3>
          <ul>
            <li>realizację programu szkolenia narciarskiego w grupie</li>
            <li>
              całodzienną opiekę instruktora (przed i po zajęciach na stoku oraz
              podczas transportu)
            </li>
            <li>skipass - całodzienny karnet narciarski</li>
            <li>podatek VAT</li>
          </ul>
          <h3>CENA NIE ZAWIERA</h3>
          <ul>
            <li>
              opłaty za lunch na stoku (<b>ok. 30 zł</b>)
            </li>
            <li>
              wynajmu sprzętu narciarskiego (<b>50 zł/dzień</b>)
            </li>
            <li>
              transportu - dojazd i powrót (<b>95 zł</b>)
            </li>
          </ul>
          <h2>REZERWACJA I KONTAKT</h2>
          <div>
            <p>Michał Jaśkiewicz - kierownik szkoły narciarskiej</p>
            <p>
              <a href="tel:+48517933264" className={s(`offer-box-link`)}>
                <Phone size={15} strokeWidth={1} /> +48 517 933 264
              </a>
            </p>
            <p>
              <a
                href="mailto:figowskisport@gmail.com"
                className={s(`offer-box-link`)}
              >
                <AtSign size={15} strokeWidth={1} /> figowskisport@gmail.com
              </a>
            </p>
            <p>
              <a
                href="www.facebook.com/FigowSkiSport"
                className={s(`offer-box-link`)}
              >
                <Globe size={15} strokeWidth={1} />{" "}
                www.facebook.com/FigowSkiSport
              </a>
            </p>
          </div>
        </TextBox>
        <TextBox className={"text-center"}>
          <Gallery galeryName={"sabat-krajno"} />
          <h2>
            <Link to="/kontakt">
              Zapraszamy do kontaktu i&nbsp;do&nbsp;zobaczenia na stoku!{" "}
            </Link>
          </h2>
        </TextBox>
      </Content>
    </Contener>
  );
}
