import style from "~/components/contener/Contener.module.css";
import { ReactNode } from "react";
import useStyles from "~/hooks/useStyle";

type ContainerProps = {
  children: ReactNode;
  size: string;
};

export function Contener({ children, size }: ContainerProps) {
  const s = useStyles(style);
  return (
    <div className={s(`container body-${size}`)}>
      {children}
      {/* <div className={s(`conteinder-body-${conteinderBody}`)}></div> */}
    </div>
  );
}
