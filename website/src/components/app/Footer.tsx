import { Link } from "react-router-dom";
import style from "../app/Footer.module.scss";
import { LinkImage } from "~/components/button/LinkImage";
import { Paths } from "~/features/app/constants/Paths";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <div className={style["footer-conteiner"]}>
        <div className={style["footer-css"]}>
          <div className={style["footer-logo-div"]}>
            <div className={style["footer-logo-image"]}>
              <LinkImage
                className={"navbar-logo-image"}
                to={Paths.INDEX.absolute}
                target=""
              >
                <img
                  src="/images/logo-biale-2.webp"
                  alt={"Logo FigowSki Sport"}
                />
              </LinkImage>

              <img
                src="/images/Licencja-SITN-25-26.png"
                alt="SITN"
                className={style["sitn-logo-image"]}
              />
            </div>
          </div>
          <Link className={style["button-nav"]} to={Paths.INDEX.absolute}>
            Strona Główna
          </Link>
          <Link className={style["button-nav"]} to={Paths.ABOUT_US.absolute}>
            O nas
          </Link>
          <Link className={style["button-nav"]} to={Paths.PRICE_LIST.absolute}>
            Cennik
          </Link>
          {/* <Link
            className={style["button-nav"]}
            to={Paths.SCHEDULE.INDEX.absolute}
          >
            Harmonogram
          </Link> */}
          <Link className={style["button-nav"]} to={Paths.GALLERY.absolute}>
            Galeria
          </Link>
          <Link className={style["button-nav"]} to={Paths.CONTACT.absolute}>
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
          {currentYear} FigowSki Sport
        </div>
      </div>
    </>
  );
}
