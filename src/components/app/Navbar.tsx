import style from "~/components/app/Navbar.module.css";

export function Navbar() {
  return (
    <>
      <div className={style["navbar-css"]}>
        <div className={style["navbar-logo"]}>
          <img src="/images/logo.png" />
        </div>
        <a className={style["button-nav"]} href="/">
          Strona Główna
        </a>
        <a className={style["button-nav"]} href="/o-nas">
          O nas
        </a>
        <a className={style["button-nav"]} href="/cennik">
          Cennik
        </a>
        <a className={style["button-nav"]} href="/galeria">
          Galeria
        </a>
        <a className={style["button-nav"]} href="/kontakt">
          Kontakt
        </a>
        <div className={style["quick-contact"]}>
          <a href="mailto:figowskisport@gmail.com">figowskisport@gmail.com</a>
          <br />
          <a href="tel:+48517933264">tel +48 517 933 264</a>
        </div>
      </div>
    </>
  );
}
