import { NavLink, useLocation } from "react-router-dom";
import style from "./Schedule.module.scss";
import navStyle from "~/assets/styles/navStyles.module.scss";
import useStyles from "~/hooks/useStyle";
import { ReactNode, useEffect, useRef } from "react";
import { Paths } from "~/features/app/constants/Paths";
import { CalendarCheck, CalendarCog, CalendarDays } from "lucide-react";
const S = useStyles(style);
const NS = useStyles(navStyle);

type ScheduleType = {
  children: ReactNode;
};

export function Schedule({ children }: ScheduleType) {
  return (
    <div className={S(`schedule`)}>
      <div className={NS(`title-tabs`)}>
        <h2 className={NS(`title-page`)}>Harmonogram</h2>

        <div className={NS(`title-nav-links`)}>
          <NavLink
            className={({ isActive }) =>
              NS(isActive ? "tab active-tab" : "tab")
            }
            to={Paths.ADMIN.SCHEDULE.CALENDAR.absolute}
          >
            <CalendarDays size={25} strokeWidth={1} />
            Kalendarz
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              NS(isActive ? "tab active-tab" : "tab")
            }
            to={Paths.ADMIN.SCHEDULE.RESERVATION.absolute}
          >
            <CalendarCheck size={25} strokeWidth={1} />
            Rezerwacje
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              NS(isActive ? "tab active-tab" : "tab")
            }
            to={Paths.ADMIN.SCHEDULE.TIMETABLE.absolute}
          >
            <CalendarCog size={25} strokeWidth={1} />
            Grafik
          </NavLink>
        </div>
      </div>
      <div className={NS(`content-tabs`)}>
        <div className={NS(`content-tab`)}>{children}</div>
      </div>
    </div>
  );
}
