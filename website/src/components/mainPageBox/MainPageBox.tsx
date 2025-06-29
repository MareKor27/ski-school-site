import style from "~/components/mainPageBox/MainPageBox.module.scss";
import { Contener } from "../contener/Contener";
import { ReactNode } from "react";
import useStyles from "~/hooks/useStyle";

type MainPageBoxType = {
  children: ReactNode;
  className: string;
  image: string;
  alt: string;
};

export function MainPageBox({
  children,
  className,
  image,
  alt,
}: MainPageBoxType) {
  const s = useStyles(style);
  return (
    <div className={s(`mainPage`)}>
      <Contener className={className}>
        <div className={s(`main`)}>
          <div className={s(`mainPageBox`)}>
            <img className={s(`image-part`)} src={image} alt={alt}></img>
            <div className={s(`text-part`)}>{children}</div>
          </div>
        </div>
      </Contener>
    </div>
  );
}
