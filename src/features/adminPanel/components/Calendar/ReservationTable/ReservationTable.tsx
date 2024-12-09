const S = useStyles(style);

import { useState } from "react";
import style from "./ReservationTable.module.scss";
import useStyles from "~/hooks/useStyle";

type ReservationTableType = {};

export function ReservationTable({}: ReservationTableType) {
  const [isExpanded, setIsExpanded] = useState(false);

  const togglePanel = () => {
    setIsExpanded((prev) => !prev);
  };
  return (
    <div className={S(`stuff-table`)}>
      <div className={S(`stuff-table-row th-cell`)}>
        <div className={S(`stuff-table-cell`)}>Termin</div>
        <div className={S(`stuff-table-cell`)}>Imie i nazwisko</div>
        <div className={S(`stuff-table-cell`)}>Numer telefonu</div>
        <div className={S(`stuff-table-cell`)}>Wybór instruktora</div>
        <div className={S(`stuff-table-cell`)}>Sprzęt</div>

        {/* <div className={S(`stuff-table-cell`)}>Liczba osób</div>
        <div className={S(`stuff-table-cell`)}>Wiek osób</div>
        <div className={S(`stuff-table-cell`)}>Zawansowanie</div>
        <div className={S(`stuff-table-cell`)}>Dodatkowe uwagi</div>
        <div className={S(`stuff-table-cell`)}>Informacje o ubezpieczeniu</div> */}

        <div className={S(`stuff-table-cell`)}>Opcje</div>
      </div>

      <div className={S(`stuff-table-row`)}>
        <div className={S(`stuff-table-cell`)}>11.11.2024 10:00</div>
        <div className={S(`stuff-table-cell`)}>Marek Korzeń</div>
        <div className={S(`stuff-table-cell`)}>500878504</div>
        <div className={S(`stuff-table-cell`)}>Michał Jaśkiewicz</div>
        <div className={S(`stuff-table-cell`)}>Wypożyczony</div>

        {/* <div className={S(`stuff-table-cell`)}>4</div>
        <div className={S(`stuff-table-cell`)}>Młodzież</div>
        <div className={S(`stuff-table-cell`)}>Początkujący</div>
        <div className={S(`stuff-table-cell`)}>Brak</div>
        <div className={S(`stuff-table-cell`)}>PZU</div> */}

        <div className={S(`stuff-table-cell`)}>
          <div
            style={{
              padding: "5px",
              border: "1px solid #ccc",
              borderRadius: "5px",
            }}
          >
            {/* Nagłówek, który kontroluje widoczność panelu */}
            <div
              onClick={togglePanel}
              style={{
                backgroundColor: "#f0f0f0",
                cursor: "pointer",
                fontWeight: "bold",
              }}
            >
              Dodatkowe informacje
            </div>
          </div>
          <div className={S(`cell-option-edit`)}>
            <img src="/images/admin/edit-icon.png" alt={"Edytuj"} />
            Edytuj {"   "}
          </div>
          <div className={S(`cell-option-delete`)}>
            <img src="/images/admin/delete-icon.png" alt={"Usuń"} />
            Usuń
          </div>
        </div>
        {/* Panel z informacjami */}

        <div className={S(`retractable-panel ${isExpanded && "active"}`)}>
          <div className={S(`stuff-table-cell`)}>Liczba osób: 4</div>
          <div className={S(`stuff-table-cell`)}>Wiek osób: Młodzież</div>
          <div className={S(`stuff-table-cell`)}>
            Zawansowanie: Początkujący
          </div>
          <div className={S(`stuff-table-cell`)}>
            Dodatkowe uwagi: Lorem ipsum dolor, sit amet consectetur adipisicing
            elit. Rem similique dignissimos, facere laborum neque reprehenderit
            hic atque quos id dolore, fuga a, suscipit ea placeat porro
            obcaecati doloremque tenetur ducimus.
          </div>
          <div className={S(`stuff-table-cell`)}>Ubezpieczenie: PZU</div>
        </div>
      </div>

      <div className={S(`stuff-table-row`)}>
        <div className={S(`stuff-table-cell`)}>11.11.2024 10:00</div>
        <div className={S(`stuff-table-cell`)}>Marek Korzeń</div>
        <div className={S(`stuff-table-cell`)}>500878504</div>
        <div className={S(`stuff-table-cell`)}>Michał Jaśkiewicz</div>
        <div className={S(`stuff-table-cell`)}>Wypożyczony</div>

        {/* <div className={S(`stuff-table-cell`)}>4</div>
        <div className={S(`stuff-table-cell`)}>Młodzież</div>
        <div className={S(`stuff-table-cell`)}>Początkujący</div>
        <div className={S(`stuff-table-cell`)}>Brak</div>
        <div className={S(`stuff-table-cell`)}>PZU</div> */}

        <div className={S(`stuff-table-cell`)}>
          <div
            style={{
              padding: "5px",
              border: "1px solid #ccc",
              borderRadius: "5px",
            }}
          >
            {/* Nagłówek, który kontroluje widoczność panelu */}
            <div
              onClick={togglePanel}
              style={{
                backgroundColor: "#f0f0f0",
                cursor: "pointer",
                fontWeight: "bold",
              }}
            >
              Dodatkowe informacje
            </div>
          </div>
          <div className={S(`cell-option-edit`)}>
            <img src="/images/admin/edit-icon.png" alt={"Edytuj"} />
            Edytuj {"   "}
          </div>
          <div className={S(`cell-option-delete`)}>
            <img src="/images/admin/delete-icon.png" alt={"Usuń"} />
            Usuń
          </div>
        </div>
        <div className={S(`retractable-panel ${isExpanded && "active"}`)}>
          <div className={S(`stuff-table-cell`)}>Liczba osób: 4</div>
          <div className={S(`stuff-table-cell`)}>Wiek osób: Młodzież</div>
          <div className={S(`stuff-table-cell`)}>
            Zawansowanie: Początkujący
          </div>
          <div className={S(`stuff-table-cell`)}>Dodatkowe uwagi: Brak</div>
          <div className={S(`stuff-table-cell`)}>Ubezpieczenie: PZU</div>
        </div>
      </div>
    </div>
  );
}
