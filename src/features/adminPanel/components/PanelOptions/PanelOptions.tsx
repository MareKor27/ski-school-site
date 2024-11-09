import style from "./PanelOptions.module.scss";
import useStyles from "~/hooks/useStyle";
const S = useStyles(style);
export function PanelOptions() {
  return (
    <div className={S(`option`)}>
      <h1>Option</h1>
    </div>
  );
}
