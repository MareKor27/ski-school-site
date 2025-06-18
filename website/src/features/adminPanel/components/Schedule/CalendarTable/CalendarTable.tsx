import calendarStyle from "~/assets/styles/calendarStyles.module.scss";
import style from "./CalendarTable.module.scss";
import useStyles from "~/hooks/useStyle";
import { hoursOfPossibleActions } from "~/features/adminPanel/services/AppointmentServices";
import { CalendarBox } from "../CalendarBox/CalendarBox";
import { useCalendar } from "~/features/adminPanel/hooks/calendar/useCalendar";
import { SquareChevronLeft, SquareChevronRight } from "lucide-react";
export function CalendarTable() {
  const S = useStyles(style);
  const CS = useStyles(calendarStyle);

  const { dates, getAppointmentsByDate, weekOffset, setWeekOffset } =
    useCalendar();

  return (
    <>
      <div className={S(`options-navigation`)}>
        <div className={S(`options`)}></div>
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
        {dates.map((currentDate) => (
          <div className={CS(`day`)} key={currentDate.toISOString()}>
            <div className={CS(`date-in-number`)}>
              {currentDate.toLocaleDateString("pl-PL").replace(/\./g, "/")}
            </div>
            <div className={CS(`date-in-words`)}>
              {currentDate.toLocaleDateString("pl-PL", { weekday: "long" })}
            </div>
            {hoursOfPossibleActions.map((hour) => (
              <CalendarBox
                currentDate={currentDate}
                hour={hour}
                getAppointmentsByDate={getAppointmentsByDate}
              />
            ))}
          </div>
        ))}
      </div>
    </>
  );
}
