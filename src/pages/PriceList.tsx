import { Contener } from "~/components/contener/Contener";
import { Content } from "~/components/content/Content";

export function PriceList() {
  return (
    <Contener resolution="md">
      <Content clas={"content"}>
        <h1>Cennik</h1>
        <p>
          <img src="public/images/box-1.jpg" />
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
        <table>
          <th>MEDYCYNA NATURALNA</th>

          <td>
            <strong>I. Konchowanie uszu </strong>
            <br />
            <em>(zabieg obejmuje obydwoje uszu)</em>
            <br />
            Czas&nbsp;45 min, Cena&nbsp;130 PLN
          </td>

          <td>
            <strong>II. Pępkowanie</strong>
            <br />
            <span>
              <em>(wraz z&nbsp;masażem br/zucha)</em>
            </span>
            <br />
            Czas 45 min, Cena 120 PLN
          </td>

          <td>
            <strong>III. Autorska metoda Body Coning</strong>
            <br />
            <span>
              <em>(konchowanie ciała)</em>
              <br />
            </span>
            Czas 60 min, Cena 150 PLN
          </td>

          <td>
            <strong>IV. Autorski masaż meridianów </strong>
            <br />
            <span>
              <em>(wg Medycyny Chińskiej z&nbsp;elementami masażu Tui-Na)</em>
            </span>
            <br />
            Czas 75 min, Cena 250 PLN
          </td>

          <td>
            <strong>
              V. Częściowy masaż meridianów + bańki <br />
            </strong>
            <span>
              <em>(wg Medycyny Chińskiej)</em>
            </span>
            <br />
            Czas 70 min, Cena 190 PLN
          </td>

          <td>
            <strong>
              VI. Stawianie baniek lekarskich
              <br />
            </strong>
            <span>
              <em>(Bańki ogniowe, miedziane i&nbsp;bambusowe)</em>
            </span>
            <br />
            Czas 45 min, Cena 100 PLN
          </td>

          <td>
            <strong>
              VII. Refleksologia stóp
              <br />
            </strong>
            Czas 60 min, Cena 140 PLN
          </td>
        </table>
      </Content>
    </Contener>
  );
}
