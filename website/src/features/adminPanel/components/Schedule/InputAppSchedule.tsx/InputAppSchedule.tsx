import { AppointmentDto } from "~/features/adminPanel/api/type/appointment.dto";

type InputAppScheduleType = {
  currentDate: Date;
  hour: number;
  onChangeAppointment: (
    date: Date,
    appointmentId: number | undefined,
    e: React.ChangeEvent<HTMLInputElement>
  ) => void;
  getAppointmentByDate: (date: Date) => AppointmentDto | undefined;
};

export const InputAppSchedule = ({
  currentDate, //24.03.2025
  hour, //10
  onChangeAppointment,
  getAppointmentByDate,
}: InputAppScheduleType) => {
  const todayDate = new Date();
  const newDate = new Date(currentDate);
  newDate.setHours(hour, 0, 0, 0);
  const appointment = getAppointmentByDate(newDate);
  return (
    <input
      type="checkbox"
      disabled={newDate <= todayDate || appointment?.reservation != null}
      checked={!!appointment}
      onChange={(e) => {
        onChangeAppointment(newDate, appointment?.id, e);
      }}
    />
  );
};
