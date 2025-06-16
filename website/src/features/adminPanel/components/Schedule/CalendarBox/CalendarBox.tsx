import Tooltip from "../../ToolTip/ToolTip";
import { Link } from "react-router-dom";
import { Paths } from "~/features/app/constants/Paths";
import useStyles from "~/hooks/useStyle";
import style from "./CalendarBox.module.scss";
import { AppointmentDto } from "~/features/adminPanel/api/type/appointment.dto";
import { AppointmentTile } from "~/features/adminPanel/hooks/calendar/useCalendar";
const S = useStyles(style);

const SERVER_MAX_RESERVATION_LENGHT = 3;

type InputCalendarBoxType = {
  currentDate: Date;
  hour: number;
  getAppointmentsByDate: (date: Date) => AppointmentTile[];
};

export const CalendarBox = ({
  currentDate,
  hour,
  getAppointmentsByDate,
}: InputCalendarBoxType) => {
  //const setReservationData = useReservationStore();

  const newDate = new Date(currentDate);
  newDate.setHours(hour, 0, 0, 0);

  function formatDate(date: Date): string {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    return `${year}-${month}-${day}-${hours}:${minutes}`;
  }

  const appointments = getAppointmentsByDate(newDate);

  const maxLenght = Math.min(
    SERVER_MAX_RESERVATION_LENGHT,
    Math.max(...appointments.map((a) => a.nextAppointments.length + 1))
  );

  function maxLenghtFunction(nextAppointments: AppointmentDto[]): number {
    let lenght = 1;
    if (nextAppointments.length == 0) {
      return lenght;
    }
    nextAppointments.forEach((appointment) => {
      if (appointment.reservation == null) {
        lenght++;
      } else {
        return lenght;
      }
    });

    return lenght;
  }

  if (!appointments.length) {
    return <div className={S(`reservation unavailable`)}>Niedostepne</div>;
  }

  const checkAppointmentReservationAvailability: boolean = appointments.some(
    (appointment) => {
      if (appointment.appointment.reservation == null) return true;
    }
  );

  if (checkAppointmentReservationAvailability) {
    // JESLI RESERVATIONID != NULL \|/

    return (
      <div>
        <div className={S(`reservation available-hours`)}>
          {" "}
          maks. {maxLenght}h
        </div>
        <Tooltip
          content={appointments.map((appointment) => {
            if (appointment.appointment.reservation == null) {
              // if (
              //   newDate.toISOString() ==
              //   new Date("2025-05-05T08:00:00.000Z").toISOString()
              // ) {
              //   console.log(appointment);
              // }

              // chyba w tym momencie sprawdzamy ile godzin ma dany instruktor od tego momentu
              // w bazie badamy czy od danej godziny
              //struktura?????
              //jak wyciągać ilość godzin?

              return (
                <div key={appointment.appointment.instructor.id}>
                  <span>
                    {appointment.appointment.instructor.name} dostępny{" "}
                    {maxLenghtFunction(appointment.nextAppointments)} h
                  </span>
                  <br />
                </div>
              );
            }
          })}
        >
          <Link
            to={`${
              Paths.ADMIN.CALENDAR_ADD_RESERVATION.absolute
            }?dnia=${formatDate(newDate)}`}
            //onClick={() => setReservationData.setAppointmentsTile(appointments)}
          >
            <button className={S(`reservation available`)}>
              {/* {hour + ":00"} */}
              Zarezerwuj
            </button>
          </Link>
        </Tooltip>
      </div>
    );
  } else {
    return <div className={S(`reservation reserved`)}>{hour + ":00"}</div>;
  }
};
