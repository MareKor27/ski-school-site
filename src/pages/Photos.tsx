import { Gallery } from "~/components/gallery/Gallery";
import { Contener } from "~/components/contener/Contener";
import { Content } from "~/components/content/Content";
// import style from "~/components/content/Content.module.css";
// import style2 from "~/Global.module.css";
// import useStyles from "~/hooks/useStyle";
import { TextBox } from "~/components/textbox/TextBox";

export function Photos() {
  // const s = useStyles(style);
  // const s2 = useStyles(style2);

  const images = [
    "images/gallery/galeria-foto-1.webp",
    "images/gallery/galeria-foto-2.webp",
    "images/gallery/galeria-foto-3.webp",
    "images/gallery/galeria-foto-4.webp",
    "images/gallery/galeria-foto-5.webp",
    "images/gallery/galeria-foto-6.webp",
    "images/gallery/galeria-foto-7.webp",
    "images/gallery/galeria-foto-8.webp",
  ];

  const zrodlowe = [
    "images/zrodlowe/IMG_0819.jpg",
    "images/zrodlowe/IMG_0820.jpg",
    "images/zrodlowe/IMG_0821.jpg",
    "images/zrodlowe/IMG_0836.jpg",
    "images/zrodlowe/IMG_3624.jpg",
    "images/zrodlowe/IMG_3650.jpg",
    "images/zrodlowe/IMG_3674.jpg",
    "images/zrodlowe/IMG_3970.jpg",
    "images/zrodlowe/IMG_4057.jpg",
    "images/zrodlowe/IMG_5231.jpg",
    "images/zrodlowe/IMG_5234.jpg",
    "images/zrodlowe/IMG_5632.JPG",
    "images/zrodlowe/IMG_7059.jpg",
    "images/zrodlowe/IMG_7167.jpg",
    "images/zrodlowe/IMG_7269.jpg",
    "images/zrodlowe/IMG_7498.jpg",
    "images/zrodlowe/IMG_7502.jpg",
    "images/zrodlowe/IMG_7580.jpg",
    "images/zrodlowe/IMG_7697.jpg",
    "images/zrodlowe/IMG_7827.jpg",
    "images/zrodlowe/IMG_8067.jpg",
    "images/zrodlowe/IMG_8069.jpg",
    "images/zrodlowe/IMG_8079.jpg",
    "images/zrodlowe/IMG_8080.jpg",
    "images/zrodlowe/IMG_8081.jpg",
    "images/zrodlowe/IMG_8084.jpg",
    "images/zrodlowe/IMG_8085.jpg",
    "images/zrodlowe/IMG_8109.jpg",
    "images/zrodlowe/IMG_8286.jpg",
    "images/zrodlowe/IMG_8311.jpg",
    "images/zrodlowe/IMG_8315.jpg",
    "images/zrodlowe/IMG_8708.jpg",
    "images/zrodlowe/IMG_8729.jpg",
  ];

  return (
    <Contener className="body-arranged-md">
      <Content className={"content"}>
        <TextBox>
          <h1>Galeria</h1>
          <p>Zapraszamy do galerii</p>
          <p></p>
        </TextBox>
        <TextBox className={"text-center"}>
          <Gallery images={images} />
          <h2>Zlot przyjaciół klubu FigowSki</h2>
          <p>24.11.2023r</p>
          <p></p>
          <Gallery images={images} />
          <h2>Narty</h2>
          <p>24.12.2023r</p>
          <p></p>
          <Gallery images={zrodlowe} />
        </TextBox>
      </Content>
    </Contener>
  );
}
