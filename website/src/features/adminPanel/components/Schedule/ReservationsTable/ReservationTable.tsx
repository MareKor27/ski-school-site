import style from "./ReservationTable.module.scss";
import tableStyle from "~/assets/styles/tableStyles.module.scss";
import buttonStyle from "~/assets/styles/buttonsStyles.module.scss";
import useStyles from "~/hooks/useStyle";

import { useReservation } from "~/features/adminPanel/hooks/reservation/useReservation";
import {
  PhoneForwarded,
  SquareChevronLeft,
  SquareChevronRight,
  Trash2,
} from "lucide-react";

const S = useStyles(style);
const TS = useStyles(tableStyle);
const BS = useStyles(buttonStyle);

export function ReservationTable() {
  const { reservations, handleDeleteReservation } = useReservation();

  function formatPhone(phone: string) {
    const parts = phone.match(/.{1,3}/g);
    return parts!.join(" ");
  }

  const headers = [
    "Imie i nazwisko",
    "Numer telefonu",
    "Ilość Kursantów",
    "Sprzęt",
    "Poziom zawansowania",
    "Opcje",
  ];

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
        {reservations.map((reservation) => (
          <div className={S(`stuff-table-row`)} key={reservation.id}>
            <div className={TS(`stuff-table-cell`)}>{reservation.fullName}</div>
            <div className={TS(`stuff-table-cell`)}>
              <a href={`tel:+48${reservation.phoneNumber}`}>
                <PhoneForwarded size={20} strokeWidth={1.5} color="#2e9521" />
                +48 {formatPhone(reservation.phoneNumber)}
              </a>
            </div>
            <div className={TS(`stuff-table-cell`)}>
              {reservation.participants}
            </div>
            <div className={TS(`stuff-table-cell`)}>
              {reservation.chosenEquipment}
            </div>
            <div className={TS(`stuff-table-cell`)}>
              {reservation.advancement}
            </div>

            <div className={TS(`stuff-table-cell`)}>
              {/* <div className={S(`cell-option-edit`)}>
            <img src="/images/admin/edit-icon.png" alt={"Edytuj"} />
            Edytuj {"   "}
          </div> */}
              <button
                className={BS(`button-option-delete`)}
                onClick={() => handleDeleteReservation(reservation.id)}
              >
                <Trash2 />
                Usuń
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
