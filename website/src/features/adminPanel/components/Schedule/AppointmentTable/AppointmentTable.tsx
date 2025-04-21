import useStyles from "~/hooks/useStyle";
import style from "./AppointmentTable.module.scss";
import { useAppointment } from "~/features/adminPanel/hooks/appointment/useAppointment";
import { InputAppSchedule } from "../InputAppSchedule.tsx/InputAppSchedule";
import { hours } from "~/features/adminPanel/services/AppointmentServices";
import { useSessionStore } from "~/features/authorization/store/useSessionStore";
export function AppointmentTable() {
  const S = useStyles(style);
  const userToken = useSessionStore();
  let userID = 0;
  if (userToken.user?.id) {
    userID = userToken.user?.id;
  }
  // powinno wyrzucać jak nie masz sesji eloooo
  const {
    weekOffset,
    setWeekOffset,
    dates,
    onChangeAppointment,
    getAppointmentByDate,
  } = useAppointment(userID);

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
          <div className={S(`hour`)} key={hour}>
            {hour + ":00"}
          </div>
        ))}
      </div>

      {dates
        .map((dateString) => new Date(dateString))
        .map((currentDate) => (
          <div key={currentDate.toISOString()} className={S(`day`)}>
            <div className={S(`date-in-words`)}>
              {currentDate.toLocaleDateString("pl-PL", { weekday: "long" })}
            </div>
            <div className={S(`date-in-number`)}>
              {currentDate.toLocaleDateString("pl-PL")}
            </div>

            {hours.map((hour) => (
              <div key={hour} className={S(`classes`)}>
                <InputAppSchedule
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
  );
}
