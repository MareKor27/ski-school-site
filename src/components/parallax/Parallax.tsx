import style from "~/components/parallax/Parallax.module.scss";

type ParallaxType = {
  image: string;
  alt: string;
};

export function Parallax({ image, alt }: ParallaxType) {
  return (
    <>
      <div className={style["parallax"]}>
        <div className={style["appla"]}>
          <div className={style["parallax-heading-1"]}>
            Kochamy jeździć na nartach
          </div>
          {/* <div className={style["parallax-heading-2"]}></div> */}
        </div>
        <img style={{ backgroundImage: `url(${image})` }} alt={alt}></img>
      </div>
    </>
  );
}
