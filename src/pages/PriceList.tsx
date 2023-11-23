import { Contener } from "~/components/contener/Contener";
import { Content } from "~/components/content/Content";
import style from "~/components/content/Content.module.css";
import useStyles from "~/hooks/useStyle";

export function PriceList() {
  const s = useStyles(style);
  return (
    <Contener size="arranged-md">
      <Content clas={"content"}>
        <h1>Cennik</h1>
        <p>
          <img
            className={s(`contentimg imgRight`)}
            src="public/images/gallery/galeria-foto-10.webp"
          />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
          nesciunt voluptatibus minus harum aperiam, necessitatibus sapiente
          iusto architecto nam distinctio dolores debitis earum asperiores,
          itaque exercitationem reiciendis aliquid tempore voluptate? Debitis
          esse tempore odio, atque fuga autem, deserunt ab cum blanditiis,
          consectetur possimus dolore natus ad culpa quis doloremque quod
          provident quos neque nesciunt et exercitationem! Quibusdam maxime
          pariatur nemo! Magnam iusto optio voluptas corporis doloribus fugit
          voluptatibus, laudantium nihil officiis expedita possimus adipisci
          similique, esse ea, reiciendis voluptate accusantium ullam soluta
          natus iure commodi distinctio doloremque! Temporibus, culpa
          reprehenderit. Qui ducimus minima dolores, reprehenderit cupiditate
          asperiores non recusandae quod sunt accusantium, aperiam ullam
          expedita repellendus quaerat officia voluptates tempore velit
          similique quo tenetur facere corporis enim nam.
        </p>
        <table className={s(`price-table`)}>
          <thead>
            <tr>
              <th>Usługa</th>
              <th>Cena indywidualna (dzieci)</th>
              <th>Cena indywidualna (dorośli)</th>
              <th>Cena grupowa (dzieci)</th>
              <th>Cena grupowa (dorośli)</th>
              <th>Wypożyczenie sprzętu (dzienna opłata)</th>
              <th>Wycieczka narciarska (całodniowa)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                Instruktaż indywidualny
                <br />
                (1 godzina)
              </td>
              <td>-----</td>
              <td>-----</td>
              <td>250 zł/osoba</td>
              <td>-----</td>
              <td>-----</td>
              <td>-----</td>
            </tr>
            <tr>
              <td>
                Instruktaż grupowy
                <br />
                (1 godzina)
              </td>
              <td>-----</td>
              <td>-----</td>
              <td>-----</td>
              <td>-----</td>
              <td>250 zł/osoba</td>
              <td>-----</td>
            </tr>
            <tr>
              <td>Wypożyczenie nart i kijków</td>
              <td>-----</td>
              <td>250 zł/osoba</td>
              <td>-----</td>
              <td>-----</td>
              <td>-----</td>
              <td>-----</td>
            </tr>
            <tr>
              <td>Wypożyczenie kasku</td>
              <td>250 zł/osoba</td>
              <td>-----</td>
              <td>-----</td>
              <td>-----</td>
              <td>-----</td>
              <td>-----</td>
            </tr>
            <tr>
              <td>
                Pakiet instruktaż + wypożyczenie sprzętu
                <br />
                (1 dzień)
              </td>
              <td>-----</td>
              <td>-----</td>
              <td>-----</td>
              <td>-----</td>
              <td>-----</td>
              <td>250 zł/osoba</td>
            </tr>
            <tr>
              <td>
                Wycieczka narciarska z instruktorem
                <br />
                (1 dzień)
              </td>
              <td>-----</td>
              <td>-----</td>
              <td>-----</td>
              <td>-----</td>
              <td>250 zł/osoba</td>
              <td>-----</td>
            </tr>
          </tbody>
        </table>
      </Content>
    </Contener>
  );
}
