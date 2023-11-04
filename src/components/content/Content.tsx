import { ReactNode } from "react";
import useStyles from "~/hooks/useStyle";
import style from "~/components/content/Content.module.css";

type ContentType = {
  children: ReactNode;
  clas: string;
};

export function Content({ children, clas }: ContentType) {
  const s = useStyles(style);
  return <div className={s(`content ${clas}`)}>{children}</div>;
}
