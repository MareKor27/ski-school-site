type InputAppScheduleType = {
  date: Date;
  hour: number;
  onChangeAppointment: (
    date: Date,
    e: React.ChangeEvent<HTMLInputElement>
  ) => void;
  isChecked: (date: Date) => boolean;
};

export const InputAppSchedule = ({
  date,
  hour,
  onChangeAppointment,
  isChecked,
}: InputAppScheduleType) => {
  //console.log(date, hour);
  const newDate = date;
  newDate.setHours(hour, 0, 0, 0);
  //const newData = new Date(date).setHours(hour, 0, 0, 0);
  //console.log(newData.toLocaleString("pl-PL"));
  //console.log(date);
  return (
    <input
      type="checkbox"
      //   checked={isChecked(date)}
      onChange={(e) => {
        onChangeAppointment(newDate, e);
      }}
    />
  );
};
