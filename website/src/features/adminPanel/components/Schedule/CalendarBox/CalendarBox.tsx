import Tooltip from "../../ToolTip/ToolTip";
import { Link } from "react-router-dom";
import { Paths } from "~/features/app/constants/Paths";
import useStyles from "~/hooks/useStyle";
import style from "../Schedule.module.scss";
import { AppointmentDto } from "~/features/adminPanel/api/type/appointment.dto";
import { useReservationStore } from "~/features/adminPanel/hooks/reservation/useReservationStore";

type InputCalendarBoxType = {
  currentDate: Date;
  hour: number;
  getAppointmentsByDate: (date: Date) => AppointmentDto[] | undefined;
};

export const CalendarBox = ({
  currentDate,
  hour,
  getAppointmentsByDate,
}: InputCalendarBoxType) => {
  const setReservationData = useReservationStore();

  const newDate = new Date(currentDate);
  newDate.setHours(hour, 0, 0, 0);
  const S = useStyles(style);
  const appointments = getAppointmentsByDate(newDate);

  if (!appointments?.length) {
    return <div className={S(`reservation unavailable`)}></div>;
  }

  if (appointments?.length) {
    return (
      <div>
        <Tooltip
          content={appointments?.map((appointment) => (
            <div key={appointment.instructor.id}>
              <span>{appointment.instructor.name} dostępny</span>
              <br />
            </div>
          ))}
        >
          <Link
            to={Paths.ADMIN.CALENDAR_ADD_RESERVATION.absolute}
            onClick={() => setReservationData.setReservationData(appointments)}
          >
            <button className={S(`reservation available`)}>Zarezerwuj</button>
          </Link>
        </Tooltip>
      </div>
    );
  } else {
    return <div className={S(`reservation unavailable`)}>Zarezerwowane</div>;
  }
};
