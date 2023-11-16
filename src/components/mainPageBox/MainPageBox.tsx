import style from "~/components/MainPageBox/MainPageBox.module.css";
import { Contener } from "../contener/Contener";
import { ReactNode } from "react";
import useStyles from "~/hooks/useStyle";

type MainPageBoxType = {
  children: ReactNode;
  type: number;
  image: string;
};

export function MainPageBox({ children, type, image }: MainPageBoxType) {
  const s = useStyles(style);
  return (
    <div className={s(`mainPageBox type${type}`)}>
      <Contener resolution="md">
        <div
          className={style["mainPageBox-content"]}
          // style={{
          //   backgroundImage: image,
          // }}
        >
          <div className={s("appla")}></div>
          <div className={s(`photo-part`)}>
            <img src={image}></img>
          </div>
          <div className={s(`text-part`)}>{children}</div>
        </div>
      </Contener>
    </div>
  );
}
