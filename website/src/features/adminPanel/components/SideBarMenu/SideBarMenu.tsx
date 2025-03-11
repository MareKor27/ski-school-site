import { Link } from "react-router-dom";
import style from "./SideBarMenu.module.scss";
import useStyles from "~/hooks/useStyle";
import { Paths } from "~/features/app/constants/Paths";
import { useSessionStore } from "~/features/authorization/store/useSessionStore";
const S = useStyles(style);
export function SideBarMenu() {
  const userToken = useSessionStore();

  return (
    <div className={S(`menu`)}>
      <div className={S(`menu-logo`)}>
        <Link to={Paths.ADMIN.INDEX.absolute} className={S("")}>
          <img src="/images/logo.webp" alt={"Logo FigowSki Sport"} />
        </Link>
      </div>
      <div className={S(`menu-sidebar`)}>
        <Link to={Paths.ADMIN.CALENDAR.absolute} className={S("")}>
          <div className={S(`sidebar-li`)}>Harmonogram</div>
        </Link>
        <Link to={Paths.ADMIN.STUFF.absolute} className={S("")}>
          <div className={S(`sidebar-li`)}>Instruktorzy</div>
        </Link>
        <Link to={Paths.ADMIN.OPTION.absolute} className={S("")}>
          <div className={S(`sidebar-li`)}>Dziennik zdarzeń</div>
        </Link>
        {/* <Link to={} className={S("")}>
          <div className={S(`sidebar-li`)}>Raporty</div>
        </Link> */}
      </div>
      <div className={S(`menu-account`)}>
        <div className={S(`account-profile`)}>{userToken.user?.email}</div>
        <Link className={S("")} to={Paths.INDEX.absolute}>
          <div className={S(`account-profile`)} onClick={userToken.clear}>
            Wyloguj
          </div>
        </Link>
      </div>
    </div>
  );
}
