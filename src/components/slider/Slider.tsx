import style from "~/components/slider/Slider.module.scss";
import { OwnButton } from "~/components/button/OwnButton";
//import { Contener } from "../contener/Contener";
import useStyles from "~/hooks/useStyle";
import { useEffect, useRef, useState } from "react";

type SliderType = {
  className: string;
};

export function Slider({}: SliderType) {
  const s2 = useStyles(style);
  const [activeSlider, setActiveSlider] = useState<number>(0);
  const totalSlides = 3;
  const intervalRef = useRef<number | null>(null);

  const checkNumberOfSlider = (index: number) => {
    let slideIndex = 0;
    if (index < 0) {
      slideIndex = totalSlides - 1;
    } else if (index >= totalSlides) {
      slideIndex = 0;
    } else {
      slideIndex = index;
    }
    return slideIndex;
  };

  const handleClick = (index: number | string) => {
    if (typeof index === "string") {
      if (index === "+") {
        setActiveSlider(checkNumberOfSlider(activeSlider + 1));
      } else {
        setActiveSlider(checkNumberOfSlider(activeSlider - 1));
      }
    } else if (typeof index === "number") {
      setActiveSlider(checkNumberOfSlider(index));
    } else {
      setActiveSlider(0);
    }
  };

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     handleClick("+");
  //   }, 7000);

  //   return () => clearInterval(interval);
  // }, [activeSlider]);

  useEffect(() => {
    startInterval();
    return () => clearCurrentInterval(); // Czyści interval po odmontowaniu komponentu
  }, [activeSlider]);

  const startInterval = () => {
    intervalRef.current = window.setInterval(() => {
      handleClick("+");
    }, 5000);
  };

  const clearCurrentInterval = () => {
    if (intervalRef.current !== null) {
      window.clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const handleMouseEnter = () => {
    clearCurrentInterval();
  };

  const handleMouseLeave = () => {
    startInterval();
  };

  return (
    <>
      <div
        className={s2(`slider`)}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div
          className={s2(`arrow left-arrow `)}
          onClick={() => handleClick("-")}
        >
          <svg width="100px" height="300px" transform="scale(1)">
            <image
              xlinkHref="/images/icons/arrow-ll.svg"
              width="100px"
              height="300px"
            />
          </svg>
        </div>
        <div className={s2(`${activeSlider === 0 ? "slide" : "slideoff"}`)}>
          <div className={s2(`appla`)}>
            <div className={s2(`slider-heading-1`)}>
              Nauka jazdy na nartach w Warszawie
            </div>
            <div className={s2(`slider-heading-2`)}>
              <b>Doświadczony instruktor PZN</b> nauczy Cię
              <br /> jazdy na nartach i snowboardzie w sercu Warszawy.
              <br />
              Zarezerwuj lekcje już dziś i rozpocznij swoją przygodę na stoku!
            </div>
            <div className={s2(`slider-heading-3`)}>
              <OwnButton to="/o-nas" text={"Czytaj więcej"} />
            </div>
          </div>

          <img
            src="images/slider/slider1.webp"
            alt="Stok w Parku Szczęśliwickim"
          ></img>
        </div>

        <div className={s2(`${activeSlider === 1 ? "slide" : "slideoff"}`)}>
          <div className={s2(`appla`)}>
            <div className={s2(`slider-heading-1`)}>
              Cennik Lekcji Narciarskich i Snowboardowych
            </div>
            <div className={s2(`slider-heading-2`)}>
              Zapraszamy do zapoznania się z naszymi
              <br /> atrakcyjnymi cenami za lekcje jazdy na nartach i
              snowboardzie.
              <br />{" "}
              <b>
                Oferujemy pakiety szkoleniowe dla wszystkich
                <br /> poziomów zaawansowania i grup wiekowych
              </b>
              .
            </div>
            <div className={s2(`slider-heading-3`)}>
              <OwnButton to="/cennik" text={"Czytaj więcej"} />
            </div>
          </div>

          <img
            src="images/slider/slider2.webp"
            alt="Stok w Parku Szczęśliwickim"
          ></img>
        </div>

        <div className={s2(`${activeSlider === 2 ? "slide" : "slideoff"}`)}>
          <div className={s2(`appla`)}>
            <div className={s2(`slider-heading-1`)}>
              Odkryj Naszą Szkołę Narciarską w Akcji!
            </div>
            <div className={s2(`slider-heading-2`)}>
              <b>Odwiedź naszą galerię</b>, aby zobaczyć, jak nasi instruktorzy
              <br />
              pomagają uczniom rozwijać umiejętności narciarskie na różnych
              <br />
              poziomach zaawansowania. Przekonaj się, dlaczego warto dołączyć
              <br /> do naszej szkoły narciarskiej!
            </div>
            <div className={s2(`slider-heading-3`)}>
              <OwnButton to="/galeria" text={"Czytaj więcej"} />
            </div>
          </div>

          <img
            src="images/slider/slider3.webp"
            alt="Stok w Parku Szczęśliwickim"
          ></img>
        </div>

        <div
          className={s2(`arrow right-arrow`)}
          onClick={() => handleClick("+")}
        >
          <svg width="100px" height="300px">
            <image
              xlinkHref="/images/icons/arrow-rr.svg"
              width="100px"
              height="300px"
            />
          </svg>
        </div>

        <div className={s2(`controls-button`)}>
          <div className={s2(`control-button-slide`)}>
            <div
              className={s2(
                `slide-button ${
                  activeSlider === 0 ? "active-slide-button" : ""
                }`
              )}
              onClick={() => handleClick(0)}
            ></div>
            <div
              className={s2(
                `slide-button ${
                  activeSlider === 1 ? "active-slide-button" : ""
                }`
              )}
              onClick={() => handleClick(1)}
            ></div>
            <div
              className={s2(
                `slide-button ${
                  activeSlider === 2 ? "active-slide-button" : ""
                }`
              )}
              onClick={() => handleClick(2)}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
}
