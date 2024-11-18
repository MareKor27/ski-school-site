import { useState } from "react";
import style from "./CompanyStuff.module.scss";
import useStyles from "~/hooks/useStyle";
const S = useStyles(style);
export function CompanyStuff() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (tabIndex: number) => {
    setToggleState(tabIndex);
  };

  type UserFormType = {
    id: number;
    imieiNazwisko: string;
    tel: string;
    info1?: string;
    info2?: string;
    info3?: string;
  };
  const [formData, setFormData] = useState<UserFormType>({
    id: 1,
    imieiNazwisko: "",
    tel: "",
    info1: "",
    info2: "",
    info3: "",
  });

  const [users, setUsers] = useState<UserFormType[]>([
    {
      id: 2,
      imieiNazwisko: "Michał Jaśkiewicz",
      tel: "+48 517 933 264",
      info1: "",
      info2: "",
      info3: "",
    },
    {
      id: 3,
      imieiNazwisko: "Donald Tusk",
      tel: "+48 513 933 264",
      info1: "",
      info2: "",
      info3: "",
    },
    {
      id: 4,
      imieiNazwisko: "Jarosław Kaczyński",
      tel: "+48 555 933 544",
      info1: "",
      info2: "",
      info3: "",
    },
  ]);

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
    e.preventDefault();

    setUsers((prevUsers) => [...prevUsers, formData]);

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

  const handleDeleteUser = (tel: string) => {
    const isConfirmed = window.confirm(
      "Czy na pewno chcesz usunąć tego użytkownika?"
    );
    if (isConfirmed) {
      setUsers((prevUsers) => prevUsers.filter((user) => user.tel !== tel));
    }
  };

  const handleShowEditUser = (user: UserFormType) => {
    setFormData({
      id: user.id,
      imieiNazwisko: user.imieiNazwisko,
      tel: user.tel,
      info1: user.info1,
      info2: user.info2,
      info3: user.info3,
    });
    setToggleState(2);
  };

  const handleEditUser = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Aktualizacja listy użytkowników
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === formData.id
          ? { ...user, ...formData } // Zaktualizowanie użytkownika na podstawie formData
          : user
      )
    );

    setToggleState(1);
  };

  return (
    <div className={S(`company-stuff`)}>
      <div className={S(`title-tabs`)}>
        <div
          className={toggleState === 1 ? S(`tab active-tab`) : S(`tab`)}
          onClick={() => toggleTab(1)}
        >
          Lista
        </div>
        <div
          className={toggleState === 2 ? S(`tab active-tab`) : S(`tab`)}
          onClick={() => toggleTab(2)}
        >
          Zarządzaj
        </div>
        <div
          className={toggleState === 3 ? S(`tab active-tab`) : S(`tab`)}
          onClick={() => toggleTab(3)}
        >
          Stwórz
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
          <div className={S(`stuff-table`)}>
            <div className={S(`stuff-table-row th-cell`)}>
              <div className={S(`stuff-table-cell`)}>Imie i nazwisko</div>
              <div className={S(`stuff-table-cell`)}>Nr. kontaktowy</div>
              <div className={S(`stuff-table-cell`)}>Informacja 1</div>
              <div className={S(`stuff-table-cell`)}>Informacja 2</div>
              <div className={S(`stuff-table-cell`)}>Informacja 3</div>
              <div className={S(`stuff-table-cell`)}>Harmonogram</div>
              <div className={S(`stuff-table-cell`)}>Opcje</div>
            </div>
            {users.map(
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
        </div>
        <div
          className={
            toggleState === 2
              ? S(`content-tab active-content`)
              : S(`content-tab`)
          }
        >
          <form onSubmit={handleEditUser}>
            <label htmlFor="imieiNazwisko">Imie i Nazwisko:</label>
            <input
              type="text"
              id="imieiNazwisko"
              name="imieiNazwisko"
              size={50}
              onChange={handleInputChange}
              value={formData.imieiNazwisko}
            />
            <label htmlFor="tel">Numer telefonu:</label>
            <input
              type="text"
              id="tel"
              name="tel"
              placeholder="+48 123 456 789"
              pattern="^\+(\d{2})\s(\d{3})\s(\d{3})\s(\d{3})$|^(\d{9})$"
              title="Numer telefonu musi być w formacie: +XX XXX XXX XXX."
              onChange={handleInputChange}
              value={formData.tel}
            />
            <label htmlFor="info1">Informacja 1:</label>
            <input
              type="text"
              id="info1"
              name="info1"
              size={50}
              onChange={handleInputChange}
              value={formData.info1}
            />
            <label htmlFor="finfo2">Informacja 2:</label>
            <input
              type="text"
              id="finfo2"
              name="finfo2"
              size={50}
              onChange={handleInputChange}
              value={formData.info2}
            />
            <label htmlFor="finfo3">Informacja 3:</label>
            <input
              type="text"
              id="finfo3"
              name="finfo3"
              size={50}
              onChange={handleInputChange}
              value={formData.info3}
            />

            <input type="submit" value="Aktualizuj" />
          </form>
        </div>
        <div
          className={
            toggleState === 3
              ? S(`content-tab active-content`)
              : S(`content-tab`)
          }
        >
          <form onSubmit={handleCreateUser}>
            <label htmlFor="imieiNazwisko">Imie i Nazwisko:</label>
            <input
              type="text"
              id="imieiNazwisko"
              name="imieiNazwisko"
              size={50}
              onChange={handleInputChange}
              value={formData.imieiNazwisko}
            />
            <label htmlFor="tel">Numer telefonu:</label>
            <input
              type="text"
              id="tel"
              name="tel"
              placeholder="+48 123 456 789"
              pattern="^\+(\d{2})\s(\d{3})\s(\d{3})\s(\d{3})$|^(\d{9})$"
              title="Numer telefonu musi być w formacie: +XX XXX XXX XXX."
              onChange={handleInputChange}
              value={formData.tel}
            />
            <label htmlFor="info1">Informacja 1:</label>
            <input
              type="text"
              id="info1"
              name="info1"
              size={50}
              onChange={handleInputChange}
              value={formData.info1}
            />
            <label htmlFor="finfo2">Informacja 2:</label>
            <input
              type="text"
              id="finfo2"
              name="finfo2"
              size={50}
              onChange={handleInputChange}
              value={formData.info2}
            />
            <label htmlFor="finfo3">Informacja 3:</label>
            <input
              type="text"
              id="finfo3"
              name="finfo3"
              size={50}
              onChange={handleInputChange}
              value={formData.info3}
            />

            <input type="submit" value="Stwórz" />
          </form>
        </div>
      </div>
    </div>
  );
}
