import style from "./Calendar.module.scss";
import useStyles from "~/hooks/useStyle";
const S = useStyles(style);
export function Calendar() {
  return (
    <div className={S(`calendar`)}>
      <div className={S(`hours`)}>
        <div className={S(`hour transparent`)}></div>
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
                <button className={S(`reservation available`)}>
                  Zarezerwuj
                </button>
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
