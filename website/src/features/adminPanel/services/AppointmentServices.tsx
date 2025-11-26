export const hoursOfPossibleActions = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19];

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

  const mondayOffset =
    daysCount == 1
      ? weekOffSet
      : (currentDay === 0 ? -6 : 1 - currentDay) + 7 * weekOffSet;

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

export function getTodayOffset(weekOffset: number): Date {
  const date = new Date();
  date.setDate(date.getDate() + weekOffset);
  return date;
}

export function getMondayOfOffset(
  weekOffSet: number,
  today = new Date()
): Date {
  const date = new Date(today);
  const day = date.getDay();

  const diff = date.getDate() - day + (day == 0 ? -6 : 1);

  date.setDate(diff + weekOffSet * 7);
  date.setHours(6, 0, 0, 0);

  return date;
}

export function getWeeksOffsetFromDate(date: string) {
  const d1 = getMondayOfOffset(0);
  const d2 = new Date(date);

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

export function getDaysBetween(date1: Date, date2: Date): number {
  const d1 = new Date(date1);
  const d2 = new Date(date2);
  const utc1 = Date.UTC(d1.getFullYear(), d1.getMonth(), d1.getDate());
  const utc2 = Date.UTC(d2.getFullYear(), d2.getMonth(), d2.getDate());

  const msPerDay = 1000 * 60 * 60 * 24;
  const days = Math.abs((utc2 - utc1) / msPerDay);

  return Math.floor(days);
}
