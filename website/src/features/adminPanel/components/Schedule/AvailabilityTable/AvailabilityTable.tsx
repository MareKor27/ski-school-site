import React, { useState } from "react";
import useStyles from "~/hooks/useStyle";
import style from "../Schedule.module.scss";
import { useAvailability } from "~/features/adminPanel/hooks/appointment/useAvailability";
export function AvailabilityTable() {
  const S = useStyles(style);
  const {
    weekOffset,
    setWeekOffset,
    hours,
    dates,
    todayDate,
    onChangeChecbox,
  } = useAvailability();

  const user = { id: 1, name: "Henio" };

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
            {hour}
          </div>
        ))}
      </div>

      {dates.map((date) => {
        return (
          <div key={date.toISOString()} className={S(`day`)}>
            <div className={S(`date-in-words`)}>
              {date.toLocaleDateString("pl-PL", { weekday: "long" })}
            </div>
            <div className={S(`date-in-number`)}>
              {date.toLocaleDateString("pl-PL")}
            </div>

            {hours.map((hour) => {
              return (
                <div key={hour} className={S(`classes`)}>
                  <input
                    type="checkbox"
                    name={date.toLocaleDateString("pl-PL")}
                    disabled={date <= todayDate}
                    onChange={(e) => {
                      onChangeChecbox(date, hour, user, e);
                    }}
                  />
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
