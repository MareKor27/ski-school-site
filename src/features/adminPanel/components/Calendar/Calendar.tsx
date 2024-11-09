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
        { day: "Poniedziałek", number: "11.11.2024" },
        { day: "Wtorek", number: "12.11.2024" },
        { day: "Środa", number: "13.11.2024" },
        { day: "Czwartek", number: "14.11.2024" },
        { day: "Piątek", number: "15.11.2024" },
        { day: "Sobota", number: "16.11.2024" },
        { day: "Niedziela", number: "17.11.2024" },
      ].map((termin) => (
        <div className={S(`day`)}>
          <div className={S(`date-in-words`)}>{termin.day}</div>
          <div className={S(`date-in-number`)}>{termin.number}</div>
          {[
            { time: "10:00", available: true },
            { time: "11:00", available: true },
            { time: "12:00", available: true },
            { time: "13:00", available: false },
            { time: "14:00", available: true },
            { time: "15:00", available: true },
            { time: "16:00", available: false },
            { time: "17:00", available: true },
            { time: "18:00", available: true },
            { time: "19:00", available: false },
            { time: "20:00", available: false },
          ].map((appointment) => (
            <div className={S(`classes`)}>
              {appointment.available ? (
                <button className={S(`reservation available`)}>
                  Zarezerwuj
                </button>
              ) : (
                <div className={S(`reservation unavailable`)}>
                  Zarezerwowane
                </div>
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
