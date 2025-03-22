const S = useStyles(style);

import { ReservationDto } from "~/features/adminPanel/api/type/reservation.dto";
import style from "./ReservationTable.module.scss";
import useStyles from "~/hooks/useStyle";

type ReservationTableType = {
  reservations: ReservationDto[];
  //handleShowEditReservation: (reserwation: ReservationDto) => void;
  handleDeleteReservation: (id: number) => void;
};

export function ReservationTable({
  reservations,
  handleDeleteReservation,
}: ReservationTableType) {
  const headers = [
    "Imie i nazwisko",
    "Numer telefonu",
    "Ilość Kursantów",
    "Sprzęt",
    "Poziom zawansowania",
    "Opcje",
  ];

  return (
    <div className={S(`stuff-table`)}>
      <div className={S(`stuff-table-row th-cell`)}>
        {headers.map((title) => (
          <div className={S(`stuff-table-cell`)} key={title}>
            {title}
          </div>
        ))}
      </div>
      {reservations.map((reservation) => (
        <div className={S(`stuff-table-row`)} key={reservation.id}>
          <div className={S(`stuff-table-cell`)}>{reservation.fullName}</div>
          <div className={S(`stuff-table-cell`)}>{reservation.phoneNumber}</div>
          <div className={S(`stuff-table-cell`)}>
            {reservation.participants}
          </div>
          <div className={S(`stuff-table-cell`)}>
            {reservation.chosenEquipment}
          </div>
          <div className={S(`stuff-table-cell`)}>{reservation.advancement}</div>

          <div className={S(`stuff-table-cell`)}>
            {/* <div className={S(`cell-option-edit`)}>
            <img src="/images/admin/edit-icon.png" alt={"Edytuj"} />
            Edytuj {"   "}
          </div> */}
            <div
              className={S(`cell-option-delete`)}
              onClick={() => handleDeleteReservation(reservation.id)}
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
