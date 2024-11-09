import { ReactNode } from "react";
import style from "./AdminPanel.module.scss";
import useStyles from "~/hooks/useStyle";
const S = useStyles(style);

type AdminPanelType = {
  children: ReactNode;
};

export function AdminPanel({ children }: AdminPanelType) {
  return <div className={S(`admin-dashboard`)}>{children}</div>;
}
