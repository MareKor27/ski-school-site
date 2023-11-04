import style from "~/components/infoBox/InfoBox.module.css";
import { Contener } from "../contener/Contener";
import { ReactNode } from "react";
import useStyles from "~/hooks/useStyle";

type InfoBoxType = {
  children: ReactNode;
  type: number;
  image: string;
};

export function InfoBox({ children, type, image }: InfoBoxType) {
  const s = useStyles(style);
  return (
    <div className={style["infoBox"]}>
      <Contener>
        <div
          className={style["infoBox-content"]}
          style={{
            backgroundImage: image,
          }}
        >
          <div className={s("appla")}></div>

          {/* <div className={[style["text-part"], style[`type${type}`]].join(" ")}> */}
          <div className={s(`text-part type${type}`)}>{children}</div>
        </div>
      </Contener>
    </div>
  );
}
