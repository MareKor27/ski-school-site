import { useState, useMemo, useEffect } from "react";
import { getAppoitmentsByDateForOneUser } from "../../api/AdminAppointmentApi";
import { readReservations } from "../../api/AdminReservationApi";
import { AppointmentDto } from "../../api/type/appointment.dto";
import { ReservationDto } from "../../api/type/reservation.dto";
import { getWeekDates } from "../../services/AppointmentServices";

export const useCalendar = () => {
  const [weekOffset, setWeekOffset] = useState<number>(0);
  const [howManyDays, setHowManyDays] = useState<number>(7);
  const [appointments, setAppointments] = useState<AppointmentDto[]>();

  const dates = useMemo(() => {
    const dates = getWeekDates({
      hour: 6,
      weekOffSet: weekOffset,
      daysCount: howManyDays,
    });
    return dates;
  }, [weekOffset]);

  /// DO ZMIANY DLA WSZYSTKICH
  const fetchAppointmentResponse = async (dates: Date[]) => {
    const response = await getAppoitmentsByDateForOneUser(
      new Date(dates[0]),
      howManyDays
    );
    setAppointments(response.content);
  };

  const getAppointmentsByDate = (date: Date): AppointmentDto[] | undefined => {
    if (appointments) {
      const responseAppointments: AppointmentDto[] = appointments?.filter(
        (appointment) => appointment.appointmentDate == date.toISOString()
      );
      return responseAppointments;
    }
  };

  useEffect(() => {
    fetchAppointmentResponse(dates);
  }, [weekOffset]);

  return {
    dates,
    weekOffset,
    setWeekOffset,
    getAppointmentsByDate,
  } as const;
};
