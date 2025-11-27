import calendarStyle from "~/assets/styles/calendarStyles.module.scss";
import style from "./CalendarTable.module.scss";
import useStyles from "~/hooks/useStyle";
import { hoursOfPossibleActions } from "~/features/adminPanel/services/AppointmentServices";
import { CalendarBox } from "../CalendarBox/CalendarBox";
import { useCalendar } from "~/features/adminPanel/hooks/calendar/useCalendar";
import { Copy, SquareChevronLeft, SquareChevronRight } from "lucide-react";
import { Paths } from "~/features/app/constants/Paths";
import { ToastContainer } from "react-toastify";

type CalendarTableProps = {
  getReservationLink: (date: string) => string;
};

export function CalendarTable({ getReservationLink }: CalendarTableProps) {
  const S = useStyles(style);
  const CS = useStyles(calendarStyle);

  const {
    dates,
    getAppointmentsByDate,
    weekOffset,
    setWeekOffset,
    isMobile,
    copyToClipboard,
  } = useCalendar();

  const handlePrev = () => {
    setWeekOffset((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setWeekOffset((prev) => prev + 1);
  };

  return (
    <>
      <div className={S(`options-navigation`)}>
        <div className={S(`options`)}></div>
        <div className={S(`navigation`)}>
          <button
            className={S(`arrow`)}
            disabled={weekOffset === 0}
            onClick={handlePrev}
          >
            <SquareChevronLeft size={30} strokeWidth={1} />{" "}
            {isMobile ? "Poprzedni dzień" : "Poprzedni tydzień"}
          </button>
          <button onClick={handleNext} className={S(`arrow`)}>
            {isMobile ? "Następny dzień" : "Następny tydzień"}{" "}
            <SquareChevronRight size={30} strokeWidth={1} />
          </button>
        </div>
      </div>
      <div className={CS(`calendar`)}>
        {dates.map((currentDate, index) => (
          <div className={CS(`day`)} key={index}>
            <div
              className={CS(`date-in-number`)}
              onClick={() =>
                copyToClipboard(
                  Paths.ADMIN.SCHEDULE.CALENDAR.absolute +
                    `?tydzien=` +
                    currentDate.toISOString().split("T")[0],
                  currentDate.toISOString().split("T")[0]
                )
              }
            >
              {currentDate.toLocaleDateString("pl-PL").replace(/\./g, "/")}
            </div>
            <div
              className={CS(`date-in-words`)}
              onClick={() =>
                copyToClipboard(
                  Paths.ADMIN.SCHEDULE.CALENDAR.absolute +
                    `?tydzien=` +
                    currentDate.toISOString().split("T")[0],
                  currentDate.toISOString().split("T")[0]
                )
              }
            >
              <ToastContainer />
              {currentDate.toLocaleDateString("pl-PL", {
                weekday: "long",
              })}{" "}
              <Copy size={15} strokeWidth={1} />
            </div>
            {hoursOfPossibleActions.map((hour, index) => (
              <CalendarBox
                currentDate={currentDate}
                hour={hour}
                getAppointmentsByDate={getAppointmentsByDate}
                key={index}
                getReservationLink={getReservationLink}
              />
            ))}
          </div>
        ))}
      </div>
    </>
  );
}
