import React, { useState } from "react";
import useStyles from "~/hooks/useStyle";
import style from "../Schedule.module.scss";
import { useAvailability } from "~/features/adminPanel/hooks/appointment/useAvailability";
import { InputAppSchedule } from "../InputAppSchedule.tsx/InputAppSchedule";
export function AvailabilityTable() {
  const S = useStyles(style);
  const {
    weekOffset,
    setWeekOffset,
    hours,
    dates,
    todayDate,
    onChangeAppointment,
    isCheked,
  } = useAvailability();

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

      {dates.map((myDate) => (
        <div key={myDate.toISOString()} className={S(`day`)}>
          <div className={S(`date-in-words`)}>
            {myDate.toLocaleDateString("pl-PL", { weekday: "long" })}
          </div>
          <div className={S(`date-in-number`)}>
            {myDate.toLocaleDateString("pl-PL")}
          </div>

          {hours.map((hour) => (
            <div key={hour} className={S(`classes`)}>
              <InputAppSchedule
                date={myDate}
                hour={hour}
                onChangeAppointment={onChangeAppointment}
                isChecked={isCheked}
              />
              {/* <input
                type="checkbox"
                // checked po dacie i userze
                disabled={date <= todayDate}
                // onChange={(e) => {
                //   onChangeAppointment(date, hour, e);
                // }}
              /> */}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
