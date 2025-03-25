import Tooltip from "../../ToolTip/ToolTip";
import { Link } from "react-router-dom";
import { Paths } from "~/features/app/constants/Paths";
import useStyles from "~/hooks/useStyle";
import style from "../Schedule.module.scss";
import { AppointmentDto } from "~/features/adminPanel/api/type/appointment.dto";
import { UserDto } from "~/features/adminPanel/api/type/user.dto";

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
          content={
            <p>
              {appointments?.map((appointment) => (
                <div>
                  <span>{appointment.instructor.name} dostępny</span>
                  <br />
                </div>
              ))}
            </p>
          }
        >
          <button className={S(`reservation available`)}>
            <Link to={Paths.ADMIN.CALENDAR_ADD_RESERVATION.absolute}>
              {" "}
              Zarezerwuj{" "}
            </Link>
          </button>
        </Tooltip>
      </div>
    );
  } else {
    return <div className={S(`reservation unavailable`)}>Zarezerwowane</div>;
  }
};
