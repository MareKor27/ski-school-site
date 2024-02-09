import { Link } from "react-router-dom";
import style from "../app/Footer.module.scss";
import { LinkImage } from "../button/LinkImage";

export function Footer() {
  return (
    <>
      <div className={style["footer-conteiner"]}>
        <div className={style["footer-css"]}>
          <div className={style["footer-logo"]}>
            <LinkImage to="/">
              <img src="/images/logo.png" alt={"Logo FigowSki Sport"} />
            </LinkImage>
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
              <br /> Pn - Pt: 8:00 - 15:00
              <br /> Sob - Ndz: Nieczynne
            </p>
          </div>
        </div>
        <div className={style["copyright"]}>Copyright HUsKor 2024</div>
      </div>
    </>
  );
}
