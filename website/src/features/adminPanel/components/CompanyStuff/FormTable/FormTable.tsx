const S = useStyles(style);
import { useState } from "react";
import { UserFormType } from "../CompanyStuff";
import style from "./FormTable.module.scss";
import useStyles from "~/hooks/useStyle";

type FormTableType = {
  headers: string[];
  accounts: UserFormType[];
  handleShowEditUser: (user: UserFormType) => void;
  handleDeleteUser: (tel: string) => void;
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
          <div className={S(`stuff-table-cell`)}>{title}</div>
        ))}
      </div>
      {accounts.map(
        (account) => (
          console.log(account),
          (
            <div className={S(`stuff-table-row`)} key={account.tel}>
              <div className={S(`stuff-table-cell`)}>
                {account.imieiNazwisko}
              </div>
              <div className={S(`stuff-table-cell`)}>{account.tel}</div>
              <div className={S(`stuff-table-cell`)}>{account.info1}</div>
              <div className={S(`stuff-table-cell`)}>{account.info2}</div>
              <div className={S(`stuff-table-cell`)}>{account.info3}</div>
              <div className={S(`stuff-table-cell`)}>
                <div className={S(`cell-option-update-calendar`)}>
                  <img
                    src="/images/admin/calendar-icon.png"
                    alt={"Aktualizuj Grafik"}
                  />
                  Aktualizuj Grafik
                </div>
              </div>
              <div className={S(`stuff-table-cell`)}>
                <div
                  className={S(`cell-option-edit`)}
                  onClick={() => handleShowEditUser(account)}
                >
                  <img src="/images/admin/edit-icon.png" alt={"Edytuj"} />
                  Edytuj {"   "}
                </div>
                <div
                  className={S(`cell-option-delete`)}
                  onClick={() => handleDeleteUser(account.tel)}
                >
                  <img src="/images/admin/delete-icon.png" alt={"Usuń"} />
                  Usuń
                </div>
              </div>
            </div>
          )
        )
      )}
    </div>
  );
}
