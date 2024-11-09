import style from "./CompanyStuff.module.scss";
import useStyles from "~/hooks/useStyle";
const S = useStyles(style);
export function CompanyStuff() {
  return (
    <div className={S(`company-stuff`)}>
      <h1>CompanyStuff</h1>
    </div>
  );
}
