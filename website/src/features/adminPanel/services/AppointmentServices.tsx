export const hours = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19];

type GetWeekDatesOptions = {
  daysCount?: number;
  weekOffSet?: number;
  hour?: number;
};

export function getWeekDates(options: GetWeekDatesOptions = {}): string[] {
  const daysCount = options.daysCount ?? 7;
  const weekOffSet = options.weekOffSet ?? 0;
  const hour = options.hour ?? 4;

  const today = new Date();
  const currentDay = today.getDay();
  const mondayOffset = 1 - currentDay + 7 * weekOffSet;

  const dates: string[] = [];

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
      ).toISOString()
    );
  }
  return dates;
}
