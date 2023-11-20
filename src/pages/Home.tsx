import { OwnButton } from "~/components/button/OwnButton";
import { InfoBox } from "~/components/infoBox/InfoBox";
import { NewInfoBox } from "~/components/infoBox/NewInfoBox";
import { MainPageBox } from "~/components/mainPageBox/MainPageBox";
import { Parallax } from "~/components/parallax/Parallax";
import { Slider } from "~/components/slider/Slider";

export function Home() {
  return (
    <>
      <Slider />
      <MainPageBox type={1} image={"public/images/content/michal.webp"}>
        {/* <MainPageBox type={1} image={"public/images/zrodlowe/IMG_7580.jpg"}> */}
        <h1>Szkoła narciarstwa i snowboardu FigowSki</h1>
        <p>
          Nauczymy Cię jeździć na nartach - wystarczą tylko chęci, skupienie
          uwagi podczas zajęć prowadzonych przez sprawdzonych i
          wykwalifikowanych instruktorów Polskiego Związku Narciarskiego, a
          uśmiech na twarzy pojawi się sam.
        </p>
        <p>
          <b>Szkoła Narciarska FigowSki</b> powstała z inicjatywy instruktora
          narciarskiego, na codzien nauczyciela wychowania fizycznego i trenera,
          jak również prywatnie ojca dwójki małych smoków narciarskich. Z pasji
          do sportów zimowych w tym narciarstwa zjazdowego wieloletnie
          doświadczenie w organizacji procesu szkolenia dzieci, młodzieży, jak
          również osób dorosłych zostało wykorzystane do zwiększenia przestrzeni
          w dalszym zarażaniu <b>narciarstwem</b>. Prowadzimy szkolenie w formie
          lekcji indywidualnych i grupowych, ze szczególnym uwzględnieniem tego
          co najważniejsze: bezpieczeństwo na stoku, profesjonalizm w
          metodycznym nauczaniu, nienaganny kontakt z kursantami, dbałość o
          wyniki i postęp oraz satysfakcje klienta
        </p>
      </MainPageBox>

      <NewInfoBox image={"public/images/content/michal.webp"}>
        <h2>o mnie</h2>
        <p>
          Nazywam się Michał Jaśkiewicz, należę do Stowarzyszenia Trenerów i
          Instruktorów Narciarstwa Polskiego Związku Narciarskiego, nieustannie
          podążam za nowymi innowacjami w szkoleniu dzieci i młodzieży
          jednocześnie doskonaląc osobiście swój warsztat pracy. Narty maja nas
          cieszyć, rozwijać, pomagać w przełamywaniu często ograniczajacych nas
          barier, integrowac dzieci, ale również nas dorosłych i uczyc
          bezpieczeństwa (nie tylko na stoku), zdrowej, przyjaznej rywalizacji
          oraz kibicowania. Dlatego uczymy jezdzic na nartach w sposob
          uwielbiany przez dzieci - „Od zabawy do sportu”.
        </p>
        <p></p>
        <OwnButton link={"o-nas"} text={"Czytaj więcej"} />
      </NewInfoBox>
      <InfoBox type={2} image={"public/images/slider/slider-n-3.webp"}>
        <h2>Oferta</h2>
        <p>
          <ul>
            <li>szkolenie indyw. cennik</li>
            <li>szkolenie grupowe cennik</li>
            <li>wyjazdynarciarskie</li>
            <li>wyjazdy rodzinne</li>
            <li>
              pomoc w samorozwoju kursantów – od demonstratora do instruktora
            </li>
          </ul>
        </p>
        <p></p>
        <OwnButton link={"cennik"} text={"Sprawdz naszą ofertę"} />
      </InfoBox>

      <InfoBox type={1} image={"public/images/content/michal.webp"}>
        <h2>o mnie</h2>
        <p>
          Nazywam się Michał Jaśkiewicz, należę do Stowarzyszenia Trenerów i
          Instruktorów Narciarstwa Polskiego Związku Narciarskiego, nieustannie
          podążam za nowymi innowacjami w szkoleniu dzieci i młodzieży
          jednocześnie doskonaląc osobiście swój warsztat pracy. Narty maja nas
          cieszyć, rozwijać, pomagać w przełamywaniu często ograniczajacych nas
          barier, integrowac dzieci, ale również nas dorosłych i uczyc
          bezpieczeństwa (nie tylko na stoku), zdrowej, przyjaznej rywalizacji
          oraz kibicowania. Dlatego uczymy jezdzic na nartach w sposob
          uwielbiany przez dzieci - „Od zabawy do sportu”.
        </p>
        <p></p>
        <OwnButton link={"o-nas"} text={"Czytaj więcej"} />
      </InfoBox>

      {/* <InfoBox type={3} image={"public/images/slider/slider-n-4.webp"}>
        <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
        <p>
          Mollitia ipsa, pariatur tempora ratione quam corrupti nemo aperiam
          fuga harum beatae tenetur vero dicta molestiae veritatis nisi
          exercitationem dolores! Dolorum, labore? Quisquam deserunt, natus amet
          obcaecati cum delectus ratione vitae perspiciatis distinctio ad sequi
          sunt beatae recusandae ab earum.
        </p>
        <p>
          Eveniet cum quos, in illo quae autem ducimus veniam? Praesentium, vero
          fugit. A sit quidem dolorem eius at. Alias voluptas velit ea dicta
          blanditiis obcaecati laboriosam ad ipsum. Voluptates distinctio beatae
          accusamus omnis doloremque, cumque nisi quia ducimus aut magni,
          doloribus non.
        </p>
        <OwnButton link={"kontakt"} text={"Kontakt"} />
      </InfoBox> */}

      {/* <Parallax image={"public/images/skiing-parallax.webp"} /> */}
      <Parallax image={"public/images/zrodlowe/IMG_3970.jpg"} />
    </>
  );
}
