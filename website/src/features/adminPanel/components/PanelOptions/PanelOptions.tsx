import { ReactNode, useEffect, useState } from "react";
import style from "./PanelOptions.module.scss";
import useStyles from "~/hooks/useStyle";
import navStyle from "~/assets/styles/navStyles.module.scss";
import { Logs, SquareActivity, Videotape } from "lucide-react";
import { NavLink } from "react-router-dom";
import { Paths } from "~/features/app/constants/Paths";
const NS = useStyles(navStyle);
const S = useStyles(style);

type ScheduleType = {
  children: ReactNode;
};
export function PanelOptions({ children }: ScheduleType) {
  return (
    <div className={S(`option`)}>
      <div className={NS(`title-tabs`)}>
        <h2 className={NS(`title-page`)}>Opcje</h2>

        <div className={NS(`title-nav-links`)}>
          <NavLink
            className={({ isActive }) =>
              NS(isActive ? "tab active-tab" : "tab")
            }
            to={Paths.ADMIN.OPTION.OPTION_ONE.absolute}
          >
            <Videotape size={25} strokeWidth={1} />
            Opcja 1
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              NS(isActive ? "tab active-tab" : "tab")
            }
            to={Paths.ADMIN.OPTION.OPTION_TWO.absolute}
          >
            <SquareActivity size={25} strokeWidth={1} />
            Opcja 2
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              NS(isActive ? "tab active-tab" : "tab")
            }
            to={Paths.ADMIN.OPTION.OPTION_THREE.absolute}
          >
            <Logs size={25} strokeWidth={1} />
            Opcja 3
          </NavLink>
        </div>
      </div>

      <div className={NS(`content-tabs`)}>
        <div className={NS(`content-tab`)}>{children}</div>
      </div>
    </div>
  );
}
