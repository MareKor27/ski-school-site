import { Contener } from "~/components/contener/Contener";
import { Content } from "~/components/content/Content";

export function Contact() {
  return (
    <Contener resolution="md">
      <Content clas={"content"}>
        <h1>Contact</h1>
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
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2445.0450452839646!2d20.9562744!3d52.2062289!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471eccaa5fc07595%3A0x43a0adedb664106a!2sDrawska%2022%2C%2002-202%20Warszawa!5e0!3m2!1spl!2spl!4v1699181558414!5m2!1spl!2spl"
          width="100%"
          height="450"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy={"no-referrer-when-downgrade"}
        ></iframe>
      </Content>
    </Contener>
  );
}
