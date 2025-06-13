import style from "./ReservationTable.module.scss";
import tableStyle from "~/assets/styles/tableStyles.module.scss";
import buttonStyle from "~/assets/styles/buttonsStyles.module.scss";
import useStyles from "~/hooks/useStyle";

import { useReservation } from "~/features/adminPanel/hooks/reservation/useReservation";
import {
  FilePen,
  PhoneForwarded,
  Square,
  Trash2,
  UserCheck,
} from "lucide-react";
import { useUsers } from "~/features/adminPanel/hooks/user/useUsers";
import {
  ageRangeStudents,
  formatAdvancement,
  formatEquipment,
  formatToLongDate,
  formatToShortDate,
  nameToInitials,
} from "~/features/adminPanel/utils/formatters";

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
    paginationInformation,
  } = useReservation();
  const { users } = useUsers();

  const headers = [
    "",
    "Data",
    "Czas",

    "Rezerwujący",
    "Nr. telefonu",
    "Ilość",
    "Wiek",
    "Poziom",
    "Sprzęt",
    "Opcje",
  ];

  return (
    <>
      <div className={S(`options-navigation`)}>
        <div className={S(`options`)}>
          <UserCheck size={25} strokeWidth={1} />
          <select
            name="userId"
            onChange={(event) => {
              setInstructorId(
                event.target.value == "" ? null : Number(event.target.value)
              );
            }}
            className={S(`custom-select`)}
          >
            <option value="">Wszyscy instruktorzy</option>
            {users.map((user) => {
              return (
                <option key={user.id} value={user.id}>
                  {user.name}
                </option>
              );
            })}
          </select>
          <button className={S(`filter-button`)} onClick={() => readData()}>
            Filtruj
          </button>
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
            <div
              className={`${TS(`stuff-table-cell`)}`}
              title={reservation.appointments[0].instructor.name}
            >
              <div className={`${S(`initial`)}`}>
                {nameToInitials(reservation.appointments[0].instructor.name)}
              </div>
            </div>
            <div
              className={TS(`stuff-table-cell`)}
              title={formatToLongDate(
                reservation.appointments[0].appointmentDate
              )}
            >
              {formatToShortDate(reservation.appointments[0].appointmentDate)}
            </div>

            <div className={TS(`stuff-table-cell`)}>
              {reservation.purchasedTime + "h"}
            </div>
            <div className={TS(`stuff-table-cell`)}>{reservation.fullName}</div>

            <div className={TS(`stuff-table-cell`)}>
              <a href={`tel:+48${reservation.phoneNumber}`}>
                {/* <PhoneForwarded size={20} strokeWidth={1.5} color="#2e9521" /> */}
                +48 {formatPhone(reservation.phoneNumber)}
              </a>
            </div>
            <div className={TS(`stuff-table-cell`)}>
              {reservation.participants}
            </div>

            <div className={TS(`stuff-table-cell`)}>
              {ageRangeStudents(reservation.ageOfParticipants)}
            </div>

            <div
              className={TS(`stuff-table-cell`)}
              title={reservation.advancement}
            >
              <div
                className={S(`${formatAdvancement(reservation.advancement)}`)}
              >
                {formatAdvancement(reservation.advancement)}
              </div>
            </div>
            <div
              className={TS(`stuff-table-cell`)}
              title={reservation.chosenEquipment}
            >
              <div
                className={S(`${formatEquipment(reservation.chosenEquipment)}`)}
              >
                {formatEquipment(reservation.chosenEquipment)}
              </div>
            </div>

            <div className={TS(`stuff-table-cell`)}>
              {/* <div className={S(`cell-option-edit`)}>
            <img src="/images/admin/edit-icon.png" alt={"Edytuj"} />
            Edytuj {"   "}
          </div> */}
              {/* <button
                className={BS(`button-option-update-calendar`)}
                onClick={() => handleDeleteReservation(reservation.id)}
              >
                <Square size={25} strokeWidth={1} />
              </button>
              <button
                className={BS(`button-option-edit`)}
                onClick={() => handleDeleteReservation(reservation.id)}
              >
                <FilePen size={25} strokeWidth={1} />
              </button> */}
              <button
                className={BS(`button-option-delete`)}
                onClick={() => handleDeleteReservation(reservation.id)}
                title="Usuń"
              >
                <Trash2 size={25} strokeWidth={1} />
              </button>
            </div>
          </div>
        ))}

        <div className={` ${S(`table-footer`)}`}>
          <div>{paginationInformation()}</div>
          <div className={` ${S(`pagination`)}`}>
            {" Ilość wierszy:"}
            <select
              name="pagination-rows"
              onChange={(event) => {
                setPaginationRows(Number(event.target.value));
                // readData();
              }}
              className={S(`custom-select`)}
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
            <div> Strona:</div>
            <select
              name="pagination-rows"
              onChange={(event) => {
                setPaginationPage(Number(event.target.value));
                // readData();
              }}
              className={S(`custom-select`)}
            >
              {Array.from({ length: lastPage }, (_, i) => (
                <option key={i + 1} value={i + 1}>
                  {i + 1}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </>
  );
}
