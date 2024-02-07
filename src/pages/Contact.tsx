import { Contener } from "~/components/contener/Contener";
import { Content } from "~/components/content/Content";
import style from "~/components/content/Content.module.scss";
import { TextBox } from "~/components/textbox/TextBox";
import styleGlobal from "~/Global.module.scss";
import styleTextBox from "~/components/textbox/TextBox.module.scss";
import useStyles from "~/hooks/useStyle";
import { Section } from "~/components/section/Section";
import { Helmet } from "react-helmet-async";

export function Contact() {
  const s = useStyles(style);
  const g2 = useStyles(styleGlobal);
  const styleTB = useStyles(styleTextBox);
  return (
    <Contener className="body-arranged-md">
      <Helmet>
        <title>FigowSki - Kontakt</title>
        <meta name="description" content="FigowSki - Kontakt opis" />
      </Helmet>
      <Content className={"content"}>
        <TextBox>
          <h1>Kontakt z FigowSki</h1>
          <p>
            <img
              className={s(`contentimg imgRight`)}
              src="images/gallery/galeria-foto-5.webp"
              alt={"Grupa z instruktorem"}
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
        </TextBox>
        <Section size={"body-arranged-md"} type={"1"}>
          <TextBox className={"text-clear text-box25"}>
            <table className={g2(`contact-table`)}>
              <tbody>
                <tr>
                  <td>
                    <img
                      src="/images/icons/icon-pin.webp"
                      alt={"Ikona lokalizacji"}
                    ></img>
                  </td>
                  <td>
                    <p>Szkoła Narciarska FigowSki Sport</p>
                    <p>ul. Drawska 22, 02-202 Warszawa</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img
                      src="/images/icons/icon-clock.webp"
                      alt={"Ikona godziny"}
                    ></img>
                  </td>
                  <td>
                    <p>Godziny otwarcia:</p>
                    <p>Pon. - Pt.: 10:00 - 20:00</p>
                    <p>Sob.: 9:00 - 17:00</p>
                  </td>
                </tr>
              </tbody>
            </table>
          </TextBox>
          <TextBox className={"text-clear text-box25"}>
            <table className={g2(`contact-table`)}>
              <tbody>
                <tr>
                  <td>
                    <img
                      src="/images/icons/icon-email.webp"
                      alt={"Ikona email"}
                    ></img>
                  </td>
                  <td>
                    <p>
                      E-mail:
                      <br />
                      <a href="mailto:figowskisport@gmail.com">
                        figowskisport@gmail.com
                      </a>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img
                      src="/images/icons/icon-phone.webp"
                      alt={"Ikona telefonu"}
                    ></img>
                  </td>
                  <td>
                    <p>
                      Telefon:
                      <br /> <a href="tel:+48517933264">+48 517 933 264</a>
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
          </TextBox>
          <TextBox className={"text-clear text-box25"}>
            <table className={g2(`contact-table`)}>
              <tbody>
                <tr>
                  <td>
                    <img
                      src="/images/icons/icon-document.webp"
                      alt={"Ikona dokumentu"}
                    ></img>
                  </td>
                  <td>
                    <p>
                      REGON:
                      <br /> 384808813
                    </p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img
                      src="/images/icons/icon-document.webp"
                      alt={"Ikona dokumentu"}
                    ></img>
                  </td>
                  <td>
                    <p>
                      NIP:
                      <br /> 7471658760
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
          </TextBox>
        </Section>
        <TextBox className={"text-clear"}>
          <table className={g2(`contact-table`)}>
            <tbody>
              <tr>
                <td>
                  <img
                    src="/images/icons/icon-card.webp"
                    alt={"Ikona karty kredytowej"}
                  ></img>
                </td>
                <td>
                  <p>Nr konta:</p>
                  <p>-- ---- ---- ---- ---- ---- ----</p>
                </td>
              </tr>
            </tbody>
          </table>
        </TextBox>
        <TextBox>
          <div className={styleTB(`map`)}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2445.044865926853!2d20.953699477578546!3d52.20623215941143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecdea8813eb91%3A0x59fea50c2ceba40!2sSzko%C5%82a%20Narciarska%20FigowSki%20Sport!5e0!3m2!1spl!2spl!4v1707237928477!5m2!1spl!2spl"
              width="100%"
              height="450"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy={"no-referrer-when-downgrade"}
            ></iframe>
          </div>
        </TextBox>
      </Content>
    </Contener>
  );
}
