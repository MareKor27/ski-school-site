import style from "../app/Footer.module.css";

export function Footer() {
  return (
    <>
      <div className={style["footer-conteiner"]}>
        <div className={style["footer-css"]}>
          <div className={style["footer-logo"]}>
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
            <p>
              Strefa Ruchu ul. Drawska 22
              <br /> 02-202 Warszawa
              <br /> Pn - Pt: 8:00 - 15:00
              <br /> Sob - Ndz: Nieczynne
            </p>
          </div>
        </div>
        <div className={style["copyright"]}>Copyright HUsKor 2023</div>
      </div>
    </>
  );
}
