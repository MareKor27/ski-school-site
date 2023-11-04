import style from "~/components/contener/Contener.module.css";
import { ReactNode } from "react";
import useStyles from "~/hooks/useStyle";

type ContainerProps = {
  children: ReactNode;
  resolution: string;
};

export function Contener({ children, resolution }: ContainerProps) {
  const s = useStyles(style);
  return <div className={s(`container body-${resolution}`)}>{children}</div>;
}
