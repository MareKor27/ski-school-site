export const hours = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19];

type GetWeekDatesOptions = {
  daysCount?: number;
  weekOffSet?: number;
  hour?: number;
};

export function getWeekDates(options: GetWeekDatesOptions = {}): Date[] {
  const daysCount = options.daysCount ?? 7;
  const weekOffSet = options.weekOffSet ?? 0;
  const hour = options.hour ?? 4;

  const today = new Date();
  const currentDay = today.getDay();
  const mondayOffset = 1 - currentDay + 7 * weekOffSet;

  const dates: Date[] = [];

  for (let i = 0; i < daysCount; i++) {
    const date = new Date();
    date.setDate(today.getDate() + mondayOffset + i);
    dates.push(
      new Date(
        date.getFullYear(),
        date.getMonth(),
        date.getDate(),
        hour,
        0,
        0,
        0
      )
    );
  }
  return dates;
}

export function getMondayOfOffset(
  weekOffSet: number,
  today = new Date()
): Date {
  const currentDay = today.getDay();
  const mondayOffset = 1 - currentDay + 7 * weekOffSet;

  today.setDate(today.getDate() + mondayOffset);
  today.setHours(6);
  today.setMinutes(0);
  today.setSeconds(0);
  return today;
}

export function getOffsetFromDate(date: string) {
  // const msPerWeek = 24 * 60 * 58 * 1000;
  const d1 = getMondayOfOffset(0);
  // d1.setHours(6);
  const d2 = new Date(date);
  // const diffInMs = Math.abs((d2.getTime() - d1.getTime()) / msPerWeek);
  // console.log(diffInMs / 7);
  // return Math.floor(diffInMs / 7);
  console.log(weeksBetween(d1, d2));
  return weeksBetween(d1, d2);
}

function weeksBetween(date1: Date, date2: Date) {
  const d1 = new Date(date1);
  const d2 = new Date(date2);
  const utc1 = Date.UTC(d1.getFullYear(), d1.getMonth(), d1.getDate());
  const utc2 = Date.UTC(d2.getFullYear(), d2.getMonth(), d2.getDate());

  const msPerDay = 1000 * 60 * 60 * 24;
  const days = Math.abs((utc2 - utc1) / msPerDay);

  return Math.floor(days / 7);
}
