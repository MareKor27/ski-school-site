import style from "./CompanyStuff.module.scss";
import useStyles from "~/hooks/useStyle";
import { FormCreateEdit } from "./FormCreateEdit/FormCreateEdit";
import { FormTable } from "./FormTable/FormTable";
import { useUserAction } from "../../hooks/user/useUserAction";
import { useUserInputData } from "../../hooks/user/useUserInputData";
import { useUsers } from "../../hooks/user/useUsers";

const S = useStyles(style);
export function CompanyStuff() {
  const [users, fetchResponse] = useUsers();
  const {
    userData,
    activeView,
    handleInputChange,
    handleShowEditUser,
    toggleTab,
    refreshView,
  } = useUserInputData(fetchResponse);

  const [handleCreateUser, handleDeleteUser, handleEditUser] = useUserAction(
    userData,
    refreshView
  );

  return (
    <div className={S(`company-stuff`)}>
      <div className={S(`title-tabs`)}>
        <h2 className={S(`title-page`)}>Instruktorzy</h2>
        <div
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
        </div>
      </div>
      <div className={S(`content-tabs`)}>
        <div
          className={
            activeView === "LIST"
              ? S(`content-tab active-content`)
              : S(`content-tab`)
          }
        >
          <FormTable
            headers={["Imie i nazwisko", "Email", "Opcje"]}
            accounts={users}
            handleDeleteUser={handleDeleteUser}
            handleShowEditUser={handleShowEditUser}
          />
        </div>
        <div
          className={
            activeView === "EDIT"
              ? S(`content-tab active-content`)
              : S(`content-tab`)
          }
        >
          <FormCreateEdit
            formData={userData}
            handleInputChange={handleInputChange}
            handleOnSubmit={handleEditUser}
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
            handleOnSubmit={handleCreateUser}
            type={"Create"}
          />
        </div>
      </div>
    </div>
  );
}
