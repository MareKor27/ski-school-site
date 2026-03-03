import {
  CircleDollarSign,
  Hotel,
  TicketsPlane,
  Utensils,
  UserStar,
  GamepadDirectional,
  Ticket,
  Umbrella,
  MapPinHouse,
  Phone,
  Link as LinkIcon,
  AtSign,
  Globe,
  ExternalLink,
} from "lucide-react";

import { Helmet } from "react-helmet-async";
import { Breadcrums } from "~/components/breadcrumbs/Breadcrumbs";
import { Contener } from "~/components/contener/Contener";
import { Content } from "~/components/content/Content";
import style from "~/components/content/Content.module.scss";
import { TextBox } from "~/components/textbox/TextBox";
import { useCanonicalLink } from "~/hooks/useCanonicalLink";
import useStyles from "~/hooks/useStyle";
import { Gallery } from "~/components/gallery/Gallery";
import { Link } from "react-router-dom";
import { OfferIntroImage } from "~/features/app/components/offerIntroImage/OfferIntroImage";
import {
  CategoryBoxesContener,
  CategoryBox,
  CategoryDescription,
  CategoryIcon,
  SitnLogos,
} from "~/features/app/components/offerBoxCategoryInformation/OfferBoxCategoryInformation";
// import { ContactForm } from "~/features/app/components/contactForm/ContactForm";

