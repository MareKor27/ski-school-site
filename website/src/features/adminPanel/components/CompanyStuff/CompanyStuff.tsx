import style from "./CompanyStuff.module.scss";
import useStyles from "~/hooks/useStyle";

import { ReactNode } from "react";
import { Paths } from "~/features/app/constants/Paths";
import { NavLink, useParams } from "react-router-dom";

type CompanyStuffType = {
  children: ReactNode;
};
const S = useStyles(style);
export function CompanyStuff({ children }: CompanyStuffType) {
  const params = useParams();
  const userId = params.id ? Number(params.id) : null;

  return (
    <div className={S(`company-stuff`)}>
      <div className={S(`title-tabs`)}>
        <h2 className={S(`title-page`)}>Instruktorzy</h2>
        <NavLink
          className={({ isActive }) => S(isActive ? "tab active-tab" : "tab")}
          to={Paths.ADMIN.STAFF.INDEX.absolute}
          end
        >
          Lista
        </NavLink>
        <NavLink
          className={({ isActive }) => S(isActive ? "tab active-tab" : "tab")}
          to={Paths.ADMIN.STAFF.CREATE.absolute}
          end
        >
          Stwórz
        </NavLink>
        {userId && (
          <NavLink
            className={S("tab active-tab")}
            to={Paths.ADMIN.STAFF.EDIT.absolute(userId)}
            end
          >
            Edycja
          </NavLink>
        )}
        {/* <div
          className={activeView === "LIST" ? S(`tab active-tab`) : S(`tab`)}
          onClick={() => toggleTab("LIST")}
        >
          Lista
        </div>

        <div
          className={activeView === "CREATE" ? S(`tab active-tab`) : S(`tab`)}
          onClick={() => toggleTab("CREATE")}
        >
          Stwórz
        </div>
        <div
          className={
            activeView === "EDIT" ? S(`tab active-tab`) : S(`tab disabled`)
          }
          onClick={() => toggleTab("EDIT")}
        >
          Edytuj
        </div> */}
      </div>
      <div className={S(`content-tabs`)}>
        <div className={S(`content-tab active-content`)}>{children}</div>
        {/* <div
          className={
            activeView === "EDIT"
              ? S(`content-tab active-content`)
              : S(`content-tab`)
          }
        >
           <FormTable
            accounts={users}
            handleDeleteUser={async (id: number) => {
              const isConfirmed = window.confirm(
                "Czy na pewno chcesz usunąć tego użytkownika?"
              );
              if (isConfirmed) {
                await deleteUser(id);
              }
              refreshView();
            }}
            handleShowEditUser={handleShowEditUser}
          /> 

          <FormCreateEdit
            formData={userData}
            handleInputChange={handleInputChange}
            handleOnSubmit={async (event: React.FormEvent<HTMLFormElement>) => {
              event.preventDefault();
              await editInstructor(userData);
              refreshView();
            }}
            type={"Edit"}
          />
        </div>
        <div
          className={
            activeView === "CREATE"
              ? S(`content-tab active-content`)
              : S(`content-tab`)
          }
        >
          <FormCreateEdit
            formData={userData}
            handleInputChange={handleInputChange}
            handleOnSubmit={async (event: React.FormEvent) => {
              event.preventDefault();

              await createInstructor(userData);
              refreshView();
            }}
            type={"Create"}
          />
        </div> */}
      </div>
    </div>
  );
}
