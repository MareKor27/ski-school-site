// import Tooltip from "../../ToolTip/ToolTip";
import { Link } from "react-router-dom";
import { Paths } from "~/features/app/constants/Paths";
import useStyles from "~/hooks/useStyle";
import style from "./CalendarBox.module.scss";
import calendarStyle from "~/assets/styles/calendarStyles.module.scss";
import { AppointmentDto } from "~/features/adminPanel/api/type/appointment.dto";
import { AppointmentTile } from "~/features/adminPanel/hooks/calendar/useCalendar";
import { useState } from "react";
import {
  useFloating,
  autoUpdate,
  offset,
  flip,
  shift,
  useHover,
  useFocus,
  useDismiss,
  useRole,
  useInteractions,
} from "@floating-ui/react";
import { Clock4, Hourglass, UserRound } from "lucide-react";

const S = useStyles(style);
const CS = useStyles(calendarStyle);

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
  // ===============================================
  const [isOpen, setIsOpen] = useState(false);

  const { refs, floatingStyles, context } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
    middleware: [offset(10), flip(), shift({ padding: 20 })],
    whileElementsMounted: autoUpdate,
  });

  const hover = useHover(context, { move: false });
  const focus = useFocus(context);
  const dismiss = useDismiss(context);
  const role = useRole(context, {
    // If your reference element has its own label (text).
    role: "tooltip",
    // If your reference element does not have its own label,
    // e.g. an icon.
    // role: "label",
  });

  // Merge all the interactions into prop getters
  const { getReferenceProps, getFloatingProps } = useInteractions([
    hover,
    focus,
    dismiss,
    role,
  ]);
  // ===============================================
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

  if (!appointments.length || newDate < new Date()) {
    return (
      <div className={S(`classes`)} key={hour}>
        <div className={S(`reservation unavailable`)}>Niedostepne</div>
      </div>
    );
  }

  const checkAppointmentReservationAvailability: boolean = appointments.some(
    (appointment) => {
      if (appointment.appointment.reservation == null) return true;
    }
  );

  if (checkAppointmentReservationAvailability) {
    // JESLI RESERVATIONID != NULL \|/

    return (
      <>
        <Link
          to={`${
            Paths.ADMIN.CALENDAR_ADD_RESERVATION.absolute
          }?dnia=${formatDate(newDate)}`}
          ref={refs.setReference}
          {...getReferenceProps()}
        >
          <div className={S(`classes active-classes`)} key={hour}>
            {/* <div className={CS(`hour`)}>{hour + ":00"}</div> */}
            <div>
              <div
                className={S(`reservation available-hours`)}
                title="Możliwy maksymalny czas lekcji"
              >
                {" "}
                <Clock4 size={15} strokeWidth={2} /> {maxLenght}h
              </div>
              <div
                className={S(`reservation available-instructors`)}
                title="Dostępni instruktorzy"
              >
                {" "}
                <UserRound size={15} strokeWidth={2} /> {appointments.length}
              </div>
              <button className={S(`reservation available`)}>
                {hour + ":00"}
                {/* Zarezerwuj */}
              </button>
            </div>
          </div>
        </Link>
        {isOpen && (
          <div
            ref={refs.setFloating}
            style={{
              ...floatingStyles,
              backgroundColor: "rgba(0, 123, 177, 0.35)",
              color: "#fff",
              padding: "8px 12px",
              borderRadius: "4px",
              pointerEvents: "none", // Tooltip nie przechwytuje zdarzeń
              zIndex: 1000,
              whiteSpace: "nowrap",
              // boxShadow:
              // "0 4px 6px rgba(0, 0, 0, 0.6),0 3px 5px rgba(0, 0, 0, 0.6)",
              boxShadow: "0 8px 32px rgba(0, 0, 0, 0.37)",
              backdropFilter: "blur(10px)",
              //WebkitBackdropFilter: "blur(10px)",
              border: "1px solid rgba(255, 255, 255, 0.2)",

              textShadow: "0 0 3px rgba(0, 0, 0, 0.8)",
              //fontWeight: 00,
              display: "flex",
              flexDirection: "column",
              gap: "0.5rem",
            }}
            {...getFloatingProps()}
            // style={{
            // backgroundColor: "#007bb1",
            // color: "#fff",
            // padding: "8px 12px",
            // borderRadius: "4px",
            // pointerEvents: "none", // Tooltip nie przechwytuje zdarzeń
            // zIndex: 1000,
            // whiteSpace: "nowrap",
            // boxShadow:
            //   "0 4px 6px rgba(0, 0, 0, 0.6),0 3px 5px rgba(0, 0, 0, 0.6)",
            // }}
          >
            {appointments.map((appointment) => {
              if (appointment.appointment.reservation == null) {
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
          </div>
        )}
      </>
    );
  } else {
    return (
      <div className={S(`classes`)} key={hour}>
        <div className={S(`reservation unavailable`)}>Niedostepne</div>
      </div>
    );
  }
};

// function Tooltip() {
//   return (
//     <>
//       <button ref={refs.setReference} {...getReferenceProps()}>
//         Reference element
//       </button>
//       {isOpen && (
//         <div
//           ref={refs.setFloating}
//           style={floatingStyles}
//           {...getFloatingProps()}
//         >
//           Tooltip element daasd asd assdd ad assd asdasd asdas dasdd d asd asada
//           aas ddas dasdasdasdd asdas as asasdd asd asdas as das das a
//         </div>
//       )}
//     </>
//   );
// }
