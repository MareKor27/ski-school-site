import React, { useState } from "react";

type DayInfo = {
  day: string;
  number: string;
};

export const useAvailability = () => {
  const [weekOffset, setWeekOffset] = useState<number>(0);

  const todayDate = new Date();
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

  const generateDates = (): Date[] => {
    const today = new Date();
    const dayOfWeek = today.getDay();

    const daysToMonday = dayOfWeek === 0 ? -6 : 1 - dayOfWeek;
    today.setDate(today.getDate() + daysToMonday + weekOffset * 7);

    return Array.from({ length: 7 }, (_, i) => {
      const date = new Date(today.getTime());
      date.setDate(date.getDate() + i);

      return date;
    });
  };
  const dates: Date[] = generateDates();

  const onChangeChecbox = (
    date: Date,
    hour: string,
    user: any,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (!e.target.checked) {
      console.log(
        user.name,
        "NIE będziesz dostępny: ",
        date.toLocaleDateString("pl-PL"),
        " o godzinie: ",
        hour
      );
    } else {
      console.log(
        user.name,
        "Będziesz dostępny: ",
        date.toLocaleDateString("pl-PL"),
        " o godzinie: ",
        hour
      );
    }
  };

  return {
    weekOffset,
    setWeekOffset,
    hours,
    dates,
    todayDate,
    onChangeChecbox,
  };
};
