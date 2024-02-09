import { useState } from "react";
import { Link } from "react-router-dom";
import style from "~/components/app/Navbar.module.scss";
import { LinkImage } from "../button/LinkImage";

export function Navbar() {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <>
      <div className={style["quick-contact-only-xs"]}>
        <Link to="mailto:figowskisport@gmail.com">figowskisport@gmail.com</Link>

        <Link to="tel:+48517933264">tel +48 517 933 264</Link>
      </div>
      <nav className={style["navbar-css"]}>
        {/* <div className={style["navbar-logo"]}> */}
        <LinkImage className={"navbar-logo"} to="/">
          <img src="/images/logo.png" alt={"Logo FigowSki Sport"} />
        </LinkImage>
        {/* </div> */}

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
            <Link className={style["button-nav"]} to="/">
              Strona Główna
            </Link>
          </li>
          <li>
            <Link className={style["button-nav"]} to="/o-nas">
              O nas
            </Link>
          </li>
          <li>
            <Link className={style["button-nav"]} to="/cennik">
              Cennik
            </Link>
          </li>
          <li>
            <Link className={style["button-nav"]} to="/galeria">
              Galeria
            </Link>
          </li>
          <li>
            <Link className={style["button-nav"]} to="/kontakt">
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
