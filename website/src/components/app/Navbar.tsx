import { useState } from "react";
import { Link } from "react-router-dom";
import style from "~/components/app/Navbar.module.scss";
import { LinkImage } from "../button/LinkImage";
import { Paths } from "~/features/app/constants/Paths";

export function Navbar() {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <>
      <div className={style["quick-contact-only-xs"]}>
        <Link to="mailto:figowskisport@gmail.com">figowskisport@gmail.com</Link>

        <Link to="tel:+48517933264">tel +48 517 933 264</Link>
      </div>
      <nav className={style["navbar-css"]}>
        <div className={style["navbar-logo-div"]}>
          <LinkImage
            className={"navbar-logo-image"}
            to={Paths.INDEX.absolute}
            target=""
          >
            <img src="/images/logo-biale-2.webp" alt={"Logo FigowSki Sport"} />
          </LinkImage>

          <img
            src="/images/licenses/sitn-25-26.png"
            alt="SITN"
            className={style["sitn-logo-image"]}
          />
        </div>

        <menu
          className={style["navbar-menu-sidebar"]}
          style={{ width: showSidebar ? "100vw" : "0px" }}
        >
          <li
            className={style["button-hamburger-close"]}
            onClick={() => {
              setShowSidebar(false);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="50"
              viewBox="0 -960 960 960"
              width="50"
            >
              <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
            </svg>
          </li>
          <li>
            <Link
              className={style["button-nav"]}
              to={Paths.INDEX.absolute}
              onClick={() => {
                setShowSidebar(false);
              }}
            >
              Strona Główna
            </Link>
          </li>
          <li>
            <Link
              className={style["button-nav"]}
              to={Paths.ABOUT_US.absolute}
              onClick={() => {
                setShowSidebar(false);
              }}
            >
              O nas
            </Link>
          </li>
          <li>
            <Link
              className={style["button-nav"]}
              to={Paths.WINTER.absolute}
              onClick={() => {
                setShowSidebar(false);
              }}
            >
              Oferta-Zima
            </Link>
          </li>
          <li>
            <Link
              className={style["button-nav"]}
              to={Paths.PRICE_LIST.absolute}
              onClick={() => {
                setShowSidebar(false);
              }}
            >
              Cennik
            </Link>
          </li>
          {/* <li>
            <Link
              className={style["button-nav"]}
              to={Paths.SCHEDULE.INDEX.absolute}
              onClick={() => {
                setShowSidebar(false);
              }}
            >
              Harmonogram
            </Link>
          </li> */}
          <li>
            <Link
              className={style["button-nav"]}
              to={Paths.GALLERY.absolute}
              onClick={() => {
                setShowSidebar(false);
              }}
            >
              Galeria
            </Link>
          </li>
          <li>
            <Link
              className={style["button-nav"]}
              to={Paths.CONTACT.absolute}
              onClick={() => {
                setShowSidebar(false);
              }}
            >
              Kontakt
            </Link>
          </li>
        </menu>
        <div className={style["quick-contact"]}>
          <Link to="mailto:figowskisport@gmail.com">
            figowskisport@gmail.com
          </Link>
          <br />
          <Link to="tel:+48517933264">tel +48 517 933 264</Link>
        </div>
        <div
          className={style["button-hamburger-open"]}
          onClick={() => {
            setShowSidebar(true);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="50"
            viewBox="0 -960 960 960"
            width="50"
          >
            <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
          </svg>
        </div>
      </nav>
    </>
  );
}
