import style from "~/components/infoBox/InfoBox.module.scss";
import { Contener } from "../contener/Contener";
import { ReactNode } from "react";
import useStyles from "~/hooks/useStyle";

type InfoBoxType = {
  children: ReactNode;
  type: number;
  image: string;
  height: string;
  classname: string;
};

export function InfoBox({
  height,
  children,
  type,
  image,
  classname,
}: InfoBoxType) {
  const s = useStyles(style);
  return (
    <div className={s(`infoBox type${type}`)} style={{ height: `${height}px` }}>
      <Contener className={classname}>
        <div
          className={style["infoBox-content"]}
          style={{ backgroundImage: `url(${image})` }}
        >
          <div className={s("appla")}></div>
          <div className={s(`text-part`)}>{children}</div>
        </div>
      </Contener>
    </div>
  );
}
