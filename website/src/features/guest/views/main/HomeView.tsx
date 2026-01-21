import { Helmet } from "react-helmet-async";
import { OwnButton } from "~/components/button/OwnButton";
import { InfoBox } from "~/components/infoBox/InfoBox";
import { MainPageBox } from "~/components/mainPageBox/MainPageBox";
import { Parallax } from "~/components/parallax/Parallax";
import { Slider } from "~/components/slider/Slider";
import { useCanonicalLink } from "~/hooks/useCanonicalLink";

export function HomeView() {
  const canonicalUrl = useCanonicalLink();
  return (
    <>
      <Helmet>
        <title>
          Profesjonalna szkółka narciarska w Warszawie | Instruktor narciarski z
          licencją PZN - FigowSki
        </title>
        <link rel="canonical" href={canonicalUrl} />
        <meta
          name="description"
          content="Nauka jazdy na nartach i snowboardzie na Górce Szczęśliwickiej w samym sercu Warszawy! Dołącz do FigowSki już dziś i rozwijaj umiejętności z profesjonalnymi instruktorami."
        />
      </Helmet>
      <Slider className={"body-arranged-md"} />
      <MainPageBox
        className={"body-arranged-md"}
        image={"images/content/mainbox-content.webp"}
        alt={"Grupa na stocku"}
      >
        <h1>Górka Szczęśliwicka w Warszawie!</h1>
        <p>
          Odkryj przyjemność jazdy na nartach z naszą szkołą. Zajęcia prowadzone
          są przez doświadczonych instruktorów PZN oraz SITS, którzy z pasją
          dzielą się swoją wiedzą i umiejętnościami. Nasza oferta obejmuje naukę
          jazdy na nartach i snowboardzie, zarówno dla początkujących, jak i
          zaawansowanych miłośników tego sportu. Bez względu na Twój poziom
          zaawansowania, zapewniamy przyjazną atmosferę i skupienie na
          indywidualnych aspektach szkolenia każdego kursanta.
        </p>
        <p>
          Szkoła Narciarska FigowSki powstała z pasji do narciarstwa i z myślą o
          propagowaniu tego sportu wśród dzieci, młodzieży i dorosłych. Nasz
          zespół składa się z instruktorów i trenerów z bogatym doświadczeniem,
          którzy dbają o bezpieczeństwo na stoku i satysfakcję kursantów.
        </p>
        <p>
          Prowadzimy zarówno lekcje indywidualne, jak i grupowe, dostosowane do
          poziomu każdego uczestnika. W naszej szkole priorytetem jest
          profesjonalizm, skuteczność metodyczna oraz indywidualne podejście do
          każdego kursanta. Dołącz do team-u Figowski, poznaj nas bliżej i
          pozwól w sobie poczuć energie płynącą ze sportów zimowych.
        </p>
      </MainPageBox>

      <MainPageBox
        className={"body-stretched"}
        image={"images/content/newbox1.webp"}
        alt={"Michał Jaśkiewicz na stocku narciarskim"}
      >
        <h2>O MNIE</h2>
        <p>
          Witaj! Nazywam się Michał Jaśkiewicz i jako licencjonowany instruktor
          jestem częścią Stowarzyszenia Trenerów i Instruktorów Polskiego
          Związku Narciarskiego, a przy okazji założycielem Szkoły Narciarskiej
          Figowski Sport na Górce Szczęśliwickiej. Moja pasja to nieustanne
          doskonalenie warsztatu nauczania dzieci i młodzieży, przy równoczesnym
          rozwijaniu własnych umiejętności technicznych . Swoją pasją zarażam
          też często dorosłych nie tylko na stoku w Warszawie, ale również na
          wszystkich zimowych wyjazdach w kraju i zagranicą.
        </p>
        <p>
          Uważam, że narciarstwo oraz snowboard nie tylko powinny sprawiać
          radość i rozwijać umiejętności, ale także pomagać w pokonywaniu barier
          i integrować różne społeczności. Dlatego w mojej pracy kładę nacisk
          nie tylko na naukę jazdy na nartach lub snowboardzie, ale również na
          bezpieczeństwo, zdrową rywalizację i integrację.
        </p>
        <p>
          Pragnę, aby nauka jazdy na nartach i snowboardzie była dla dzieci
          czymś więcej niż tylko zajęciami sportowymi – chcę, aby było to
          doświadczenie pełne zabawy i radości, które przechodzi od etapu zabawy
          do prawdziwego sportu.
        </p>
        <p>
          Dołącz do mnie na <b>Górce Szczęśliwickiej w Warszawie</b>, aby odkryć{" "}
          <b>świat narciarstwa</b> w sposób, który uwielbiają dzieci -{" "}
          <b>od zabawy do prawdziwej pasji!</b>
        </p>
        <p></p>
        <OwnButton to="/o-nas" text={"Czytaj więcej"} />
      </MainPageBox>

      {/* <NewInfoBox
        className={"body-stretched"}
        image={"images/content/newbox1.webp"}
        height={"400"}
        type={2}
      >
        <h2>o mnie</h2>
        <p>
          Nazywam się Michał Jaśkiewicz, należę do Stowarzyszenia Trenerów i
          Instruktorów Narciarstwa Polskiego Związku Narciarskiego, nieustannie
          podążam za nowymi innowacjami w szkoleniu dzieci i młodzieży
          jednocześnie doskonaląc osobiście swój warsztat pracy. Narty maja nas
          cieszyć, rozwijać, pomagać w przełamywaniu często ograniczajacych nas
          barier, integrowac dzieci, ale również nas dorosłych i uczyc
          bezpieczeństwa (nie tylko na stoku), zdrowej, przyjaznej rywalizacji
          oraz kibicowania. <br />
          Dlatego uczymy jezdzic na nartach w sposob uwielbiany przez dzieci -
          <b> „Od zabawy do sportu”.</b>
        </p>
        <p></p>
        <OwnButton link={"o-nas"} text={"Czytaj więcej"} />
      </NewInfoBox> */}
      <InfoBox
        height={"750"}
        type={2}
        image={"images/content/box-glowna-1-2.webp"}
        classname="body-arranged-md"
      >
        <h2>Oferta</h2>
        <p>
          Zapraszamy do zapoznania się z naszą kompleksową ofertą! Proponujemy
          zarówno szkolenia indywidualne, jak i grupowe, poza granicami Warszawy
          oraz Polski, szkolenie narciarskie dla rodzin oraz kompleksowe
          wsparcie w rozwoju kursantów – od pierwszych kroków na stoku po
          zaawansowane umiejętności na drodze do zdobycia tytułu instruktora.
          Skontaktuj się z nami, aby poznać szczegóły – każde, nawet najmniejsze
          pytanie, jest dla nas ważne.
        </p>
        <br />
        <p>Nasza oferta obejmuje:</p>
        <br />
        <ul>
          <li>Szkolenie indywidualne</li>
          <li>Szkolenie grupowe</li>
          <li>Szkolenie w Polsce</li>
          <li>Szkolenie za granicą</li>
          <li>Wsparcie w samorozwoju sportowym kursantów</li>
        </ul>
        <br />
        <OwnButton to="/cennik" text={"Sprawdź naszą ofertę"} />
      </InfoBox>

      <InfoBox
        height={"700"}
        type={1}
        image={"images/content/box-glowna-3.webp"}
        classname="body-arranged-md"
      >
        <h2>Galeria</h2>
        <p>
          Zobacz naszą galerię zdjęć ze szkoleń indywidualnych i grupowych, w
          Polsce i za granicą, czyli samych narciarskich przygód na stoku.
          Poznaj atmosferę integracji, nauki i zabawy, która towarzyszy naszym
          kursantom podczas lekcji.
        </p>
        <OwnButton to="/galeria" text={"Zobacz więcej"} />
        <br />
        <br />
        <h2>Kontakt</h2>
        <p>
          Potrzebujesz więcej informacji? Skontaktuj się z nami – chętnie
          odpowiemy na wszystkie pytania i pomożemy Ci uzyskać więcej szczegółów
          naszych usług. Czekamy na Twój kontakt.
        </p>
        <OwnButton to="/kontakt" text={"Kontakt"} />
      </InfoBox>

      {/* <InfoBox
        height={"500"}
        type={2}
        image={"images/content/box-glowna-3.webp"}
        classname="body-arranged-md"
      >
        <h2>Kontakt</h2>
        <p>
          Potrzebujesz więcej informacji? Skontaktuj się z nami – chętnie
          odpowiemy na wszystkie pytania i pomożemy Ci uzyskać więcej szczegółów
          naszych usług. Czekamy na Twój kontakt.
        </p>
        <OwnButton to="/kontakt" text={"Kontakt"} />
      </InfoBox> */}

      <Parallax
        image={"images/content/paralaks-1.webp"}
        alt={"Grupa dzieci na nartach"}
      >
        Zmieniamy marzenia w rzeczywistość :)
      </Parallax>
    </>
  );
}
