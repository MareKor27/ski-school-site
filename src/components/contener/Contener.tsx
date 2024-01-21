import style from "~/components/contener/Contener.module.css";
import { ReactNode } from "react";
import useStyles from "~/hooks/useStyle";

type ContainerProps = {
  children: ReactNode;
  className: string;
};

export function Contener({ children, className }: ContainerProps) {
  const s = useStyles(style);
  return (
    <div className={s(`container ${className}`)}>
      {children}
      {/* <div className={s(`conteinder-body-${conteinderBody}`)}></div> */}
    </div>
  );
}
