const S = useStyles(style);
import style from "./UserManagement.module.scss";
import useStyles from "~/hooks/useStyle";
import { UserDto } from "~/features/adminPanel/api/type/user.dto";
import { useUsers } from "~/features/adminPanel/hooks/user/useUsers";
import { deleteUser } from "~/features/adminPanel/api/AdminUserApi";
import { useUserInputData } from "~/features/adminPanel/hooks/user/useUserInputData";
import { Paths } from "~/features/app/constants/Paths";
import { Link } from "react-router-dom";

export function UserManagement() {
  const { users, fetchResponse } = useUsers();

  const headers = ["Imie i nazwisko", "Email", "Opcje"];

  return (
    <div className={S(`stuff-table`)}>
      <div className={S(`stuff-table-row th-cell`)}>
        {headers.map((title) => (
          <div className={S(`stuff-table-cell`)} key={title}>
            {title}
          </div>
        ))}
      </div>
      {users.map((account) => (
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
            {/* // linki ? czu buttony? */}
            <Link to={Paths.ADMIN.STAFF.EDIT.absolute(account.id)}>
              <div className={S(`cell-option-edit`)}>
                <img src="/images/admin/edit-icon.png" alt={"Edytuj"} />
                Edytuj {"   "}
              </div>
            </Link>
            <div
              className={S(`cell-option-delete`)}
              onClick={() => async (id: number) => {
                const isConfirmed = window.confirm(
                  "Czy na pewno chcesz usunąć tego użytkownika?"
                );
                if (isConfirmed) {
                  await deleteUser(id);
                }
                fetchResponse();
              }}
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
