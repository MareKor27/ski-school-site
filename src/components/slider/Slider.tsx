import style from "~/components/slider/Slider.module.css";

export function Slider() {
  return (
    <>
      <div className={style["slider"]}>
        <div className={style["appla"]}>
          <div className={style["slider-heading-1"]}>
            Szkoła narciarstwa i snowboardu FigowSki
          </div>
          <div className={style["slider-heading-2"]}>Zapraszamy !</div>
        </div>
        <img src="public/images/slider.jpg"></img>
      </div>
    </>
  );
}
