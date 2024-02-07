import { useState } from "react";
import style from "~/components/app/Navbar.module.scss";

export function Navbar() {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <>
      <div className={style["quick-contact-only-xs"]}>
        <a href="mailto:figowskisport@gmail.com">figowskisport@gmail.com</a>

        <a href="tel:+48517933264">tel +48 517 933 264</a>
      </div>
      <nav className={style["navbar-css"]}>
        <div className={style["navbar-logo"]}>
          <img src="/images/logo.png" alt={"Logo FigowSki Sport"} />
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
            <a className={style["button-nav"]} href="/">
              Strona Główna
            </a>
          </li>
          <li>
            <a className={style["button-nav"]} href="/o-nas">
              O nas
            </a>
          </li>
          <li>
            <a className={style["button-nav"]} href="/cennik">
              Cennik
            </a>
          </li>
          <li>
            <a className={style["button-nav"]} href="/galeria">
              Galeria
            </a>
          </li>
          <li>
            <a className={style["button-nav"]} href="/kontakt">
              Kontakt
            </a>
          </li>
        </menu>
        <div className={style["quick-contact"]}>
          <a href="mailto:figowskisport@gmail.com">figowskisport@gmail.com</a>
          <br />
          <a href="tel:+48517933264">tel +48 517 933 264</a>
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
