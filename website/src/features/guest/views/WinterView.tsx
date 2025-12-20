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

import gallery from "~/data/gallery.json";

export function WinterView() {
  const s = useStyles(style);
  const canonicalUrl = useCanonicalLink();
  return (
    <Contener className="body-arranged-md">
      <Helmet>
        <title>Wyjazd RAVASCLETTO / ZONCOLAN - FigowSki</title>
        <meta
          name="description"
          content="Wyjazd RAVASCLETTO / ZONCOLAN wraz z FigowSki Sport - zapraszamy do zapoznania się z ofertą!"
        />
        <link rel="canonical" href={canonicalUrl} />
      </Helmet>
      <Content className={"content"}>
        <Breadcrums namePage={"Oferta-Zima"} />
        <TextBox>
          <h1>Oferta Zima 2026 w Włoszech</h1>
          <img
            className={s(`contentimg imgFull`)}
            src="images/trips/2026/winter/ravascletto_zoncolan/ravascletto_zoncolan1.webp"
            alt={"Górka Szczęśliwicka z rana"}
          />
          <h2>Region narciarski: RAVASCLETTO / ZONCOLAN</h2>
          <img
            className={s(`flag`)}
            src="images/trips/flag/italy-flag.png"
            alt="Włoskie góry"
          />
          <h3>Termin: 17-24.01.2026</h3>
          <h3>(I tydzień ferii mazowieckich)</h3>
        </TextBox>
        <div className={s(`offer-contener`)}>
          <div className={s(`offer-box`)}>
            <div className={s(`offer-box-icon`)}>
              <Hotel size={30} strokeWidth={1} />
            </div>
            <div>
              <h4>HOTEL </h4>
              {/* <h5>
                HOTEL PARK OASI{" "}
                <a href="https://www.en.hotelparkoasi.it/">
                  link <ExternalLink size={15} strokeWidth={1} />
                </a>
              </h5> */}
              <div className={s(`offer-box-content`)}>
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
                  Pokoje rozmieszczone są na dwóch piętrach, z balkonami lub
                  bez, i&nbsp;widokiem na lasy lub góry Carnia.
                </p>
                <h6>Restauracja & bar</h6>
                <p>
                  Regionalna i autentyczna kuchnia oraz pyszne, włoskie dania.
                  Przestronne wnętrze w rustykalnym stylu tworzy naturalny,
                  górski klimat, który można podziwiać przez duże okna, siedząc
                  wygodnie przy stoliku hotelowej restauracji.
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
              </div>
            </div>
            <div className={s(`offer-box-icon`)}>
              <Utensils size={30} strokeWidth={1} />
            </div>
            <div>
              <h4>Wyżywienie HB </h4>
              {/* <h5>half board</h5> */}
              <div className={s(`offer-box-content`)}>
                <p>
                  <h6>Śniadanie</h6> - kontynentalne, włoskie, bezglutenowe, w
                  formie bufetu
                </p>
                <p>
                  <h6>Obiadokolacja</h6> - dania kuchni regionalnej, włoskiej
                  oraz międzynarodowej
                </p>
              </div>
            </div>
          </div>

          <div className={s(`offer-box`)}>
            <div className={s(`offer-box-icon`)}>
              <UserStar size={30} strokeWidth={1} />
            </div>
            <div>
              <h4>Szkolenie narciarskie </h4>
              {/* <h5>z polskimi instruktorami</h5> */}
              <div className={s(`offer-box-content`)}>
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
                <div className={s(`offer-sitn-logos`)}>
                  <img
                    className={s(`offer-sitn-logo`)}
                    src="/images/licenses/sitnus-logo.png"
                    alt=""
                  />
                  <img
                    className={s(`offer-sitn-logo`)}
                    src="/images/licenses/sitn-25-26.png"
                    alt=""
                  />
                  <img
                    className={s(`offer-sitn-logo`)}
                    src="/images/licenses/sitn-logo.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>

          <div className={s(`offer-box`)}>
            <div className={s(`offer-box-icon`)}>
              <GamepadDirectional size={30} strokeWidth={1} />
            </div>
            <div>
              <h4>Program animacyjny </h4>
              {/* <h5>dla dzieci i dorosłych</h5> */}
              <div className={s(`offer-box-content`)}>
                <ul>
                  <li>animacje dla dzieci po nartach w hotelu</li>
                  <li>apres ski</li>
                  <li>
                    video-coaching, analiza techniki jazdy na podstawie
                    materiałów ze&nbsp;szkolenia na stoku
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
              </div>
            </div>
          </div>

          <div className={s(`offer-box`)}>
            <div className={s(`offer-box-icon`)}>
              <Ticket size={30} strokeWidth={1} />
            </div>
            <div>
              <h4>Skipass </h4>
              {/* <h5>karnet narciarski</h5> */}
              <div className={s(`offer-box-content`)}>
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
              </div>
            </div>
          </div>

          <div className={s(`offer-box`)}>
            <div className={s(`offer-box-icon`)}>
              <TicketsPlane size={30} strokeWidth={1} />
            </div>
            <div>
              <h4>WYJAZD RODZINNY </h4>
              {/* <h5>kilka słów o ofercie</h5> */}
              <div className={s(`offer-box-content`)}>
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
              </div>
            </div>
          </div>

          <div className={s(`offer-box-full`)}>
            <div className={s(`offer-box-icon`)}>
              <CircleDollarSign size={30} strokeWidth={1} />
            </div>
            <div>
              <h4>CENA</h4>
              {/* <h5>szczegóły cennika</h5> */}
              <div className={s(`offer-box-content`)}>
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
              </div>
            </div>
          </div>

          <div className={s(`offer-box`)}>
            <div className={s(`offer-box-icon`)}>
              <Umbrella size={30} strokeWidth={1} />
            </div>
            <div>
              <h4>Ubezpieczenia </h4>
              {/* <h5>bezpieczeństwo uczestników</h5> */}
              <div className={s(`offer-box-content`)}>
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
              </div>
            </div>
          </div>

          <div className={s(`offer-box`)}>
            <div className={s(`offer-box-icon`)}>
              <LinkIcon size={30} strokeWidth={1} />
            </div>
            <div>
              <h4>Linki </h4>
              {/* <h5>przydatne informacje</h5> */}
              <div className={s(`offer-box-content`)}>
                <ul>
                  <li>
                    <a href="https://www.en.hotelparkoasi.it/">
                      Hotel <ExternalLink size={15} strokeWidth={1} />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.turismofvg.it/en/mountain365/rates/winter-skipass">
                      Skipass <ExternalLink size={15} strokeWidth={1} />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.turismofvg.it/en/ravascletto-zoncolan/ski-map-ravascletto-zoncolan">
                      Mapa tras <ExternalLink size={15} strokeWidth={1} />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.ghcspa.com/termediarta/servizi/cure-termali">
                      Baseny termalne <ExternalLink size={15} strokeWidth={1} />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.google.com/maps/place/Hotel+Park+Oasi/@46.4811311,13.0157253,1044m/data=!3m2!1e3!5s0x477a1df7a341f869:0xa3e92389d2d33fc!4m9!3m8!1s0x477a1df7a28cb80f:0x9050b6481e73aaa!5m2!4m1!1i2!8m2!3d46.4811311!4d13.0183002!16s%2Fg%2F1tfnxf0j?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D">
                      Pinezka <ExternalLink size={15} strokeWidth={1} />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className={s(`offer-box`)}>
            <div className={s(`offer-box-icon`)}>
              <MapPinHouse size={30} strokeWidth={1} />
            </div>
            <div>
              <h4>Adres </h4>
              {/* <h5>lokalizacja hotelu</h5> */}
              <div className={s(`offer-box-content`)}>
                <p> Hotel Park Oasi</p>
                <p> Viale delle Terme 15</p>
                <p> 33022 Arta Terme (Udine), Włochy</p>
              </div>
            </div>
          </div>

          <div className={s(`offer-box-full`)}>
            <div className={s(`offer-box-icon`)}>
              <Phone size={30} strokeWidth={1} />
            </div>
            <div>
              <h4>Rezerwacja i kontakt </h4>
              {/* <h5>skontaktuj się z nami</h5> */}
              <div className={s(`offer-box-content`)}>
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
                    href="www.facebook.com/FigowSkiSport"
                    className={s(`offer-box-link`)}
                  >
                    <Globe size={15} strokeWidth={1} />{" "}
                    www.facebook.com/FigowSkiSport
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <TextBox className={"text-center"}>
          <Gallery
            photos={gallery.filter(
              (img) => img.gallery === "2026-winter-ravascletto-zoncolan"
            )}
          />
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