export function WinterTripToItaly2025View() {
  const s = useStyles(style);
  const canonicalUrl = useCanonicalLink();
  return (
    <Contener className="body-arranged-md">
      <Helmet>
        <title>
          Zorganizowany wyjazd do Włoch RAVASCLETTO / ZONCOLAN - FigowSki
        </title>
        <meta
          name="description"
          content="Zorganizowany wyjazd do Włoch RAVASCLETTO / ZONCOLAN wraz z FigowSki Sport - zapraszamy do zapoznania się z ofertą!"
        />
        <link rel="canonical" href={canonicalUrl} />
      </Helmet>
      <Content className={"content"}>
        <Breadcrums namePage={"Zima-Oferta / Ferie I tydzień Włochy 2026"} />
        <TextBox>
          <h1>Oferta Zima 2026 we Włoszech</h1>
          <OfferIntroImage
            srcImage="/images/trips/2026/winter/ravascletto_zoncolan/ravascletto_zoncolan1.webp"
            altImage="Górka Ravascletto Zoncolan we Włoszech"
            title="Region narciarski: RAVASCLETTO / ZONCOLAN"
            srcFlagImage="/images/trips/flag/italy-flag.webp"
            altFlagImage="Flaga włoch"
            dateOfTheTrip="17-24 I 2026"
            description="(I tydzień ferii mazowieckich)"
          />
        </TextBox>
        <CategoryBoxesContener>
          <CategoryBox>
            <CategoryIcon>
              <Hotel size={30} strokeWidth={1} />
            </CategoryIcon>

            <CategoryDescription title="HOTEL">
              <h6>
                HOTEL PARK OASI{" "}
                <a href="https://www.en.hotelparkoasi.it/">
                  link <ExternalLink size={15} strokeWidth={1} />
                </a>
              </h6>
              <h6> Położenie & styl</h6>
              <p>
                Hotel jest usytuowany w w północnych Włoszech w Alpach
                Karnickich w&nbsp;miejscowości Arta Terme. Kameralny obiekt
                restauracyjno-hotelowy, prowadzony przez rodzinę Löwenthal,
                oferuje piękne widoki na&nbsp;góry oraz spokojną, relaksującą
                atmosferę.
              </p>
              <h6>Pokoje</h6>
              <p>
                Pokoje rozmieszczone są na dwóch piętrach, z balkonami lub bez,
                i&nbsp;widokiem na lasy lub góry Carnia.
              </p>
              <h6>Restauracja & bar</h6>
              <p>
                Regionalna i autentyczna kuchnia oraz pyszne, włoskie dania.
                Przestronne wnętrze w rustykalnym stylu tworzy naturalny, górski
                klimat, który można podziwiać przez duże okna, siedząc wygodnie
                przy stoliku hotelowej restauracji.
              </p>
              <h6>Spa / wellness</h6>
              <p>
                Centrum spa hotelu oferuje saunę fińską i łaźnię turecką.
                Dodatkowo hotel wyposażony jest w&nbsp;jaccuzzi
                z&nbsp;hydromasażem w&nbsp;zewnętrznej części strefy spa.
              </p>
              <h6>Udogodnienia</h6>
              <p>
                Bezpłatne Wi‑Fi, parking przy hotelu, bar hotelowy, pralnia,
                taras ogrodowy, narciarnia, skibus spod hotelu
              </p>
              <h6>Idealny dla grupy znajomych</h6>
              <p>
                Idealny dla grupy zorganizowanej i&nbsp;rodzin z&nbsp;dziećmi
              </p>
              <h6>Dostępność zwierząt (pets allowed)</h6>
            </CategoryDescription>

            <CategoryIcon>
              <Utensils size={30} strokeWidth={1} />
            </CategoryIcon>

            <CategoryDescription title="Wyżywienie HB">
              <p>
                <h6>Śniadanie</h6> - kontynentalne, włoskie, bezglutenowe, w
                formie bufetu
              </p>
              <p>
                <h6>Obiadokolacja</h6> - dania kuchni regionalnej, włoskiej oraz
                międzynarodowej
              </p>
            </CategoryDescription>
          </CategoryBox>

          <CategoryBox>
            <CategoryIcon>
              <UserStar size={30} strokeWidth={1} />
            </CategoryIcon>

            <CategoryDescription title="Szkolenie narciarskie">
              <ul>
                <li>szkoła narciarska z licencją SITN (A+D)</li>
                <li>
                  kadra doświadczonych instruktorów z licencją SITN Polskiego
                  Związku Narciarskiego
                </li>
                <li>
                  małe grupy szkoleniowe z podziałem na wiek i poziom
                  zaawansowania
                </li>
                <li>
                  video-coaching - analiza materiału ze szkolenia na stoku
                  podczas animacji
                </li>
                <li>trening jazdy sportowej SL/GS</li>
                <li>zawody narciarskie - slalom/gigant (GS)</li>
              </ul>
              <h6>Szkolenie w grupach:</h6>
              <p>Czas trwania: do 5,5 h dziennie z przerwą na lunch</p>
              <h6>Podział grup narciarskich</h6>
              <ul>
                <li>
                  BABY (3–5 lat) – 4h z instruktorem + 1h animacji na stoku
                </li>
                <li>KIDS (6–7 lat) – 5,0h-5,5h z instruktorem</li>
                <li>JUNIOR (8–13 lat) – 5,0-5,5h z instruktorem</li>
                <li>DOROŚLI – 3,0-3,5h z instruktorem</li>
              </ul>
              <SitnLogos />
            </CategoryDescription>
          </CategoryBox>

          <CategoryBox>
            <CategoryIcon>
              <GamepadDirectional size={30} strokeWidth={1} />
            </CategoryIcon>
            <CategoryDescription title="Program animacyjny">
              <ul>
                <li>animacje dla dzieci po nartach w hotelu</li>
                <li>apres ski</li>
                <li>
                  video-coaching, analiza techniki jazdy na podstawie materiałów
                  ze&nbsp;szkolenia na stoku
                </li>
                <li>
                  opcjonalnie po nartach kąpiele w basenach termalnych (blisko
                  hotelu) -{" "}
                  <a href="https://www.ghcspa.com/termediarta/servizi/cure-termali">
                    więcej&nbsp;
                    <ExternalLink size={15} strokeWidth={1} />
                  </a>
                </li>

                <li>nauka serwisowania sprzętu narciarskiego</li>
                <li>podsumowanie wyników zawodów z nagrodami</li>
              </ul>
            </CategoryDescription>
          </CategoryBox>

          <CategoryBox>
            <CategoryIcon>
              <Ticket size={30} strokeWidth={1} />
            </CategoryIcon>
            <CategoryDescription title="Skipass">
              <p>
                🎫 6 dniowy -{" "}
                <a href="https://www.turismofvg.it/en/mountain365/rates/winter-skipass">
                  wiecej&nbsp;
                  <ExternalLink size={15} strokeWidth={1} />
                </a>
              </p>

              <p>
                <b>Ski Area Ravascletto / Zoncolan</b> (+ 4 dodatkowe stacje
                narciarskie w&nbsp;1&nbsp;karnecie)
              </p>
              <br />
              <ul>
                <li>
                  <b>ok 30 km tras narciarskich</b> - kameralna stacja
                  narciarska, mniej zatłoczona niż inne
                </li>
                <li>
                  <b>wysokość: 900-2000 m n.p.m</b> – gwarancja śniegu
                  i&nbsp;pięknych widoków
                </li>
                <li>
                  trasy dopasowane do każdego narciarza: niebieskie, czerwone,
                  czarne
                </li>
                <li>
                  <b>12 wyciągów narciarskich</b>
                </li>
                <li>
                  ośrodek wyposażony w&nbsp;system sztucznego naśnieżania,
                  zapewniający dobre warunki przez cały sezon możliwość
                </li>
                <li>
                  skorzystania z&nbsp;1&nbsp;karnetu w czterech sąsiadujących
                  stacjach narciarskich
                </li>
                <li>
                  panoramiczna trasa – Lavet-Canalone pozwala na piękny zjazd
                  z&nbsp;widokami
                </li>
                <li>
                  <b>narty biegowe</b> - poza narciarstwem zjazdowym możliwość
                  skorzystania również z&nbsp;narciarskich tras biegowych
                </li>
              </ul>
            </CategoryDescription>
          </CategoryBox>

          <CategoryBox>
            <CategoryIcon>
              <TicketsPlane size={30} strokeWidth={1} />
            </CategoryIcon>
            <CategoryDescription title="WYJAZD RODZINNY">
              <ul>
                <li>zakwaterowanie w hotelu</li>
                <li>
                  szkolenie w małych grupach z polskimi instruktorami, idealne
                  dla rodzin z dziećmi i początkujących narciarzy
                </li>
                <li>restauracja</li>
                <li>strefa spa</li>
                <li>bar</li>
              </ul>
            </CategoryDescription>
          </CategoryBox>

          <CategoryBox>
            <CategoryIcon>
              <CircleDollarSign size={30} strokeWidth={1} />
            </CategoryIcon>
            <CategoryDescription title="CENA">
              <div>
                <h6>👨 OSOBA DOROSŁA – 465 euro/pobyt</h6>
                <h6>🧒 DZIECKO w wieku:</h6>
                <p>0-3 lat: 60 euro/pobyt</p>
                <p>3-7 lat: 285 euro/pobyt</p>
                <p>7-15 lat: 345 euro/pobyt</p>
                <p>14 lat i starsze: 450 euro/pobyt</p>
                <h6>CENA ZAWIERA: </h6>
                <ul>
                  <li>7 noclegów w hotelu</li>
                  <li>wyżywienie HB + woda i herbata do posiłków</li>
                  <li>reallizację programu animacyjnego i sportowego</li>
                  <li>zawody z nagrodami</li>
                  <li>opiekę organizatora na miejscu</li>
                  <li>korzystanie ze strefy wellness</li>
                  <li>podatek VAT</li>
                </ul>
                <h6>CENA NIE ZAWIERA: </h6>
                <ul>
                  <li>transportu na miejsce i powrót</li>
                  <li>skipassu </li>
                  <li>szkolenia narciarskiego</li>
                  <li>napojów do obiadokolacji poza wodą i&nbsp;herbatą</li>
                  <li>lunchy na stoku</li>
                  <li>ubezpieczenia turystycznego i&nbsp;sportowego</li>
                  <li>podatku turystycznego (tourist tax)</li>
                </ul>
              </div>
              <div>
                <h6>DODATKOWE OPŁATY</h6>
                <p>🎫Skipass 6 dniowy</p>
                <p>
                  Ski Area Ravascletto / Zoncolan, Sella Nevea, Tarvisio,
                  Sappada, Forni di&nbsp;Sopra
                </p>
                <ul>
                  <li>BABY (2019-2023 i młodsi): gratis</li>
                  <li>KIDS (2007-2018): 60 euro</li>
                  <li>ADULT (2006-1962): 211 euro</li>
                  <li>SENIOR (1951-1961): 185 euro</li>
                  <li>SENIOR over ‘75: 60 euro</li>
                </ul>
                <h6>👧 Szkolenie - dzieci</h6>
                <ul>
                  <li> BABY (3–5 lat): 445 euro</li>
                  <li>KIDS (6–7 lat): 425 euro</li>
                  <li>JUNIOR (8–13 lat): 395 euro</li>
                </ul>
                <h6>👨 Szkolenie – dorośli</h6>
                <ul>
                  <li>DOROŚLI: 295 euro</li>
                </ul>
                <p>
                  Szkolenie indywidualne dla zainteresowanych – do ustalenia
                  przed wyjazdem
                </p>
                <h6>🧾Lokalny „tourist tax”</h6>
                <ul>
                  <li>1 euro /osoba/doba (dla osób powyżej 12 lat)</li>
                </ul>
              </div>
            </CategoryDescription>
          </CategoryBox>

          <CategoryBox>
            <CategoryIcon>
              <Umbrella size={30} strokeWidth={1} />
            </CategoryIcon>
            <CategoryDescription title="Ubezpieczenia">
              <p>
                🛡️Obowiązkowe: ubezpieczenie podróżne (KL + NNW + AS + OC +
                inne)
              </p>
              <p>
                Zalecane: karta EKUZ – Europejska Karta Ubezpieczenia
                Zdrowotnego (NFZ) <br />
                znacznie ułatwia korzystanie z publicznych placówek medycznych
                UE, w&nbsp;tym we Włoszech
              </p>
            </CategoryDescription>
          </CategoryBox>

          <CategoryBox>
            <CategoryIcon>
              <LinkIcon size={30} strokeWidth={1} />
            </CategoryIcon>
            <CategoryDescription title="Linki">
              <ul>
                <li>
                  <a href="https://www.en.hotelparkoasi.it/" target="_blank">
                    Hotel <ExternalLink size={15} strokeWidth={1} />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.turismofvg.it/en/mountain365/rates/winter-skipass"
                    target="_blank"
                  >
                    Skipass <ExternalLink size={15} strokeWidth={1} />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.turismofvg.it/en/ravascletto-zoncolan/ski-map-ravascletto-zoncolan"
                    target="_blank"
                  >
                    Mapa tras <ExternalLink size={15} strokeWidth={1} />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.ghcspa.com/termediarta/servizi/cure-termali"
                    target="_blank"
                  >
                    Baseny termalne <ExternalLink size={15} strokeWidth={1} />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.google.com/maps/place/Hotel+Park+Oasi/@46.4811311,13.0157253,1044m/data=!3m2!1e3!5s0x477a1df7a341f869:0xa3e92389d2d33fc!4m9!3m8!1s0x477a1df7a28cb80f:0x9050b6481e73aaa!5m2!4m1!1i2!8m2!3d46.4811311!4d13.0183002!16s%2Fg%2F1tfnxf0j?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                  >
                    Pinezka <ExternalLink size={15} strokeWidth={1} />
                  </a>
                </li>
              </ul>
            </CategoryDescription>
          </CategoryBox>

          <CategoryBox>
            <CategoryIcon>
              <MapPinHouse size={30} strokeWidth={1} />
            </CategoryIcon>
            <CategoryDescription title="Adres">
              <p> Hotel Park Oasi</p>
              <p> Viale delle Terme 15</p>
              <p> 33022 Arta Terme (Udine), Włochy</p>
            </CategoryDescription>
          </CategoryBox>

          <CategoryBox>
            <CategoryIcon>
              <Phone size={30} strokeWidth={1} />
            </CategoryIcon>
            <CategoryDescription title="Rezerwacja i kontakt">
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
            </CategoryDescription>
          </CategoryBox>
        </CategoryBoxesContener>
        {/* <ContactForm /> */}
        <TextBox className={"text-center"}>
          <Gallery galeryName={"2026-winter-ravascletto-zoncolan"} />
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
