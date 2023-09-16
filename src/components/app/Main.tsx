import { ReactNode } from "react";
import style from "~/components/app/Main.module.css";

type Main = {
  children: ReactNode;
};

export function Main({ children }: Main) {
  return (
    <div className={style["main-content"]}>
      <h2>Main</h2>
      {children}
    </div>
  );
}
