import style from "~/components/slider/Slider.module.css";
import { Contener } from "../contener/Contener";

type SliderType = {
  className: string;
};

export function Slider({ className }: SliderType) {
  return (
    <>
      <div className={style["slider"]}>
        <div className={style["appla"]}>
          {/* <Contener className={className}> */}
          <div className={style["slider-heading-1"]}>
            Narciarstwo z instruktorem PZN <br />
            dla każdego - „małego i DUŻEGO”
          </div>
          <div className={style["slider-heading-2"]}>Zapraszamy !</div>
          <div className={style["slider-heading-3"]}></div>
          {/* </Contener> */}
        </div>

        <img src="public/images/slider/slider-n-4.webp"></img>
      </div>
    </>
  );
}
