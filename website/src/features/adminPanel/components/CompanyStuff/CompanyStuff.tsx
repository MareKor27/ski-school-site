import { useEffect, useState } from "react";
import style from "./CompanyStuff.module.scss";
import useStyles from "~/hooks/useStyle";
import account from "~/data/account.json";
import { FormCreateEdit } from "./FormCreateEdit/FormCreateEdit";
import { FormTable } from "./FormTable/FormTable";
import { readUsers } from "../../api/AdminPanelApi";
import { UserDto } from "../../api/type/user.dto";

export type UserFormType = {
  id: number;
  imieiNazwisko: string;
  tel: string;
  info1?: string;
  info2?: string;
  info3?: string;
};

const S = useStyles(style);
export function CompanyStuff() {
  const [toggleState, setToggleState] = useState(1);
  const [users, setUsers] = useState<UserDto[]>([]);

  const toggleTab = (tabIndex: number) => {
    setToggleState(tabIndex);
    setFormData({
      id: 1,
      imieiNazwisko: "",
      tel: "",
      info1: "",
      info2: "",
      info3: "",
    });
  };

  const [formData, setFormData] = useState<UserFormType>({
    id: 1,
    imieiNazwisko: "",
    tel: "",
    info1: "",
    info2: "",
    info3: "",
  });

  useEffect(() => {
    const fetchResponse = async () => {
      try {
        const response = await readUsers();
        setUsers(response.content);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    fetchResponse();
  }, []);

  const formatPhoneNumber = (value: string): string => {
    // Usuwamy wszystko poza cyframi i "+"
    const sanitizedValue = value.replace(/[^\d+]/g, "");

    // Jeśli numer zaczyna się od "+", przetwarzamy prefiks
    if (sanitizedValue.startsWith("+")) {
      const withoutPlus = sanitizedValue.slice(1); // Usuwamy "+"
      const prefix = withoutPlus.slice(0, 2); // Pobieramy pierwsze 2 cyfry po "+"
      const rest = withoutPlus.slice(2); // Reszta po prefiksie
      const parts = rest.match(/.{1,3}/g) || []; // Grupujemy w bloki po 3 cyfry
      return `+${prefix} ${parts.join(" ")}`.trim(); // Formatowanie z "+" i spacjami
    }

    // Jeśli brak "+", grupujemy od początku co 3 cyfry
    const defaultPrefix = "+48";
    const parts = sanitizedValue.match(/.{1,3}/g) || []; // Grupujemy od początku
    return `${defaultPrefix} ${parts.join(" ")}`.trim();
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name == "tel") {
      const formatted = formatPhoneNumber(value);

      setFormData((prevState) => ({
        ...prevState,
        [name]: formatted,
      }));
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const handleCreateUser = (e: React.FormEvent<HTMLFormElement>) => {
    // e.preventDefault();
    // setUsers((prevUsers) => [...prevUsers, formData]);
    // setFormData({
    //   id: 1,
    //   imieiNazwisko: "",
    //   tel: "",
    //   info1: "",
    //   info2: "",
    //   info3: "",
    // });
    // setToggleState(1);
  };

  const handleDeleteUser = (tel: string) => {
    // const isConfirmed = window.confirm(
    //   "Czy na pewno chcesz usunąć tego użytkownika?"
    // );
    // if (isConfirmed) {
    //   setUsers((prevUsers) => prevUsers.filter((user) => user.tel !== tel));
    // }
  };

  const handleShowEditUser = (user: UserFormType) => {
    // setFormData({
    //   id: user.id,
    //   imieiNazwisko: user.imieiNazwisko,
    //   tel: user.tel,
    //   info1: user.info1,
    //   info2: user.info2,
    //   info3: user.info3,
    // });
    // setToggleState(2);
  };

  const handleEditUser = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === formData.id ? { ...user, ...formData } : user
      )
    );

    setFormData({
      id: 1,
      imieiNazwisko: "",
      tel: "",
      info1: "",
      info2: "",
      info3: "",
    });

    setToggleState(1);
  };

  return (
    <div className={S(`company-stuff`)}>
      <div className={S(`title-tabs`)}>
        <h2 className={S(`title-page`)}>Instruktorzy</h2>
        <div
          className={toggleState === 1 ? S(`tab active-tab`) : S(`tab`)}
          onClick={() => toggleTab(1)}
        >
          Lista
        </div>

        <div
          className={toggleState === 3 ? S(`tab active-tab`) : S(`tab`)}
          onClick={() => toggleTab(3)}
        >
          Stwórz
        </div>
        <div
          className={
            toggleState === 2 ? S(`tab active-tab`) : S(`tab disabled`)
          }
          onClick={() => toggleTab(2)}
        >
          Edytuj
        </div>
      </div>
      <div className={S(`content-tabs`)}>
        <div
          className={
            toggleState === 1
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
            toggleState === 2
              ? S(`content-tab active-content`)
              : S(`content-tab`)
          }
        >
          <FormCreateEdit
            formData={formData}
            handleInputChange={handleInputChange}
            handleOnSubmit={handleEditUser}
            type={"Edit"}
          />
        </div>
        <div
          className={
            toggleState === 3
              ? S(`content-tab active-content`)
              : S(`content-tab`)
          }
        >
          <FormCreateEdit
            formData={formData}
            handleInputChange={handleInputChange}
            handleOnSubmit={handleCreateUser}
            type={"Create"}
          />
        </div>
      </div>
    </div>
  );
}
