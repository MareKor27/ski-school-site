import useStyles from "~/hooks/useStyle";
import calendarStyle from "~/assets/styles/calendarStyles.module.scss";
import style from "./AppointmentTable.module.scss";
import { useAppointment } from "~/features/adminPanel/hooks/appointment/useAppointment";
import { InputAppSchedule } from "../InputAppSchedule.tsx/InputAppSchedule";
import { hoursOfPossibleActions } from "~/features/adminPanel/services/AppointmentServices";
import { useSessionStore } from "~/features/authorization/store/useSessionStore";
import { SquareChevronLeft, SquareChevronRight } from "lucide-react";
import { useLocation } from "react-router-dom";
export function AppointmentTable() {
  const S = useStyles(style);
  const CS = useStyles(calendarStyle);
  const location = useLocation();

  // powinno wyrzucać jak nie masz sesji eloooo
  const {
    weekOffset,
    setWeekOffset,
    dates,
    onChangeAppointment,
    getAppointmentByDate,
    modificationLabel,
    chengeAppointmentsByDay,
    hasAppointmentsOnDay,
  } = useAppointment(location);

  return (
    <>
      <div className={S(`options-navigation`)}>
        <div className={S(`options`)}>
          {modificationLabel}
          {/* Cały tydzień:{" "}
          <input
            type="checkbox"
            name=""
            id=""
            onChange={(e) => chengeAppointmentsByDay(dates[0], e)}
          /> */}
        </div>
        <div className={S(`navigation`)}>
          <button
            className={S(`arrow`)}
            disabled={weekOffset === 0}
            onClick={() => setWeekOffset((prev) => Math.max(0, prev - 1))}
          >
            <SquareChevronLeft size={30} strokeWidth={1} /> Poprzedni Tydzień
          </button>
          <button
            onClick={() => setWeekOffset((prev) => prev + 1)}
            className={S(`arrow`)}
          >
            Następny Tydzień <SquareChevronRight size={30} strokeWidth={1} />
          </button>
        </div>
      </div>
      <div className={CS(`calendar`)}>
        {dates
          .map((dateString) => new Date(dateString))
          .map((currentDate) => (
            <div key={currentDate.toISOString()} className={CS(`day`)}>
              <div className={CS(`date-in-number`)}>
                {currentDate.toLocaleDateString("pl-PL").replace(/\./g, "/")}
              </div>
              <div className={CS(`date-in-words`)}>
                {currentDate.toLocaleDateString("pl-PL", { weekday: "long" })}{" "}
                <input
                  type="checkbox"
                  name=""
                  id=""
                  disabled={currentDate <= new Date()}
                  checked={hasAppointmentsOnDay(currentDate)}
                  onChange={(e) => {
                    chengeAppointmentsByDay(currentDate, e);
                  }}
                />
              </div>
              {hoursOfPossibleActions.map((hour) => (
                <div key={hour} className={CS(`classes`)}>
                  <div className={CS(`hour`)}>{hour + ":00"}</div>
                  <InputAppSchedule
                    ////appointment={getAppointmentByDate(currentDate, hour)} DO PRZEBUDOWANIA
                    currentDate={currentDate}
                    hour={hour}
                    onChangeAppointment={onChangeAppointment}
                    getAppointmentByDate={getAppointmentByDate}
                  />
                </div>
              ))}
            </div>
          ))}
      </div>
    </>
  );
}
