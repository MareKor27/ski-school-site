import { Link } from "react-router-dom";
import style from "./Schedule.module.scss";
import useStyles from "~/hooks/useStyle";
import { useState } from "react";
import { useReservation } from "../../hooks/reservation/useReservation";
import { useReservationAction } from "../../hooks/reservation/useReservationAction";
import { CalendarTable } from "./CalendarTable/CalendarTable";
import { ReservationTable } from "./ReservationsTable/ReservationTable";
import { AppointmentTable } from "./AppointmentTable/AppointmentTable";
const S = useStyles(style);
export function Schedule() {
  const [toggleCalendarState, setToggleCalendarState] = useState(1);
  const { reservation, fetchReservationResponse } = useReservation();
  const { handleDeleteReservation } = useReservationAction(
    fetchReservationResponse
  );

  return (
    <div className={S(`schedule`)}>
      <div className={S(`title-tabs`)}>
        <h2 className={S(`title-page`)}>Harmonogram</h2>
        <div
          className={toggleCalendarState === 1 ? S(`tab active-tab`) : S(`tab`)}
          onClick={() => setToggleCalendarState(1)}
        >
          Kalendarz
        </div>
        <div
          className={toggleCalendarState === 2 ? S(`tab active-tab`) : S(`tab`)}
          onClick={() => setToggleCalendarState(2)}
        >
          Rezerwacje
        </div>
        <div
          className={toggleCalendarState === 3 ? S(`tab active-tab`) : S(`tab`)}
          onClick={() => setToggleCalendarState(3)}
        >
          Grafik
        </div>
      </div>
      <div className={S(`content-tabs`)}>
        <div
          className={
            toggleCalendarState === 1
              ? S(`content-tab active-content`)
              : S(`content-tab`)
          }
        >
          <CalendarTable />
        </div>
        <div
          className={
            toggleCalendarState === 2
              ? S(`content-tab active-content`)
              : S(`content-tab`)
          }
        >
          <ReservationTable
            reservations={reservation}
            handleDeleteReservation={handleDeleteReservation}
          />
        </div>
        <div
          className={
            toggleCalendarState === 3
              ? S(`content-tab active-content`)
              : S(`content-tab`)
          }
        >
          <AppointmentTable />
        </div>
      </div>
    </div>
  );
}
