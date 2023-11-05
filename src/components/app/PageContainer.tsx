import style from "~/components/app/PageConteiner.Module.css";
import { ReactNode } from "react";
import useStyles from "~/hooks/useStyle";

type PageContainerType = {
  children: ReactNode;
  cos: string;
};

export function PageContainer({ children, cos }: PageContainerType) {
  const s = useStyles(style);
  return <div className={s(`page-container ${cos}`)}>{children}</div>;
}
