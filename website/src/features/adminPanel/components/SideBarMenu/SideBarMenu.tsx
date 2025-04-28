import { NavLink } from "react-router-dom";
import style from "./SideBarMenu.module.scss";
import useStyles from "~/hooks/useStyle";
import { Paths } from "~/features/app/constants/Paths";
import { useAccount } from "../../hooks/user/useAccount";
import {
  CalendarClock,
  ClockArrowUp,
  LogOut,
  NotebookTabs,
  Users,
} from "lucide-react";

export function SideBarMenu() {
  const S = useStyles(style);

  const { userToken, extendSesion } = useAccount();

  return (
    <div className={S(`menu`)}>
      <div className={S(`menu-logo`)}>
        <NavLink to={Paths.ADMIN.INDEX.absolute} className={S("")}>
          <img src="/images/logo.webp" alt={"Logo FigowSki Sport"} />
        </NavLink>
      </div>
      <div className={S(`menu-sidebar`)}>
        <NavLink
          to={Paths.ADMIN.SCHEDULE.INDEX.absolute}
          className={({ isActive }) => S(isActive ? "active-menu-tab" : "")}
        >
          <div className={S(`sidebar-li`)}>
            <CalendarClock size={30} strokeWidth={1} />
            Harmonogram
          </div>
        </NavLink>
        {userToken.user && userToken.user?.role === "ADMIN" && (
          <>
            <NavLink
              to={Paths.ADMIN.STAFF.INDEX.absolute}
              className={({ isActive }) => S(isActive ? "active-menu-tab" : "")}
            >
              <div className={S(`sidebar-li`)}>
                <Users size={30} strokeWidth={1} />
                Instruktorzy
              </div>
            </NavLink>
            <NavLink
              to={Paths.ADMIN.OPTION.INDEX.absolute}
              className={({ isActive }) => S(isActive ? "active-menu-tab" : "")}
            >
              <div className={S(`sidebar-li`)}>
                <NotebookTabs size={30} strokeWidth={1} />
                Dziennik zdarzeń
              </div>
            </NavLink>
            {/* <NavLink to={} className={S("")}>
          <div className={S(`sidebar-li`)}>Raporty</div>
        </NavLink> */}
          </>
        )}
      </div>
      <div className={S(`menu-account`)}>
        <div className={S(`info-account`)}>
          <div>{userToken.user?.email}</div>
          <div>{userToken.user ? userToken.user.role : "Wylogowany !"}</div>
        </div>
        <div className={S(`info-account-date`)}>
          {userToken.expirationDate?.toLocaleString("pl-PL", {
            year: "numeric",
            month: "short",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
          })}
        </div>

        <div
          className={S(`account-profile`)}
          onClick={() => extendSesion(userToken.user!)}
        >
          <ClockArrowUp size={20} strokeWidth={1.5} />
          Przedłuż sesję
        </div>

        <NavLink className={S("")} to={Paths.ADMIN.LOGIN.absolute}>
          <div className={S(`account-profile`)} onClick={userToken.clear}>
            {/* <button> */}
            <LogOut size={20} strokeWidth={1.5} />
            Wyloguj
            {/* </button> */}
          </div>
        </NavLink>
      </div>
    </div>
  );
}
