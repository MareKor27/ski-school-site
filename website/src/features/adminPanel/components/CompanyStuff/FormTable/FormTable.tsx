const S = useStyles(style);
import style from "./FormTable.module.scss";
import useStyles from "~/hooks/useStyle";
import { UserDto } from "~/features/adminPanel/api/type/user.dto";

type FormTableType = {
  headers: string[];
  accounts: UserDto[];
  handleShowEditUser: (user: UserDto) => void;
  handleDeleteUser: (id: number) => void;
};

export function FormTable({
  headers,
  accounts,
  handleShowEditUser,
  handleDeleteUser,
}: FormTableType) {
  return (
    <div className={S(`stuff-table`)}>
      <div className={S(`stuff-table-row th-cell`)}>
        {headers.map((title) => (
          <div className={S(`stuff-table-cell`)} key={title}>
            {title}
          </div>
        ))}
      </div>
      {accounts.map((account) => (
        <div className={S(`stuff-table-row`)} key={account.id}>
          <div className={S(`stuff-table-cell`)}>{account.name}</div>
          <div className={S(`stuff-table-cell`)}>{account.email}</div>
          <div className={S(`stuff-table-cell`)}>
            <div className={S(`cell-option-update-calendar`)}>
              <img
                src="/images/admin/calendar-icon.png"
                alt={"Aktualizuj Grafik"}
              />
              Aktualizuj Grafik
            </div>
            <div
              className={S(`cell-option-edit`)}
              // onClick={() => handleShowEditUser(account)}
            >
              <img src="/images/admin/edit-icon.png" alt={"Edytuj"} />
              Edytuj {"   "}
            </div>
            <div
              className={S(`cell-option-delete`)}
              onClick={() => handleDeleteUser(account.id)}
            >
              <img src="/images/admin/delete-icon.png" alt={"Usuń"} />
              Usuń
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
