import style from "./UserManagement.module.scss";
const S = useStyles(style);
import buttonStyle from "~/assets/styles/buttonsStyles.module.scss";
const BS = useStyles(buttonStyle);
import tableStyle from "~/assets/styles/tableStyles.module.scss";
const TS = useStyles(tableStyle);
import useStyles from "~/hooks/useStyle";
import { UserDto } from "~/features/adminPanel/api/type/user.dto";
import { useUsers } from "~/features/adminPanel/hooks/user/useUsers";
import { deleteUser } from "~/features/adminPanel/api/AdminUserApi";
import { useUserInputData } from "~/features/adminPanel/hooks/user/useUserInputData";
import { Paths } from "~/features/app/constants/Paths";
import { Link } from "react-router-dom";
import { deleteUserInList } from "~/features/adminPanel/services/CompanyStuffServices";
import {
  MonitorCog,
  SquareChevronLeft,
  SquareChevronRight,
  UserPen,
  UserRoundX,
} from "lucide-react";

export function UserManagement() {
  const { users, fetchResponse } = useUsers();

  const headers = ["Imie i nazwisko", "Email", "Opcje"];

  return (
    <>
      <div className={S(`options-navigation`)}>
        <div className={S(`options`)}></div>
        <div className={S(`navigation`)}>
          {/* <button className={S(`arrow`)}>
            <SquareChevronLeft size={30} strokeWidth={1} /> Poprzedni Tydzień
          </button>
          <button className={S(`arrow`)}>
            Następny Tydzień <SquareChevronRight size={30} strokeWidth={1} />
          </button> */}
        </div>
      </div>
      <div className={TS(`stuff-table`)}>
        <div className={`${S(`stuff-table-row`)} ${TS(`th-cell`)}`}>
          {headers.map((title) => (
            <div className={TS(`stuff-table-cell`)} key={title}>
              {title}
            </div>
          ))}
        </div>
        {users.map((account) => (
          <div className={S(`stuff-table-row`)} key={account.id}>
            <div className={TS(`stuff-table-cell`)}>{account.name}</div>
            <div className={TS(`stuff-table-cell`)}>{account.email}</div>
            <div className={TS(`stuff-table-cell`)}>
              <button className={BS(`button-option-update-calendar`)}>
                <MonitorCog size={25} strokeWidth={1} />
                Aktualizuj Grafik
              </button>
              {/* // linki ? czu buttony? */}
              <Link to={Paths.ADMIN.STAFF.EDIT.absolute(account.id)}>
                <button className={BS(`button-option-edit`)}>
                  <UserPen size={25} strokeWidth={1} />
                  Edytuj {"   "}
                </button>
              </Link>
              <button
                className={BS(`button-option-delete`)}
                onClick={() => deleteUserInList(account.id, fetchResponse)}
              >
                <UserRoundX size={25} strokeWidth={1} />
                Usuń
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
