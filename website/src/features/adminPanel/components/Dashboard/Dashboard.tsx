import { Link } from "react-router-dom";
import style from "./Dashboard.module.scss";
import useStyles from "~/hooks/useStyle";
import { Paths } from "~/features/app/constants/Paths";
import { useSessionStore } from "~/features/authorization/store/useSessionStore";
const S = useStyles(style);
export function Dashboard() {
  const userToken = useSessionStore();
  return (
    <div className={S(`dashboard`)}>
      <Link className={S(`box`)} to={Paths.ADMIN.CALENDAR.absolute}>
        <div className={S(`icon`)}>
          <img src="/images/admin/admin-calendar2.png" alt={"Kalendarz"} />
        </div>
        <div className={S(`name-option`)}>Harmonogram</div>
      </Link>
      {userToken.user && userToken.user?.role === "ADMIN" && (
        <>
          <Link className={S(`box`)} to={Paths.ADMIN.STUFF.absolute}>
            <div className={S(`icon`)}>
              <img src="/images/admin/admin-account.png" alt={"Instruktorzy"} />
            </div>
            <div className={S(`name-option`)}>Instruktorzy</div>
          </Link>
          <Link className={S(`box`)} to={Paths.ADMIN.OPTION.absolute}>
            <div className={S(`icon`)}>
              <img src="/images/admin/admin-option2.png" alt={"Opcje"} />
            </div>
            <div className={S(`name-option`)}>Opcje</div>
          </Link>
        </>
      )}
    </div>
  );
}
