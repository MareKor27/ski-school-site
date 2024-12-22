import { ReactNode } from "react";
import style from "~/components/app/Main.module.scss";

type Main = {
  children: ReactNode;
};

export function Main({ children }: Main) {
  return <div className={style["main-content"]}>{children}</div>;
}
