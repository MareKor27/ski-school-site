import style from "./CompanyStuff.module.scss";
import navStyle from "~/assets/styles/navStyles.module.scss";
import useStyles from "~/hooks/useStyle";

import { ReactNode } from "react";
import { Paths } from "~/features/app/constants/Paths";
import { NavLink, useParams } from "react-router-dom";
import { List, UserPlus, UserPen } from "lucide-react";

type CompanyStuffType = {
  children: ReactNode;
};
const S = useStyles(style);
const NS = useStyles(navStyle);
export function CompanyStuff({ children }: CompanyStuffType) {
  const params = useParams();
  const userId = params.id ? Number(params.id) : null;

  return (
    <div className={S(`company-stuff`)}>
      <div className={NS(`title-tabs`)}>
        <h2 className={NS(`title-page`)}>Instruktorzy</h2>
        <div className={NS(`title-nav-links`)}>
          <NavLink
            className={({ isActive }) =>
              NS(isActive ? "tab active-tab" : "tab")
            }
            to={Paths.ADMIN.STAFF.INDEX.absolute}
            end
          >
            <List size={25} strokeWidth={1} />
            Lista
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              NS(isActive ? "tab active-tab" : "tab")
            }
            to={Paths.ADMIN.STAFF.CREATE.absolute}
            end
          >
            <UserPlus size={25} strokeWidth={1} />
            Stwórz
          </NavLink>
          {userId && (
            <NavLink
              className={NS("tab active-tab")}
              to={Paths.ADMIN.STAFF.EDIT.absolute(userId)}
              end
            >
              <UserPen size={25} strokeWidth={1} />
              Edycja
            </NavLink>
          )}
        </div>
      </div>
      <div className={NS(`content-tabs`)}>
        <div className={NS(`content-tab`)}>{children}</div>
      </div>
    </div>
  );
}
