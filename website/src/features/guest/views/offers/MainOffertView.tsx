import { CalendarFold, MapPin } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Breadcrums } from "~/components/breadcrumbs/Breadcrumbs";
import { Contener } from "~/components/contener/Contener";
import { Content } from "~/components/content/Content";
import style from "~/components/content/Content.module.scss";
import { TextBox } from "~/components/textbox/TextBox";
import { useCanonicalLink } from "~/hooks/useCanonicalLink";
import useStyles from "~/hooks/useStyle";
import { Link } from "react-router-dom";
import { Paths } from "~/features/app/constants/Paths";

export function MainOffertView() {
  const s = useStyles(style);
  const canonicalUrl = useCanonicalLink();
  return (
    <Contener className="body-arranged-md">
      <Helmet>
        <title>Oferta Zimowa - FigowSki Sport</title>
        <meta
          name="description"
          content="Figowski Sport organizuje wyjazdy jednodniowe, półkolonie oraz jednodniówki zapraszamy do zapoznania się z ofertą!"
        />
        <link rel="canonical" href={canonicalUrl} />
      </Helmet>
      <Content className={"content"}>
        <Breadcrums namePage={"Zima-Oferta"} />
        <TextBox>
          <h1>Zimowa Oferta dopasowana do Ciebie</h1>
          <img
            className={s(`contentimg imgRight`)}
            src="/images/content/stok-narciarski.webp"
            alt={"Górka Szczęśliwicka z rana"}
          />
          <p>
            Odkryj nasze aktualne wyjazdy narciarskie w Polsce i za granicą.
            Organizujemy zarówno weekendowe wypady, wyjazdy jednodniowe, jak i
            dłuższe wyjazdy zagraniczne. Każda oferta została przygotowana z
            myślą o komforcie, bezpieczeństwie i maksymalnej przyjemności z
            jazdy.
          </p>
          <p>
            Niezależnie od tego, czy szukasz rodzinnego wyjazdu, szkolenia dla
            dzieci, czy aktywnego wypoczynku ze znajomymi. Znajdziesz tu
            propozycję dopasowaną do swoich potrzeb. Wybierz interesującą ofertę
            i sprawdź szczegóły.
          </p>
          <p>👇 Sprawdź dostępne wyjazdy i zarezerwuj swoje miejsce.</p>
        </TextBox>
      </Content>

      <div className={s(`box-offert-container`)}>
        <div className={s(`box-offert`)}>
          <div className={s(`image-section`)}>
            <img
              src="/images/trips/2026/winter/jaworki/jaworki-2026-8.webp"
              alt="Stock w Jaworkach"
            />
            <div className={s(`country-information`)}>
              <img
                src="/images/trips/flag/poland-flag.webp"
                alt="Flaga Polski"
              />
              <p>Polska</p>
            </div>
          </div>
          <div className={s(`information-section`)}>
            <h2>Weekend narciarski w Jaworkach</h2>
            <div className={s(`location`)}>
              <div className={s(`icon`)}>
                <MapPin size={25} strokeWidth={1.5} />
              </div>
              <p>Jaworki Homole</p>
            </div>
            <div className={s(`date`)}>
              <div className={s(`icon`)}>
                <CalendarFold size={25} strokeWidth={1.5} />
              </div>
              <p>5 – 8 III 2026 r.</p>
            </div>
            <p className={s(`description`)}>
              Weekendowy wyjazd narciarski do malowniczej miejscowości
              Jaworki-Homole w Pieninach, to już sprawdzona kopia naszej
              propozycji z zeszłego sezonu.
            </p>
          </div>
          <div className={s(`read-more`)}>
            <button>
              <Link to={Paths.OFFER.TRIP_POLAND_JAWORKI.absolute}>
                Zobacz Szczegóły
              </Link>
            </button>
          </div>
        </div>
        <div className={s(`box-offert`)}>
          <div className={s(`image-section`)}>
            <img
              src="/images/trips/2026/winter/ravascletto_zoncolan/ravascletto_zoncolan1.webp"
              alt="Stock w Ravascletto / Zoncolan"
            />
            <div className={s(`country-information`)}>
              <img src="/images/trips/flag/italy-flag.webp" alt="Flaga Włoch" />
              <p>Włochy</p>
            </div>
          </div>
          <div className={s(`information-section`)}>
            <h2>Zorganizowany wyjazd do Włoch</h2>
            <div className={s(`location`)}>
              <div className={s(`icon`)}>
                <MapPin size={25} strokeWidth={1.5} />
              </div>
              <p>RAVASCLETTO / ZONCOLAN</p>
            </div>
            <div className={s(`date`)}>
              <div className={s(`icon`)}>
                <CalendarFold size={25} strokeWidth={1.5} />
              </div>
              <p>17 – 24 I 2026</p>
            </div>
            <p className={s(`description`)}>
              Zorganizowany wyjazd narciarski do ośrodka narciarskiego
              Ravascletto / Zoncolan w&nbsp;Włoszech. Malownicze krajobrazy i
              słoneczne stoki.
            </p>
          </div>
          <div className={s(`read-more`)}>
            <button>
              <Link to={Paths.OFFER.TRIP_ITALY.absolute}>Zobacz Szczegóły</Link>
            </button>
          </div>
        </div>
        <div className={s(`box-offert`)}>
          <div className={s(`image-section`)}>
            <img
              src="/images/gallery/sabat-krajno/sabat-krajno-3.webp"
              alt="Stock w Sabat Krajno"
            />
            <div className={s(`country-information`)}>
              <img
                src="/images/trips/flag/poland-flag.webp"
                alt="Flaga Polski"
              />
              <p>Polska</p>
            </div>
          </div>
          <div className={s(`information-section`)}>
            <h2>Wyjazdy jednodniowe</h2>
            <div className={s(`location`)}>
              <div className={s(`icon`)}>
                <MapPin size={25} strokeWidth={1.5} />
              </div>
              <p>Stacja narciarska blisko Warszawy</p>
            </div>
            <div className={s(`date`)}>
              <div className={s(`icon`)}>
                <CalendarFold size={25} strokeWidth={1.5} />
              </div>
              <p>Realizacja w uzgodnionym terminie</p>
            </div>
            <p className={s(`description`)}>
              W ramach uatrakcyjnienia naszej oferty, organizujemy jednodniowe
              wyjazdy narciarskie, które łączą profesjonalne szkolenie dla
              dzieci, młodzieży i&nbsp;dorosłych z&nbsp;integracją oraz aktywnym
              wypoczynkiem na świeżym powietrzu.
            </p>
          </div>
          <div className={s(`read-more`)}>
            <button>Zobacz Szczegóły</button>
          </div>
        </div>
      </div>
    </Contener>
  );
}
