import { Link } from "react-router-dom";
import style from "./Calendar.module.scss";
import useStyles from "~/hooks/useStyle";
import { Paths } from "~/features/app/constants/Paths";
import { useState } from "react";
import { ReservationTable } from "./ReservationTable/ReservationTable";
import Tooltip from "../ToolTip/ToolTip";
const S = useStyles(style);
export function Calendar() {
  const [toggleCalendarState, setToggleCalendarState] = useState(1);
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
              <div className={S(`hour`)}>10:00</div>
              <div className={S(`hour`)}>11:00</div>
              <div className={S(`hour`)}>12:00</div>
              <div className={S(`hour`)}>13:00</div>
              <div className={S(`hour`)}>14:00</div>
              <div className={S(`hour`)}>15:00</div>
              <div className={S(`hour`)}>16:00</div>
              <div className={S(`hour`)}>17:00</div>
              <div className={S(`hour`)}>18:00</div>
              <div className={S(`hour`)}>19:00</div>
              <div className={S(`hour`)}>20:00</div>
            </div>
            {[
              {
                day: "Poniedziałek",
                number: "11.11.2024",
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
                  { time: "20:00", available: false },
                ],
              },
              {
                day: "Wtorek",
                number: "12.11.2024",
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
                  { time: "20:00", available: true },
                ],
              },
              {
                day: "Środa",
                number: "13.11.2024",
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
                  { time: "20:00", available: false },
                ],
              },
              {
                day: "Czwartek",
                number: "14.11.2024",
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
                  { time: "20:00", available: true },
                ],
              },
              {
                day: "Piątek",
                number: "15.11.2024",
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
                  { time: "20:00", available: false },
                ],
              },
              {
                day: "Sobota",
                number: "16.11.2024",
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
                  { time: "20:00", available: false },
                ],
              },
              {
                day: "Niedziela",
                number: "17.11.2024",
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
                  { time: "20:00", available: false },
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
                          <Link
                            to={Paths.ADMIN.CALENDAR_ADD_RESERVATION.absolute}
                          >
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
        </div>
        <div
          className={
            toggleCalendarState === 2
              ? S(`content-tab active-content`)
              : S(`content-tab`)
          }
        >
          <ReservationTable />
        </div>
        <div
          className={
            toggleCalendarState === 3
              ? S(`content-tab active-content`)
              : S(`content-tab`)
          }
        >
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
              <div className={S(`hour`)}>
                10:00 <input type="checkbox" id="" name="checkbox1" />
              </div>
              <div className={S(`hour`)}>
                11:00 <input type="checkbox" id="" name="checkbox1" />
              </div>
              <div className={S(`hour`)}>
                12:00 <input type="checkbox" id="" name="checkbox1" />
              </div>
              <div className={S(`hour`)}>
                13:00 <input type="checkbox" id="" name="checkbox1" />
              </div>
              <div className={S(`hour`)}>
                14:00 <input type="checkbox" id="" name="checkbox1" />
              </div>
              <div className={S(`hour`)}>
                15:00 <input type="checkbox" id="" name="checkbox1" />
              </div>
              <div className={S(`hour`)}>
                16:00 <input type="checkbox" id="" name="checkbox1" />
              </div>
              <div className={S(`hour`)}>
                17:00 <input type="checkbox" id="" name="checkbox1" />
              </div>
              <div className={S(`hour`)}>
                18:00 <input type="checkbox" id="" name="checkbox1" />
              </div>
              <div className={S(`hour`)}>
                19:00 <input type="checkbox" id="" name="checkbox1" />
              </div>
              <div className={S(`hour`)}>
                20:00 <input type="checkbox" id="" name="checkbox1" />
              </div>
            </div>
            {[
              {
                day: "Poniedziałek",
                number: "11.11.2024",
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
                  { time: "20:00", available: false },
                ],
              },
              {
                day: "Wtorek",
                number: "12.11.2024",
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
                  { time: "20:00", available: true },
                ],
              },
              {
                day: "Środa",
                number: "13.11.2024",
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
                  { time: "20:00", available: false },
                ],
              },
              {
                day: "Czwartek",
                number: "14.11.2024",
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
                  { time: "20:00", available: true },
                ],
              },
              {
                day: "Piątek",
                number: "15.11.2024",
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
                  { time: "20:00", available: false },
                ],
              },
              {
                day: "Sobota",
                number: "16.11.2024",
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
                  { time: "20:00", available: false },
                ],
              },
              {
                day: "Niedziela",
                number: "17.11.2024",
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
                  { time: "20:00", available: false },
                ],
              },
            ].map((termin) => (
              <div className={S(`day`)}>
                <div className={S(`date-in-words`)}>
                  {termin.day}
                  <br />
                  <input type="checkbox" id="" name="checkbox1" />
                </div>
                <div className={S(`date-in-number`)}>{termin.number}</div>

                {termin.hours.map((hour) =>
                  hour.time ? (
                    <div className={S(`classes`)}>
                      <input type="checkbox" id="" name="checkbox1" />
                    </div>
                  ) : (
                    <div className={S(`classes`)}></div>
                  )
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
