import style from "~/components/parallax/Parallax.module.scss";
import { ReactNode } from "react";

type ParallaxType = {
  children: ReactNode;
  image: string;
  alt?: string;
};

export function Parallax({ image, alt, children }: ParallaxType) {
  return (
    <>
      <div className={style["parallax"]} aria-label={alt}>
        <div className={style["appla"]}>
          <div className={style["parallax-heading-1"]}>{children}</div>
          {/* <div className={style["parallax-heading-2"]}></div> */}
        </div>
        <div
          className={style["pralax-img"]}
          style={{ backgroundImage: `url(${image})` }}
        ></div>
      </div>
    </>
  );
}
