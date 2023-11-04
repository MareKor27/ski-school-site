import style from "~/components/contener/Contener.module.css";
import { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
};

export function Contener({ children }: ContainerProps) {
  return <div className={style["container"]}>{children}</div>;
}
