import { Link } from "react-router-dom";
import style from "./Dashboard.module.scss";
import useStyles from "~/hooks/useStyle";
import { Paths } from "~/features/app/constants/Paths";
import { useSessionStore } from "~/features/authorization/store/useSessionStore";
import { CalendarClock, Users, NotebookTabs } from "lucide-react";
const S = useStyles(style);

export function Dashboard() {
  const userToken = useSessionStore();
  return (
    <div className={S(`dashboard`)}>
      <Link className={S(`box`)} to={Paths.ADMIN.SCHEDULE.CALENDAR.absolute}>
        <div className={S(`icon`)}>
          <CalendarClock size={50} strokeWidth={1} />
        </div>
        <div className={S(`name-option`)}>Harmonogram</div>
      </Link>
      {userToken.user && userToken.user?.role === "ADMIN" && (
        <>
          <Link className={S(`box`)} to={Paths.ADMIN.STAFF.INDEX.absolute}>
            <div className={S(`icon`)}>
              <Users size={40} strokeWidth={1} />
            </div>
            <div className={S(`name-option`)}>Instruktorzy</div>
          </Link>
          <Link className={S(`box`)} to={Paths.ADMIN.OPTION.INDEX.absolute}>
            <div className={S(`icon`)}>
              <NotebookTabs size={40} strokeWidth={1} />
            </div>
            <div className={S(`name-option`)}>Dziennik zdarzeń</div>
          </Link>
        </>
      )}
    </div>
  );
}
