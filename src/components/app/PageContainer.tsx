import style from "~/components/app/PageConteiner.module.scss";
import { ReactNode } from "react";
import useStyles from "~/hooks/useStyle";

type PageContainerType = {
  children: ReactNode;
};

export function PageContainer({ children }: PageContainerType) {
  const s = useStyles(style);
  return <div className={s(`page-container`)}>{children}</div>;
}
