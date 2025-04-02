import { NavLink } from "react-router-dom";
import style from "./Schedule.module.scss";
import useStyles from "~/hooks/useStyle";
import { ReactNode } from "react";
import { Paths } from "~/features/app/constants/Paths";
const S = useStyles(style);

type ScheduleType = {
  children: ReactNode;
};

export function Schedule({ children }: ScheduleType) {
  //S(`tab active-tab`) : S(`tab`)}
  return (
    <div className={S(`schedule`)}>
      <div className={S(`title-tabs`)}>
        <h2 className={S(`title-page`)}>Harmonogram</h2>

        <NavLink
          className={({ isActive }) => S(isActive ? "tab active-tab" : "tab")}
          to={Paths.ADMIN.SCHEDULE.CALENDAR.absolute}
        >
          Kalendarz
        </NavLink>

        <NavLink
          className={({ isActive }) => S(isActive ? "tab active-tab" : "tab")}
          to={Paths.ADMIN.SCHEDULE.RESERVATION.absolute}
        >
          Rezerwacje
        </NavLink>

        <NavLink
          className={({ isActive }) => S(isActive ? "tab active-tab" : "tab")}
          to={Paths.ADMIN.SCHEDULE.TIMETABLE.absolute}
        >
          Grafik
        </NavLink>
      </div>
      <div className={S(`content-tabs`)}>
        <div className={S(`content-tab active-content`)}>{children}</div>
      </div>
    </div>
  );
}
