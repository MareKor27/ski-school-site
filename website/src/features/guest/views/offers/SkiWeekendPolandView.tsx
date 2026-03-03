import {
  Phone,
  AtSign,
  Globe,
  Hotel,
  ExternalLink,
  Trophy,
  MountainSnow,
  HandCoins,
} from "lucide-react";

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
import {
  CategoryBox,
  CategoryBoxesContener,
  CategoryDescription,
  CategoryIcon,
} from "~/features/app/components/offerBoxCategoryInformation/OfferBoxCategoryInformation";

export function SkiWeekendPolandView() {
  const s = useStyles(style);
  const canonicalUrl = useCanonicalLink();
  return (
    <Contener className="body-arranged-md">
      <Helmet>
        <title>
          Weekend narciarski w Jaworkach - Polska, Szkoła narciarska FigowSki
          Sport
        </title>
        <meta
          name="description"
          content="Figowski Sport organizuje weekend narciarski w Jaworkach. Zapraszamy do zapoznania się z ofertą!"
        />
        <link rel="canonical" href={canonicalUrl} />
      </Helmet>
      <Content className={"content"}>
        <Breadcrums namePage={"Zima-Oferta / Weekend narciarski - Jaworki"} />
        <TextBox>
          <h1>Weekend narciarski w Jaworkach</h1>

          <img
            className={s(`contentimg imgRight`)}
            src="/images/trips/2026/winter/jaworki/jaworki-2026-2.webp"
            alt={"Stok w Jaworkach rano"}
          />
          <h2>5 – 8 III 2026 r.</h2>
          <h3>
            Jaworki-Homole (Pieniny), k. Szczawnicy <br /> Arena Narciarska
            Jaworki-Homole <br /> Pensjonat Willa Hanka
          </h3>
          <p>
            {" "}
            <b> Cześć Narciarze!</b>
          </p>
          <p>
            W górach panuje prawdziwa zima – śniegu nie brakuje, a&nbsp;warunki
            na stoku są&nbsp;wciąż idealne do jazdy. Ferie w prawdzie nam się
            już skończyły, jednak, by&nbsp;móc jeszcze efektywniej wykorzystać
            sezon narciarski, zapraszam do wspólnego wyjazdu i&nbsp;aktywnego
            rodzinnego weekendu na nartach lub snowboardzie 🙂.
          </p>
          <p>
            Wyjazd ma charakter przedłużonego weekendu: wyjazd w&nbsp;czwartek
            po szkole lub po&nbsp;pracy i&nbsp;powrót po niedzielnych nartach –
            3 pełne dni narciarskie na stoku. Szkolenie w&nbsp;grupach lub
            indywidualnie w&nbsp;zależności od zapisów oraz poziomu i&nbsp;wieku
            narciarzy/snowboardzistów.
          </p>
          <p>
            W przypadku rodzin z ograniczoną możliwością wyjazdu w pełnym
            składzie już w&nbsp;czwartek, istnieje możliwość po wcześniejszych
            ustaleniach z&nbsp;rodzicami do przejęcia opieki nad Państwa
            pociechami (w wieku szkolnym) przez naszą kadrę instruktorów. Dzieci
            wówczas wyruszą wcześniej (5 III), by móc
            narciarsko&nbsp;-&nbsp;szkoleniowo spędzić piątek (6 III),
            a&nbsp;rodzic/opiekun dołączy do wspólnych aktywności na&nbsp;stoku
            możliwie jak najszybciej.
          </p>
          <p>
            Weekendowy wyjazd narciarski do malowniczej miejscowości
            <b> Jaworki-Homole</b> w&nbsp;Pieninach, to już sprawdzona kopia
            naszej propozycji z&nbsp;zeszłego sezonu. Bardzo życzliwi
            i&nbsp;gościnni gospodarze w&nbsp;pensjonacie Willa Hanka,
            właściciel Areny Narciarskiej Jaworki oraz gaździna
            z&nbsp;Restauracji Bacówka sprawią, że każdy z&nbsp;Państwa będzie
            miał możliwość w&nbsp;tym kameralnym niezaludnionym ośrodku
            wyjeździć się na nartach, zrelaksować, posmakować regionalnych dań
            oraz aktywnie z&nbsp;rodziną spędzić&nbsp;czas na stoku
            i&nbsp;oczywiście szkoleniowo z&nbsp;naszą kadrą 🙂.
          </p>
        </TextBox>
        <CategoryBoxesContener>
          <CategoryBox classNames={"offer-box-full"}>
            <CategoryIcon>
              <Hotel size={30} strokeWidth={1} />
            </CategoryIcon>

            <CategoryDescription title="ZAKWATEROWANIE">
              <img
                className={s(`contentimg imgRight`)}
                src="/images/trips/2026/winter/jaworki/jaworki-2026-7.webp"
                alt={"Willa Hanka przy Stoku Jaworki"}
              />
              <h6>
                WILLA HANKA{" "}
                <a
                  href="https://www.willahanka.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  link <ExternalLink size={15} strokeWidth={1} />
                </a>
              </h6>

              <h6>Lokalizacja</h6>
              <p>
                ul. Zaskalskie 12 <br />
                24-460 Jaworki k. Szczawnicy <br />
                (przy samym stoku)
              </p>
              <h6>Udogodnienia</h6>
              <ul>
                <li>dostęp do Wi-Fi</li>
                <li>
                  przestronna narciarnia z grzałkami na buty <br /> i dodatkowym
                  miejscem na narty, kije i&nbsp;kaski
                </li>
                <li>miejsca parkingowe na ogrodzonym terenie posesji</li>
                <li>wypożyczalnia sprzętu na&nbsp;terenie pensjonatu</li>
              </ul>
              <h6>Wyżywienie</h6>
              <ul>
                <li>
                  śniadanie we własnym zakresie (pensjonat posiada 2 w pełni
                  wyposażone aneksy kuchenne z&nbsp;dużą przestrzenną
                  jadalnią do spożywania posiłków lub spotkań integracyjnych
                </li>
                <li>
                  lunch na stoku (różnorodne menu na ciepło i&nbsp;zimno
                  w&nbsp;karczmie przy samym wyciągu)
                </li>
                <li>
                  obiad/kolacja: propozycja wykupienia wspólnego posiłku w
                  Restauracji Bacówka (wybór z&nbsp;karty wg Państwa gustu
                  i&nbsp;smaku){" "}
                  <a
                    href="https://www.bacowkajaworki.nrs.pl/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    więcej <ExternalLink size={15} strokeWidth={1} />
                  </a>{" "}
                  <br />
                  (bardzo blisko pensjonatu bez konieczności dojazdu samochodem)
                </li>
              </ul>
            </CategoryDescription>
            {/* <CategoryIcon>
              <Soup size={30} strokeWidth={1} />
            </CategoryIcon>

            <CategoryDescription title="WYŻYWIENIE">
              <ul>
                <li>
                  śniadanie we własnym zakresie (pensjonat posiada 2 w pełni
                  wyposażone aneksy kuchenne z dużą przestrzenną jadalnią do
                  spożywania posiłków lub spotkań integracyjnych
                </li>
                <li>
                  lunch na stoku (różnorodne menu na ciepło i zimno w karczmie
                  przy samym wyciągu)
                </li>
                <li>
                  obiad/kolacja: propozycja wykupienia wspólnego posiłku w
                  Restauracji Bacówka (wybór z karty wg Państwa gustu i smaku){" "}
                  <a
                    href="https://www.bacowkajaworki.nrs.pl/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    więcej <ExternalLink size={15} strokeWidth={1} />
                  </a>{" "}
                  <br />
                  (bardzo blisko pensjonatu bez konieczności dojazdu samochodem)
                </li>
              </ul>
            </CategoryDescription> */}
          </CategoryBox>
          <CategoryBox classNames={"offer-box-full"}>
            <CategoryIcon>
              <Trophy size={30} strokeWidth={1} />
            </CategoryIcon>

            <CategoryDescription title="SZKOLENIE NARCIARSKIE">
              <ul>
                <li>szkoła narciarska z licencją SITN (A+D)</li>
                <li>przedszkole narciarskie dla dzieci</li>
                <li>
                  szkolenie w grupach: ok. 5h dziennie (dla dzieci/młodzieży)
                  z&nbsp;przerwą na lunch w połowie dnia szkolenia
                </li>
                <li>
                  w zależności od zapisów postaramy się stworzyć grupy
                  szkoleniowe z podziałem na wiek i&nbsp;poziom zaawansowania
                  kursantów
                </li>
                <li>
                  możliwość rezerwacji lekcji indywidualnych
                  po&nbsp;wcześniejszym umówieniu
                </li>
                <li>
                  video-coaching - analiza materiału ze szkolenia na stoku
                  podczas wieczornych animacji
                </li>
                <li>
                  możliwość treningu jazdy sportowej na tyczkach dla bardziej
                  zaawansowanych narciarzy i snowboardzistów, w&nbsp;tym osób
                  dorosłych ;-)
                </li>
              </ul>
            </CategoryDescription>
          </CategoryBox>
          <CategoryBox classNames={"offer-box-full"}>
            <CategoryIcon>
              <MountainSnow size={30} strokeWidth={1} />
            </CategoryIcon>

            <CategoryDescription title="CENA WYJAZDU (BEZ SZKOLENIA):">
              <h6>650zł/os. (dziecko lub os. dorosła)</h6>
              <h6>Cena zawiera:</h6>
              <ul>
                <li>3 noclegi w pensjonacie</li>
                <li>
                  3 - dniowy (całodzienny) skipass w Arenie Narciarskiej Jaworki
                  – Homole{" "}
                  <a
                    href="https://www.arenanarciarska.pl/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    więcej <ExternalLink size={15} strokeWidth={1} />
                  </a>{" "}
                </li>
                <li>opiekę organizatora na miejscu</li>
                <li>
                  realizację programu animacyjnego i sportowego przez
                  instruktorów
                </li>
              </ul>
              <h6>Cena nie zawiera:</h6>
              <ul>
                <li>transportu na miejsce i powrót</li>
                <li>wyżywienia</li>
                <li>szkolenia narciarskiego w grupach lub indywidualnie</li>
                <li>
                  opcjonalnie udziału w treningowych przejazdach sportowych na
                  slalomie – trening na tyczkach
                </li>
              </ul>
            </CategoryDescription>
            <CategoryIcon>
              <HandCoins size={30} strokeWidth={1} />
            </CategoryIcon>

            <CategoryDescription title="CENA SZKOLENIA:">
              <ul>
                <li>
                  szkolenie grupowe – dzieci: <b>720 zł/os./3 dni</b>
                </li>
                <li>
                  szkolenie grupowe – dorośli: <b>680 zł/os./3 dni</b> (ok.
                  4,5h/dzień)
                </li>
                <li>
                  szkolenie indywidualne: <b> 130 zł/h</b> (po wcześniejszym
                  umówieniu)
                </li>
                <li>
                  trening na tyczkach: <b>130 zł/os./2h</b> (trening poranny lub
                  popołudniowy)
                </li>
              </ul>
            </CategoryDescription>
          </CategoryBox>
          <CategoryBox classNames={"offer-box-full"}>
            <CategoryIcon>
              <Phone size={30} strokeWidth={1} />
            </CategoryIcon>
            <CategoryDescription title="Rezerwacja i kontakt">
              <p>(rezerwacja do piątku 27.02)</p>
              <br />
              <p>FigowSki Sport</p>
              <p>Michał Jaśkiewicz</p>
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
                  href="https://www.facebook.com/FigowSkiSport"
                  target="_blank"
                  className={s(`offer-box-link`)}
                >
                  <Globe size={15} strokeWidth={1} />{" "}
                  www.facebook.com/FigowSkiSport
                </a>
              </p>
              <br />
              <p>
                Rejestr Organizatorów Turystyki: nr 3007 <br /> Michał
                Jaśkiewicz Figowski Sport
              </p>
            </CategoryDescription>
          </CategoryBox>
        </CategoryBoxesContener>
        <TextBox className={"text-center"}>
          <Gallery galeryName={"jaworki-2026"} />
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
