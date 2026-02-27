import style from "./PanelOptions.module.scss";
import tableStyle from "~/assets/styles/tableStyles.module.scss";
import buttonStyle from "~/assets/styles/buttonsStyles.module.scss";
import useStyles from "~/hooks/useStyle";
import { useAudit } from "../../hooks/audit/useAudit";
import {
  auditActionToDescription,
  formatToAuditDate,
} from "../../utils/formatters";

const S = useStyles(style);
const TS = useStyles(tableStyle);
const BS = useStyles(buttonStyle);

export function Option3() {
  const headers = ["Czas", "Informacja"];

  const { audits } = useAudit();

  return (
    <div>
      <div className={TS(`stuff-table`)}>
        <div className={` ${S(`table-footer`)}`}>
          <div>{}</div>
          <div className={` ${S(`pagination`)}`}>
            {" Ilość wierszy:"}
            <select
              name="pagination-rows"
              onChange={(event) => {}}
              className={S(`custom-select`)}
            >
              <option key={10} value="10">
                10
              </option>
              <option key={20} value="20">
                20
              </option>
              <option key={30} value="30">
                30
              </option>
              <option key={40} value="40">
                40
              </option>
              <option key={50} value="50">
                50
              </option>
              <option key={100} value="100">
                100
              </option>
            </select>
            <div> Strona:</div>
            <select
              name="pagination-rows"
              onChange={(event) => {}}
              className={S(`custom-select`)}
            ></select>
          </div>
        </div>
        <div className={`${S(`stuff-table-row`)} ${TS(`th-cell`)}`}>
          {headers.map((title) => (
            <div className={TS(`stuff-table-cell`)} key={title}>
              {title}
            </div>
          ))}
        </div>
        {audits.map((information) => {
          console.log(information);
          return (
            <div className={S(`audit-table`)} key={information.id}>
              <div className={TS(`stuff-table-cell`)}>
                {formatToAuditDate(information.createdAt)}
              </div>

              <div className={TS(`stuff-table-cell`)}>
                {auditActionToDescription(information)}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
