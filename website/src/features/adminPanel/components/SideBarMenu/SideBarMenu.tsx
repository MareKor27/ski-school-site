import { Link } from "react-router-dom";
import style from "./SideBarMenu.module.scss";
import useStyles from "~/hooks/useStyle";
import { Paths } from "~/features/app/constants/Paths";
import { useSessionStore } from "~/features/authorization/store/useSessionStore";
import { Role } from "~/features/authorization/store/useSessionStore";
const S = useStyles(style);
export function SideBarMenu() {
  const userToken = useSessionStore();

  const user = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user")!)
    : null;

  return (
    <div className={S(`menu`)}>
      <div className={S(`menu-logo`)}>
        <Link to={Paths.ADMIN.INDEX.absolute} className={S("")}>
          <img src="/images/logo.webp" alt={"Logo FigowSki Sport"} />
        </Link>
      </div>
      <div className={S(`menu-sidebar`)}>
        <Link to={Paths.ADMIN.SCHEDULE.CALENDAR.absolute} className={S("")}>
          <div className={S(`sidebar-li`)}>Harmonogram</div>
        </Link>
        {userToken.user && userToken.user?.role === "ADMIN" && (
          <>
            <Link to={Paths.ADMIN.STAFF.INDEX.absolute} className={S("")}>
              <div className={S(`sidebar-li`)}>Instruktorzy</div>
            </Link>
            <Link to={Paths.ADMIN.OPTION.absolute} className={S("")}>
              <div className={S(`sidebar-li`)}>Dziennik zdarzeń</div>
            </Link>
            {/* <Link to={} className={S("")}>
          <div className={S(`sidebar-li`)}>Raporty</div>
        </Link> */}
          </>
        )}
      </div>
      <div className={S(`menu-account`)}>
        <div className={S(`account-profile`)}>
          {userToken.user?.email}
          <br />
          {userToken.user?.id}
          <br />
          {user ? user.role : "Wylogowany !"}
        </div>
        <Link className={S("")} to={Paths.ADMIN.LOGIN.absolute}>
          <div className={S(`account-profile`)} onClick={userToken.clear}>
            Wyloguj
          </div>
        </Link>
      </div>
    </div>
  );
}
