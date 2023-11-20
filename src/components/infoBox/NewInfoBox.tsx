import style from "~/components/infoBox/NewInfoBox.module.css";
import { Contener } from "../contener/Contener";
import { ReactNode } from "react";
import useStyles from "~/hooks/useStyle";

type InfoBoxType = {
  children: ReactNode;
  //   type: number;
  image: string;
};

export function NewInfoBox({ children, image }: InfoBoxType) {
  const s = useStyles(style);
  return (
    <div className={s(`infobox type1`)}>
      <div className={s("infobox-overlay")}>
        <Contener size="stretched">
          <div className={s("bg-image")}>
            <div className={s("bg-overlay")}>
              <div className={s("infobox-content")}>
                <div className={s("ip-image")}>
                  <div className={s("ip-overlay")}></div>
                </div>
                <div className={s("tp-image")}>
                  <div className={s("tp-overlay")}>
                    <div className={s("tp-text")}>{children}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Contener>
      </div>
    </div>
  );
}
