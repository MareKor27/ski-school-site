import style from "~/components/parallax/Parallax.module.css";

export function Parallax() {
  return (
    <>
      <div className={style["parallax"]}>
        <div className={style["appla"]}>
          <div className={style["parallax-heading-1"]}>
            Kochamy jeździć na nartach
          </div>
          <div className={style["parallax-heading-2"]}></div>
        </div>
        <img
          style={{
            backgroundImage: "url('public/images/skiing-parallax.webp')",
          }}
        ></img>
      </div>
    </>
  );
}
