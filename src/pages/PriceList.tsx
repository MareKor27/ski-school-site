import { Contener } from "~/components/contener/Contener";
import { Content } from "~/components/content/Content";
import style from "~/components/content/Content.module.css";
import styleTextBox from "~/components/textbox/TextBox.module.css";
import { TextBox } from "~/components/textbox/TextBox";
import useStyles from "~/hooks/useStyle";

export function PriceList() {
  const s = useStyles(style);
  const textBoxStyle = useStyles(styleTextBox);
  return (
    <Contener size="arranged-md">
      <Content clas={"content"}>
        <TextBox>
          <h1>Cennik</h1>
          <img
            className={s(`contentimg imgRight`)}
            src="public/images/gallery/galeria-foto-10.webp"
          />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
            nesciunt voluptatibus minus harum aperiam, necessitatibus sapiente
            iusto architecto nam distinctio dolores debitis earum asperiores,
            itaque exercitationem reiciendis aliquid tempore voluptate?
          </p>
        </TextBox>
        <TextBox className={"text-clear text-center"}>
          <h2>Cennik zajęć narciarskich na stoku Szczęśliwice</h2>

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
                <td>110 zł</td>
                <td>210 zł</td>
                <td>300 zł</td>
              </tr>
              <tr>
                <td>2</td>
                <td>190 zł</td>
                <td>360 zł</td>
                <td>380 zł</td>
              </tr>
              <tr>
                <td>3</td>
                <td>220 zł</td>
                <td>380 zł</td>
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
            Zajęcia grupowe abonamentowe (4x1.5h = 230 zł/osoba) - cykliczne
            zajęcia abonamentowe w grupie min. 4 osobowej. 4 lekcje x 1.5 h = 6
            h
          </p>
          <p>Masz pytanie lub chcesz umówić się na lekcję?</p>
          <p className={textBoxStyle(`warning`)}>Zadzwoń!!!</p>
          <p className={textBoxStyle(`links`)}>
            Telefon kontaktowy:{" "}
            <a href="tel:+48517933264">tel +48 517 933 264</a>
          </p>
        </TextBox>
      </Content>
    </Contener>
  );
}
