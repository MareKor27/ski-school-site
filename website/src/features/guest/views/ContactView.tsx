import { Contener } from "~/components/contener/Contener";
import { Content } from "~/components/content/Content";
import { TextBox } from "~/components/textbox/TextBox";
import styleTextBox from "~/components/textbox/TextBox.module.scss";
import useStyles from "~/hooks/useStyle";
import { Section } from "~/components/section/Section";
import { Helmet } from "react-helmet-async";
import { Breadcrums } from "~/components/breadcrumbs/Breadcrumbs";
import { useCanonicalLink } from "~/hooks/useCanonicalLink";

export function ContactView() {
  //const s = useStyles(style);
  const styleTB = useStyles(styleTextBox);
  const canonicalUrl = useCanonicalLink();
  return (
    <Contener className="body-arranged-md">
      <Helmet>
        <title>
          Kontakt | Skontaktuj się z nami w sprawie nauki jazdy - FigowSki
        </title>
        <link rel="canonical" href={canonicalUrl} />
        <meta
          name="description"
          content="Potrzebujesz więcej informacji? Skontaktuj się z nami! Jesteśmy gotowi odpowiedzieć na wszystkie Twoje pytania dotyczące naszych lekcji nauki jazdy na nartach i snowboardzie na Górce Szczęśliwickiej."
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="figowski.com" />
        <meta property="twitter:url" content="https://figowski.com/kontakt" />
        <meta
          name="twitter:title"
          content="Szkoła Narciarska FigowSki Sport | Kontakt"
        />
        <meta
          name="twitter:description"
          content="Potrzebujesz więcej informacji? Skontaktuj się z nami!, Górka Szczęśliwicka Warszawa | Instruktor narciarski z licencją PZN - FigowSki"
        />
        <meta name="twitter:image" content="/images/content/opengraph.jpg" />
      </Helmet>
      <Content className={"content"}>
        <Breadcrums namePage={"Kontakt"} />
        <TextBox>
          <h1>Kontakt z FigowSki</h1>
          <p>
            Potrzebujesz więcej informacji na temat naszych lekcji nauki jazdy
            na nartach i snowboardzie na Górce Szczęśliwickiej? Skontaktuj się z
            nami! Jesteśmy do Twojej dyspozycji, aby odpowiedzieć na wszystkie
            Twoje pytania i zapewnić Ci kompleksową pomoc.
          </p>
          <p>
            Nie wahaj się, jeśli chcesz dowiedzieć się więcej o naszych
            usługach, cenach czy dostępności zajęć. Z przyjemnością pomożemy Ci
            rozpocząć Twoją przygodę na stoku!
          </p>
        </TextBox>
        <Section size={"body-arranged-md"} type={"1"}>
          <TextBox className={"text-clear text-style1 item1"}>
            <img
              src="/images/icons/icon-pin.webp"
              alt={"Ikona lokalizacji"}
            ></img>
            <div>
              <p>Adress:</p>
              <p>
                Szkoła Narciarska FigowSki Sport
                <br />
                Górka Szczęśliwicka
                <br />
                ul. Drawska 22, 02-202 Warszawa
              </p>
            </div>
          </TextBox>
          <TextBox className={"text-clear text-style1 item2"}>
            <img src="/images/icons/icon-email.webp" alt={"Ikona email"}></img>
            <div>
              <p>
                E-mail:
                <br />
                <a href="mailto:figowskisport@gmail.com">
                  figowskisport@gmail.com
                </a>
              </p>
            </div>

            <img
              src="/images/icons/icon-phone.webp"
              alt={"Ikona telefonu"}
            ></img>
            <div>
              <p>
                Telefon:
                <br /> <a href="tel:+48517933264">+48 517 933 264</a>
              </p>
            </div>
          </TextBox>
          <TextBox className={"text-clear text-style1 item13"}>
            <img
              src="/images/icons/icon-clock.webp"
              alt={"Ikona godziny"}
            ></img>

            <div>
              <p>Godziny otwarcia:</p>
              <p>Pon. - Ndz.: 10:00 - 20:00</p>
            </div>
          </TextBox>
        </Section>

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
