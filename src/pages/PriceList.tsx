import { Contener } from "~/components/contener/Contener";
import { Content } from "~/components/content/Content";
import style from "~/components/content/Content.module.scss";
import styleTextBox from "~/components/textbox/TextBox.module.scss";
import { TextBox } from "~/components/textbox/TextBox";
import useStyles from "~/hooks/useStyle";
import { Helmet } from "react-helmet-async";
import { Breadcrums } from "~/components/breadcrumbs/Breadcrumbs";
import { Link } from "react-router-dom";

export function PriceList() {
  const s = useStyles(style);
  const textBoxStyle = useStyles(styleTextBox);
  return (
    <Contener className="body-arranged-md">
      <Helmet>
        <title>Cennik | Nauki jazdy na nartach i snowboardzie - FigowSki</title>
        <meta
          name="description"
          content="Zapoznaj się z cenami za lekcje nauki jazdy na nartach i snowboardzie na Górce Szczęśliwickiej. Oferujemy lekcje dla wszystkich poziomów zaawansowania."
        />
      </Helmet>
      <Content className={"content"}>
        <Breadcrums namePage={"Cennik"} />

        <TextBox className={"text-clear text-center"}>
          <h1>Cennik lekcji narciarskich i snowbordowych</h1>

          <table className={s(`price-table`)}>
            <thead>
              <tr>
                <th colSpan={4}>
                  <b>CZAS TRWANIA LEKCJI</b>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <b>ILOŚĆ OSÓB PODCZAS ZAJĘĆ</b>
                </td>
                <td>
                  <b>1h</b>
                </td>
                <td>
                  <b>2h</b>
                </td>
                <td>
                  <b>3h</b>
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>120 zł</td>
                <td>210 zł</td>
                <td>300 zł</td>
              </tr>
              <tr>
                <td>2</td>
                <td>190 zł</td>
                <td>350 zł</td>
                <td>380 zł</td>
              </tr>
              <tr>
                <td>3</td>
                <td>220 zł</td>
                <td>390 zł</td>
                <td>460 zł</td>
              </tr>
              <tr>
                <td>4</td>
                <td>240 zł</td>
                <td>420 zł</td>
                <td>480 zł</td>
              </tr>
            </tbody>
          </table>
          <p>
            Zajęcia grupowe abonamentowe (4x1.5h = 240 zł/osoba) - cykliczne
            zajęcia abonamentowe w grupie min. 4 osobowej. 4 lekcje x 1.5 h = 6
            h
          </p>
          <p>Masz pytanie lub chcesz umówić się na lekcję?</p>
          <p>
            <Link to="/kontakt">Skontaktuj się z nami</Link>
          </p>
          <p>lub zadzwoń</p>
          <p className={textBoxStyle(`warning`)}>
            <a href="tel:+48517933264">tel +48 517 933 264</a>
          </p>
        </TextBox>
        <TextBox>
          <img
            className={s(`contentimg imgRight`)}
            src="images/content/content-cennik.webp"
            alt={"Górka Szczęśliwicka z rana"}
          />
          <p>
            Skontaktuj się z nami, aby uzyskać więcej informacji na temat cen
            oraz dostępnych pakietów szkoleniowych. Nasz zespół z przyjemnością
            pomoże Ci znaleźć najlepsze rozwiązanie dopasowane do Twoich potrzeb
            i oczekiwań! Nasza szkoła oferuje różnorodne pakiety szkoleniowe,
            dostosowane do wszystkich poziomów zaawansowania oraz różnych grup
            wiekowych.
          </p>
          <p>
            Bez względu na to, czy jesteś dzieckiem, młodzieżą czy dorosłym,
            mamy coś odpowiedniego dla Ciebie. Nasze oferty szkoleniowe są
            starannie opracowane, aby zapewnić optymalne warunki nauki i
            maksymalizować Twój postęp na stoku.
          </p>
          <p>
            Dzięki naszym doświadczonym instruktorom oraz indywidualnemu
            podejściu, możesz mieć pewność, że każda lekcja będzie doskonałym
            doświadczeniem, które pozwoli Ci rozwijać swoje umiejętności
            narciarskie i snowboardowe oraz inne usługi oferowane przez naszą
            szkołę narciarską:
          </p>

          <p>
            <b>Szkolenie Indywidualne:</b>
            <br />
            Indywidualne lekcje dostosowane do Twoich potrzeb i umiejętności.
          </p>

          <p>
            <b>Szkolenie Grupowe:</b>
            <br />
            Lekcje w grupie, idealne dla osób chcących uczyć się w przyjaznej
            atmosferze z innymi pasjonatami narciarstwa.
          </p>

          <p>
            <b>Wyjazdy Narciarskie:</b>
            <br />
            Organizujemy wyjazdy narciarskie dla osób chcących poznać nowe stoki
            i poszerzyć swoje umiejętności podczas wspaniałych przygód na
            śniegu.
          </p>

          <p>
            <b>Wyjazdy Rodzinne:</b>
            <br />
            Specjalne pakietu dla rodzin, które chcą spędzić aktywny czas razem
            na stoku i rozwijać swoje umiejętności narciarskie.
          </p>

          <p>
            <b>Pomoc w Samorozwoju Kursantów:</b>
            <br />
            Nasza szkoła oferuje wsparcie w rozwoju umiejętności narciarskich od
            poziomu początkującego do zaawansowanego. Dzięki naszym kursom,
            każdy może stać się ekspertem od jazdy na nartach.
          </p>
        </TextBox>
      </Content>
    </Contener>
  );
}
