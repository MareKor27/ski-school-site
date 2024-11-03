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
        </TextBox>
        <TextBox className={"text-clear text-center"}>
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
            src="images/content/content-cennik-2.webp"
            alt={"Górka Szczęśliwicka z rana"}
          />
          <h2>Zajęcia grupowe abonamentowe</h2>
          <ul>
            <li>
              <b>Koszt:</b> 240 zł/osoba
            </li>
            <li>
              <b>Liczba zajęć:</b> 4 lekcje po 1,5 godziny każda (łącznie 6
              godzin)
            </li>
            <li>
              <b>Minimalna liczba uczestników:</b> 4 osoby
            </li>
            <li>
              Cykl zajęć grupowych odbywa się regularnie, zapewniając ciągłość
              nauki i postępy w gronie rówieśników, na bardzo zbliżonym poziomie
              zaawansowania
            </li>
          </ul>
          <br />
          <h2>Indywidualne pakiety szkoleniowe</h2>
          <p>
            Jeśli potrzebujesz spersonalizowanego programu szkoleniowego,
            oferujemy możliwość przygotowania{" "}
            <b>„szytych na miarę” pakietów szkoleniowych</b> dostosowanych do
            Twoich potrzeb. Pakiety ustalane są indywidualnie – skontaktuj się z
            nami, aby omówić szczegóły i stworzyć program idealnie dopasowany do
            Twoich oczekiwań.
          </p>
        </TextBox>
      </Content>
    </Contener>
  );
}
