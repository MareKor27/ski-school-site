import React from "react";
import style from "../Schedule.module.scss";
import useStyles from "~/hooks/useStyle";
import { Paths } from "~/features/app/constants/Paths";
import { Link } from "react-router-dom";
import Tooltip from "../../ToolTip/ToolTip";
import { hours } from "~/features/adminPanel/services/AppointmentServices";
import { v4 as uuidv4 } from "uuid";
import { useReservation } from "~/features/adminPanel/hooks/reservation/useReservation";
import { CalendarBox } from "../CalendarBox/CalendarBox";
import { useCalendar } from "~/features/adminPanel/hooks/calendar/useCalendar";
export function CalendarTable() {
  const S = useStyles(style);

  const { weekOffset, setWeekOffset, dates, getAppointmentsByDate } =
    useCalendar();

  return (
    <div className={S(`calendar`)}>
      <div className={S(`hours`)}>
        <div className={S(`hour transparent`)}>
          <button
            disabled={weekOffset === 0}
            onClick={() => setWeekOffset((prev) => Math.max(0, prev - 1))}
          >
            <img src="/images/admin/arrow.png" alt={"W Lewo"} />
          </button>
          <button onClick={() => setWeekOffset((prev) => prev + 1)}>
            <img
              src="/images/admin/arrow.png"
              className={S(`arrow-right`)}
              alt={"W Prawo"}
            />
          </button>
        </div>
        {hours.map((hour) => (
          <div className={S(`hour`)} key={uuidv4()}>
            {hour + ":00"}
          </div>
        ))}
      </div>
      {dates.map((currentDate) => (
        <div className={S(`day`)} key={currentDate.toISOString()}>
          <div className={S(`date-in-words`)}>
            {currentDate.toLocaleDateString("pl-PL", { weekday: "long" })}
          </div>
          <div className={S(`date-in-number`)}>
            {currentDate.toLocaleDateString("pl-PL")}
          </div>
          {hours.map((hour) => (
            <div className={S(`classes`)} key={hour}>
              <CalendarBox
                currentDate={currentDate}
                hour={hour}
                getAppointmentsByDate={getAppointmentsByDate}
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
