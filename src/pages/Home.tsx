import { OwnButton } from "~/components/button/OwnButton";
import { InfoBox } from "~/components/infoBox/InfoBox";
import { Parallax } from "~/components/parallax/Parallax";
import { Slider } from "~/components/slider/Slider";

export function Home() {
  return (
    <>
      <Slider />
      <InfoBox type={1} image={"url('public/images/box-1.jpg')"}>
        <h2>O nas</h2>
        <p>
          <b>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            ipsa, pariatur tempora ratione quam corrupti nemo aperiam fuga harum
            beatae tenetur vero dicta molestiae veritatis nisi exercitationem
          </b>
        </p>
        <p>
          Alias voluptas velit ea dicta blanditiis obcaecati laboriosam ad
          ipsum. Voluptates distinctio beatae accusamus omnis doloremque, cumque
          nisi quia ducimus aut magni, doloribus non. Neque quaerat
          reprehenderit molestiae nesciunt est voluptatibus. Praesentium,
          corrupti tempora?
        </p>
        <OwnButton link={"o-nas"} text={"Czytaj więcej"} />
      </InfoBox>

      <InfoBox type={2} image={"url('public/images/box-2.jpg')"}>
        <h2>Oferta</h2>
        <p>
          <b>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            ipsa, pariatur tempora ratione quam corrupti nemo aperiam fuga harum
            beatae tenetur vero dicta molestiae veritatis nisi exercitationem
          </b>
        </p>
        <p>
          Alias voluptas velit ea dicta blanditiis obcaecati laboriosam ad
          ipsum. Voluptates distinctio beatae accusamus omnis doloremque, cumque
          nisi quia ducimus aut magni, doloribus non. Neque quaerat
          reprehenderit molestiae nesciunt est voluptatibus. Praesentium,
          corrupti tempora?
        </p>
        <OwnButton link={"cennik"} text={"Sprawdz naszą ofertę"} />
      </InfoBox>

      <InfoBox type={3} image={"url('public/images/box-1.jpg')"}>
        <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
        <p>
          Mollitia ipsa, pariatur tempora ratione quam corrupti nemo aperiam
          fuga harum beatae tenetur vero dicta molestiae veritatis nisi
          exercitationem dolores! Dolorum, labore? Quisquam deserunt, natus amet
          obcaecati cum delectus ratione vitae perspiciatis distinctio ad sequi
          sunt beatae recusandae ab earum.
        </p>
        <p>
          Eveniet cum quos, in illo quae autem ducimus veniam? Praesentium, vero
          fugit. A sit quidem dolorem eius at. Alias voluptas velit ea dicta
          blanditiis obcaecati laboriosam ad ipsum. Voluptates distinctio beatae
          accusamus omnis doloremque, cumque nisi quia ducimus aut magni,
          doloribus non.
        </p>
        <OwnButton link={"kontakt"} text={"Kontakt"} />
      </InfoBox>

      <Parallax />
    </>
  );
}
