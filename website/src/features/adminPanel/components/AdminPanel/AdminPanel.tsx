import { ReactNode } from "react";
import style from "./AdminPanel.module.scss";
import useStyles from "~/hooks/useStyle";
import { Helmet } from "react-helmet-async";
const S = useStyles(style);

type AdminPanelType = {
  children: ReactNode;
};

export function AdminPanel({ children }: AdminPanelType) {
  return (
    <div className={S(`admin-dashboard`)}>
      <Helmet>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      {children}
    </div>
  );
}
