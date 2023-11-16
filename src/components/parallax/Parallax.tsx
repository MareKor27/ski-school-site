import style from "~/components/parallax/Parallax.module.css";

type ParallaxType = {
  image: string;
};

export function Parallax({ image }: ParallaxType) {
  return (
    <>
      <div className={style["parallax"]}>
        <div className={style["appla"]}>
          <div className={style["parallax-heading-1"]}>
            Kochamy jeździć na nartach
          </div>
          <div className={style["parallax-heading-2"]}></div>
        </div>
        <img style={{ backgroundImage: `url(${image})` }}></img>
      </div>
    </>
  );
}
