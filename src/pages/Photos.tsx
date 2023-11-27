import { Gallery } from "~/components/gallery/Gallery";
import { Contener } from "~/components/contener/Contener";
import { Content } from "~/components/content/Content";
import style from "~/components/content/Content.module.css";
import style2 from "~/Global.module.css";
import useStyles from "~/hooks/useStyle";
import { TextBox } from "~/components/textbox/TextBox";

export function Photos() {
  const s = useStyles(style);
  const s2 = useStyles(style2);

  const images = [
    "public/images/gallery/galeria-foto-1.webp",
    "public/images/gallery/galeria-foto-2.webp",
    "public/images/gallery/galeria-foto-3.webp",
    "public/images/gallery/galeria-foto-4.webp",
    "public/images/gallery/galeria-foto-5.webp",
    "public/images/gallery/galeria-foto-6.webp",
    "public/images/gallery/galeria-foto-7.webp",
    "public/images/gallery/galeria-foto-8.webp",
  ];

  const zrodlowe = [
    "public/images/zrodlowe/IMG_0819.jpg",
    "public/images/zrodlowe/IMG_0820.jpg",
    "public/images/zrodlowe/IMG_0821.jpg",
    "public/images/zrodlowe/IMG_0836.jpg",
    "public/images/zrodlowe/IMG_3624.jpg",
    "public/images/zrodlowe/IMG_3650.jpg",
    "public/images/zrodlowe/IMG_3674.jpg",
    "public/images/zrodlowe/IMG_3970.jpg",
    "public/images/zrodlowe/IMG_4057.jpg",
    "public/images/zrodlowe/IMG_5231.jpg",
    "public/images/zrodlowe/IMG_5234.jpg",
    "public/images/zrodlowe/IMG_5632.JPG",
    "public/images/zrodlowe/IMG_7059.jpg",
    "public/images/zrodlowe/IMG_7167.jpg",
    "public/images/zrodlowe/IMG_7269.jpg",
    "public/images/zrodlowe/IMG_7498.jpg",
    "public/images/zrodlowe/IMG_7502.jpg",
    "public/images/zrodlowe/IMG_7580.jpg",
    "public/images/zrodlowe/IMG_7697.jpg",
    "public/images/zrodlowe/IMG_7827.jpg",
    "public/images/zrodlowe/IMG_8067.jpg",
    "public/images/zrodlowe/IMG_8069.jpg",
    "public/images/zrodlowe/IMG_8079.jpg",
    "public/images/zrodlowe/IMG_8080.jpg",
    "public/images/zrodlowe/IMG_8081.jpg",
    "public/images/zrodlowe/IMG_8084.jpg",
    "public/images/zrodlowe/IMG_8085.jpg",
    "public/images/zrodlowe/IMG_8109.jpg",
    "public/images/zrodlowe/IMG_8286.jpg",
    "public/images/zrodlowe/IMG_8311.jpg",
    "public/images/zrodlowe/IMG_8315.jpg",
    "public/images/zrodlowe/IMG_8708.jpg",
    "public/images/zrodlowe/IMG_8729.jpg",
  ];

  return (
    <Contener size="arranged-md">
      <Content clas={"content"}>
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
        </TextBox>
      </Content>
    </Contener>
  );
}
