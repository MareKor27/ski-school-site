import { useState } from "react";
import style from "./CompanyStuff.module.scss";
import useStyles from "~/hooks/useStyle";
const S = useStyles(style);
export function CompanyStuff() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (tabIndex: number) => {
    setToggleState(tabIndex);
  };

  const users = [
    { imieiNazwisko: "Michał Jaśkiewicz", tel: "+48 517 933 264" },
    { imieiNazwisko: "Donald Tusk", tel: "+48 513 933 264" },
    { imieiNazwisko: "Jarosław Kaczyński", tel: "+48 555 933 544" },
  ];

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
            {users.map((account) => (
              <div className={S(`stuff-table-row`)}>
                <div className={S(`stuff-table-cell`)}>
                  {account.imieiNazwisko}
                </div>
                <div className={S(`stuff-table-cell`)}>{account.tel}</div>
                <div className={S(`stuff-table-cell`)}></div>
                <div className={S(`stuff-table-cell`)}></div>
                <div className={S(`stuff-table-cell`)}></div>
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
                  <div className={S(`cell-option-edit`)}>
                    <img src="/images/admin/edit-icon.png" alt={"Edytuj"} />
                    Edytuj {"   "}
                  </div>
                  <div className={S(`cell-option-delete`)}>
                    <img src="/images/admin/delete-icon.png" alt={"Usuń"} />
                    Usuń
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div
          className={
            toggleState === 2
              ? S(`content-tab active-content`)
              : S(`content-tab`)
          }
        >
          <form>
            <label htmlFor="fname">Imie i Nazwisko:</label>
            <input type="text" id="fname" name="fname" size={50} />
            <label htmlFor="lname">Numer telefonu:</label>
            <input
              type="tel"
              id="lname"
              name="lname"
              placeholder="123456789"
              pattern="[0-9]{9}"
            />
            <label htmlFor="finfo1">Informacja 1:</label>
            <input type="text" id="finfo1" name="finfo1" size={50} />
            <label htmlFor="finfo2">Informacja 2:</label>
            <input type="text" id="finfo2" name="finfo2" size={50} />
            <label htmlFor="finfo3">Informacja 3:</label>
            <input type="text" id="finfo3" name="finfo3" size={50} />

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
          <form>
            <label htmlFor="fname">Imie i Nazwisko:</label>
            <input type="text" id="fname" name="fname" size={50} />
            <label htmlFor="lname">Numer telefonu:</label>
            <input
              type="tel"
              id="lname"
              name="lname"
              placeholder="123456789"
              pattern="[0-9]{9}"
            />
            <label htmlFor="finfo1">Informacja 1:</label>
            <input type="text" id="finfo1" name="finfo1" size={50} />
            <label htmlFor="finfo2">Informacja 2:</label>
            <input type="text" id="finfo2" name="finfo2" size={50} />
            <label htmlFor="finfo3">Informacja 3:</label>
            <input type="text" id="finfo3" name="finfo3" size={50} />

            <input type="submit" value="Stwórz" />
          </form>
        </div>
      </div>
    </div>
  );
}
