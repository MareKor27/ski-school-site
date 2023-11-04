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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
          ipsa, pariatur tempora ratione quam corrupti nemo aperiam fuga harum
          beatae tenetur vero dicta molestiae veritatis nisi exercitationem
          dolores! Dolorum, labore? Quisquam deserunt, natus amet obcaecati cum
          delectus ratione vitae perspiciatis distinctio ad sequi sunt beatae
          recusandae ab earum. Eveniet cum quos, in illo quae autem ducimus
          veniam? Praesentium, vero fugit. A sit quidem dolorem eius at.
        </p>
        <p>
          Alias voluptas velit ea dicta blanditiis obcaecati laboriosam ad
          ipsum. Voluptates distinctio beatae accusamus omnis doloremque, cumque
          nisi quia ducimus aut magni, doloribus non. Neque quaerat
          reprehenderit molestiae nesciunt est voluptatibus. Praesentium,
          corrupti tempora? Facilis dolores tenetur minus incidunt magnam
          doloremque ullam sunt, ex ab maiores. Officiis voluptate reprehenderit
          deleniti ex at blanditiis illum. Architecto et dolorem illum labore
          accusamus doloremque inventore atque ipsa veniam at distinctio ea sunt
          aliquam soluta dolores libero, sapiente dolore assumenda quaerat
          reprehenderit laboriosam. Impedit sequi error eveniet ipsa?
        </p>
      </InfoBox>

      <InfoBox type={2} image={"url('public/images/box-2.jpg')"}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia ipsa,
        pariatur tempora ratione quam corrupti nemo aperiam fuga harum beatae
        tenetur vero dicta molestiae veritatis nisi exercitationem dolores!
        Dolorum, labore? Quisquam deserunt, natus amet obcaecati cum delectus
        ratione vitae perspiciatis distinctio ad sequi sunt beatae recusandae ab
        earum. Eveniet cum quos, in illo quae autem ducimus veniam? Praesentium,
        vero fugit. A sit quidem dolorem eius at. Alias voluptas velit ea dicta
        blanditiis obcaecati laboriosam ad ipsum. Voluptates distinctio beatae
        accusamus omnis doloremque, cumque nisi quia ducimus aut magni,
        doloribus non. Neque quaerat reprehenderit molestiae nesciunt est
        voluptatibus. Praesentium, corrupti tempora? Facilis dolores tenetur
        minus incidunt magnam doloremque ullam sunt, ex ab maiores. Officiis
        voluptate reprehenderit deleniti ex at blanditiis illum. Architecto et
        dolorem illum labore accusamus doloremque inventore atque ipsa veniam at
        distinctio ea sunt aliquam soluta dolores libero, sapiente dolore
        assumenda quaerat reprehenderit laboriosam. Impedit sequi error eveniet
        ipsa?
      </InfoBox>

      <InfoBox type={3} image={"url('public/images/box-1.jpg')"}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia ipsa,
        pariatur tempora ratione quam corrupti nemo aperiam fuga harum beatae
        tenetur vero dicta molestiae veritatis nisi exercitationem dolores!
        Dolorum, labore? Quisquam deserunt, natus amet obcaecati cum delectus
        ratione vitae perspiciatis distinctio ad sequi sunt beatae recusandae ab
        earum. Eveniet cum quos, in illo quae autem ducimus veniam? Praesentium,
        vero fugit. A sit quidem dolorem eius at. Alias voluptas velit ea dicta
        blanditiis obcaecati laboriosam ad ipsum. Voluptates distinctio beatae
        accusamus omnis doloremque, cumque nisi quia ducimus aut magni,
        doloribus non. Neque quaerat reprehenderit molestiae nesciunt est
        voluptatibus. Praesentium, corrupti tempora? Facilis dolores tenetur
        minus incidunt magnam doloremque ullam sunt, ex ab maiores. Officiis
        voluptate reprehenderit deleniti ex at blanditiis illum. Architecto et
        dolorem illum labore accusamus doloremque inventore atque ipsa veniam at
        distinctio ea sunt aliquam soluta dolores libero, sapiente dolore
        assumenda quaerat reprehenderit laboriosam. Impedit sequi error eveniet
        ipsa?
      </InfoBox>

      <Parallax />
    </>
  );
}
