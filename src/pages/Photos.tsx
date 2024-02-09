import { Gallery } from "~/components/gallery/Gallery";
import { Contener } from "~/components/contener/Contener";
import { Content } from "~/components/content/Content";
// import style from "~/components/content/Content.module.css";
// import style2 from "~/Global.module.css";
// import useStyles from "~/hooks/useStyle";
import { TextBox } from "~/components/textbox/TextBox";
import { Helmet } from "react-helmet-async";
import gallery from "~/data/gallery.json";

export function Photos() {
  // const s = useStyles(style);
  // const s2 = useStyles(style2);

  return (
    <Contener className="body-arranged-md">
      <Helmet>
        <title>FigowSki - Galeria</title>
        <meta name="description" content="FigowSki - Galeria opis" />
      </Helmet>
      <Content className={"content"}>
        <TextBox>
          <h1>Galeria</h1>
          <p>Zapraszamy do galerii</p>
          <p></p>
        </TextBox>
        <TextBox className={"text-center"}>
          <Gallery
            photos={gallery.filter((img) => img.gallery === "galleryOne")}
          />
          <h2>Zlot przyjaciół klubu FigowSki</h2>
          <p>24.11.2023r</p>
          <p></p>
          <Gallery
            photos={gallery.filter((img) => img.gallery === "galleryTwo")}
          />
          <h2>Narty</h2>
          <p>24.12.2023r</p>
          <p></p>
          <Gallery
            photos={gallery.filter((img) => img.gallery === "galleryThree")}
          />
        </TextBox>
      </Content>
    </Contener>
  );
}
