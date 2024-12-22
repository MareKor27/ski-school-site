import { ReactNode } from "react";
import useStyles from "~/hooks/useStyle";
import style from "~/components/content/Content.module.scss";

type ContentType = {
  children: ReactNode;
  className: string;
};

export function Content({ children, className }: ContentType) {
  const s = useStyles(style);
  return <div className={s(`content ${className}`)}>{children}</div>;
}
