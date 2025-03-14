import React from "react";
import style from "../Calendar.module.scss";
import useStyles from "~/hooks/useStyle";
import { Paths } from "~/features/app/constants/Paths";
import { Link } from "react-router-dom";
import Tooltip from "../../ToolTip/ToolTip";
export function ScheduleTable() {
  const S = useStyles(style);

  const hours = [
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
    "18:00",
    "19:00",
  ];
  return (
    <div className={S(`calendar`)}>
      <div className={S(`hours`)}>
        <div className={S(`hour transparent`)}>
          <img src="/images/admin/arrow.png" alt={"W Lewo"} />
          <img
            src="/images/admin/arrow.png"
            className={S(`arrow-right`)}
            alt={"W Prawo"}
          />
        </div>
        {hours.map((hour) => (
          <div className={S(`hour`)}>{hour}</div>
        ))}
      </div>
      {[
        {
          day: "Poniedziałek",
          number: "17.02.2025",
          hours: [
            { time: "10:00", available: true },
            { time: "11:00", available: false },
            { time: "12:00", available: false },
            { time: "13:00", available: false },
            { time: "14:00", available: false },
            { time: "15:00", available: true },
            { time: "16:00", available: false },
            { time: "17:00", available: true },
            { time: "18:00", available: true },
            { time: "19:00", available: false },
          ],
        },
        {
          day: "Wtorek",
          number: "18.02.2025",
          hours: [
            { time: "10:00", available: true },
            { time: "11:00", available: true },
            { time: "12:00", available: true },
            { time: "13:00", available: false },
            { time: "14:00", available: true },
            { time: "15:00", available: true },
            { time: "16:00", available: true },
            { time: "17:00", available: true },
            { time: "18:00", available: true },
            { time: "19:00", available: true },
          ],
        },
        {
          day: "Środa",
          number: "19.02.2025",
          hours: [
            { time: "10:00", available: false },
            { time: "11:00", available: false },
            { time: "12:00", available: false },
            { time: "13:00", available: false },
            { time: "14:00", available: true },
            { time: "15:00", available: true },
            { time: "16:00", available: false },
            { time: "17:00", available: true },
            { time: "18:00", available: true },
            { time: "19:00", available: false },
          ],
        },
        {
          day: "Czwartek",
          number: "20.02.2025",
          hours: [
            { time: "10:00", available: false },
            { time: "11:00", available: false },
            { time: "12:00", available: false },
            { time: "13:00", available: false },
            { time: "14:00", available: false },
            { time: "15:00", available: false },
            { time: "16:00", available: false },
            { time: "17:00", available: true },
            { time: "18:00", available: true },
            { time: "19:00", available: true },
          ],
        },
        {
          day: "Piątek",
          number: "21.02.2025",
          hours: [
            { time: "10:00", available: true },
            { time: "11:00", available: true },
            { time: "12:00", available: true },
            { time: "13:00", available: true },
            { time: "14:00", available: true },
            { time: "15:00", available: true },
            { time: "16:00", available: true },
            { time: "17:00", available: true },
            { time: "18:00", available: true },
            { time: "19:00", available: false },
          ],
        },
        {
          day: "Sobota",
          number: "22.02.2025",
          hours: [
            { time: "10:00", available: true },
            { time: "11:00", available: true },
            { time: "12:00", available: true },
            { time: "13:00", available: true },
            { time: "14:00", available: true },
            { time: "15:00", available: true },
            { time: "16:00", available: false },
            { time: "17:00", available: false },
            { time: "18:00", available: false },
            { time: "19:00", available: false },
          ],
        },
        {
          day: "Niedziela",
          number: "23.02.2025",
          hours: [
            { time: "10:00", available: false },
            { time: "11:00", available: false },
            { time: "12:00", available: false },
            { time: "13:00", available: false },
            { time: "14:00", available: true },
            { time: "15:00", available: true },
            { time: "16:00", available: true },
            { time: "17:00", available: true },
            { time: "18:00", available: true },
            { time: "19:00", available: false },
          ],
        },
      ].map((termin) => (
        <div className={S(`day`)}>
          <div className={S(`date-in-words`)}>{termin.day}</div>
          <div className={S(`date-in-number`)}>{termin.number}</div>

          {termin.hours.map((hour) =>
            hour.available ? (
              <div className={S(`classes`)}>
                <Tooltip
                  content={
                    <p>
                      Intruktor 1: dostępny
                      <br />
                      Intruktor 2: dostępny
                      <br />
                      Intruktor 3: niedostępny
                      <br />
                    </p>
                  }
                >
                  <button className={S(`reservation available`)}>
                    <Link to={Paths.ADMIN.CALENDAR_ADD_RESERVATION.absolute}>
                      {" "}
                      Zarezerwuj{" "}
                    </Link>
                  </button>
                </Tooltip>
              </div>
            ) : (
              <div className={S(`classes`)}>
                <div className={S(`reservation unavailable`)}>
                  Zarezerwowane
                </div>
              </div>
            )
          )}
        </div>
      ))}
    </div>
  );
}
