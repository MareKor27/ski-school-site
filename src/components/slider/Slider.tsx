import style from "~/components/slider/Slider.module.css";

export function Slider() {
  return (
    <>
      <div className={style["slider"]}>
        <div className={style["appla"]}>
          <div className={style["slider-heading-1"]}>
            Narciarstwo z instruktorem PZN dla każdego - „małego i DUŻEGO”
          </div>
          <div className={style["slider-heading-2"]}>Zapraszamy !</div>
          <div className={style["slider-heading-3"]}></div>
        </div>
        <img src="public/images/slider/slider-n-4.webp"></img>
      </div>
    </>
  );
}
