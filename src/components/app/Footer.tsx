import { Link } from "react-router-dom";
import style from "../app/Footer.module.scss";
import { LinkImage } from "~/components/button/LinkImage";

export function Footer() {
  return (
    <>
      <div className={style["footer-conteiner"]}>
        <div className={style["footer-css"]}>
          <div className={style["footer-logo-div"]}>
            <div className={style["footer-logo-image"]}>
              <LinkImage className="linked-image" to="/" target="">
                <img
                  src="/images/logo-biale-2.webp"
                  alt={"Logo FigowSki Sport"}
                />
              </LinkImage>
            </div>
          </div>
          <Link className={style["button-nav"]} to="/">
            Strona Główna
          </Link>
          <Link className={style["button-nav"]} to="/o-nas">
            O nas
          </Link>
          <Link className={style["button-nav"]} to="/cennik">
            Cennik
          </Link>
          <Link className={style["button-nav"]} to="/galeria">
            Galeria
          </Link>
          <Link className={style["button-nav"]} to="/kontakt">
            Kontakt
          </Link>
          <div className={style["quick-contact"]}>
            <p>
              Szkoła Narciarska FigowSki Sport
              <br /> ul. Drawska 22, 02-202 Warszawa
              <br /> Pn - Ndz: 10:00 - 20:00
            </p>
          </div>
        </div>
        <div className={style["copyright"]}>
          Wszelkie prawa zastrzeżone © <br />
          2024 FigowSki Sport
        </div>
      </div>
    </>
  );
}
