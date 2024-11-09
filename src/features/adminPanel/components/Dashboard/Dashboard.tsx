import style from "./Dashboard.module.scss";
import useStyles from "~/hooks/useStyle";
const S = useStyles(style);
export function Dashboard() {
  return (
    <div className={S(`admin-dashboard`)}>
      <div className={S(`box`)}>
        <div className={S(`icon`)}>
          <img src="/images/admin/admin-calendar2.png" alt={"Kalendarz"} />
        </div>
        <div className={S(`name`)}>Harmonogram</div>
      </div>
      <div className={S(`box`)}>
        <div className={S(`icon`)}>
          <img src="/images/admin/admin-account.png" alt={"Instruktorzy"} />
        </div>
        <div className={S(`name`)}>Instruktorzy</div>
      </div>
      <div className={S(`box`)}>
        <div className={S(`icon`)}>
          <img src="/images/admin/admin-option2.png" alt={"Opcje"} />
        </div>
        <div className={S(`name`)}>Opcje</div>
      </div>
    </div>
  );
}
