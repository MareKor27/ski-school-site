import style from "./ReservationTable.module.scss";
import tableStyle from "~/assets/styles/tableStyles.module.scss";
import buttonStyle from "~/assets/styles/buttonsStyles.module.scss";
import useStyles from "~/hooks/useStyle";

import { useReservation } from "~/features/adminPanel/hooks/reservation/useReservation";
import { PhoneForwarded, Trash2, UserCheck } from "lucide-react";
import { useUsers } from "~/features/adminPanel/hooks/user/useUsers";

const S = useStyles(style);
const TS = useStyles(tableStyle);
const BS = useStyles(buttonStyle);

export function ReservationTable() {
  const {
    reservations,
    handleDeleteReservation,
    formatPhone,
    readData,
    setInstructorId,
    setPaginationRows,
    totalRows,
    lastPage,
    setPaginationPage,
  } = useReservation();
  const { users } = useUsers();

  const headers = [
    "Imie i nazwisko",
    "Numer telefonu",
    "Ilość Kursantów",
    "Sprzęt",
    "Poziom zawansowania i czas",
    "Opcje",
  ];

  return (
    <>
      <div className={S(`options-navigation`)}>
        <div className={S(`options`)}>
          <UserCheck /> Instruktor:
          <select
            name="userId"
            onChange={(event) => {
              setInstructorId(
                event.target.value == "" ? null : Number(event.target.value)
              );
            }}
          >
            <option value="">Wszyscy</option>
            {users.map((user) => {
              return (
                <option key={user.id} value={user.id}>
                  {user.name}
                </option>
              );
            })}
          </select>
          Paginacja: Wiersze:
          <select
            name="pagination-rows"
            onChange={(event) => {
              setPaginationRows(Number(event.target.value));
            }}
          >
            <option key={10} value="10">
              10
            </option>
            <option key={20} value="20">
              20
            </option>
            <option key={30} value="30">
              30
            </option>
            <option key={40} value="40">
              40
            </option>
            <option key={50} value="50">
              50
            </option>
            <option key={100} value="100">
              100
            </option>
          </select>
          Strony:
          <select
            name="pagination-rows"
            onChange={(event) => {
              setPaginationPage(Number(event.target.value));
            }}
          >
            {Array.from({ length: lastPage }, (_, i) => (
              <option key={i + 1} value={i + 1}>
                {i + 1}
              </option>
            ))}
          </select>
          <button onClick={() => readData()}>Filtruj</button>
          Całe dane: wiersze:{totalRows} Ostatnia strona: {lastPage}
        </div>
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
              {reservation.advancement + " " + reservation.purchasedTime}
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
