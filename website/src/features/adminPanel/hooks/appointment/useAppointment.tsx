import React, { useEffect, useMemo, useState } from "react";
import {
  createAppointment,
  deleteAppointment,
  getAppoitmentsByDateForOneUser,
} from "../../api/AdminAppointmentApi";
import { AppointmentDto } from "../../api/type/appointment.dto";
import { getWeekDates } from "../../services/AppointmentServices";

export const useAppointment = (userId: number) => {
  const [weekOffset, setWeekOffset] = useState<number>(0);
  const [appointments, setAppointments] = useState<AppointmentDto[]>();
  const [howManyDays, setHowManyDays] = useState<number>(7);

  const dates = useMemo(() => {
    const dates = getWeekDates({
      hour: 6,
      weekOffSet: weekOffset,
      daysCount: howManyDays,
    });
    return dates;
  }, [weekOffset]);

  const fetchResponse = async (dates: Date[]) => {
    const response = await getAppoitmentsByDateForOneUser(
      new Date(dates[0]),
      howManyDays,
      userId
    );
    setAppointments(response.content);
  };

  useEffect(() => {
    fetchResponse(dates);
  }, [weekOffset]);

  const onChangeAppointment = async (
    date: Date,
    appointmentId: number | undefined,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (e.target.checked) {
      await createAppointment(date);
    } else {
      appointmentId && (await deleteAppointment(appointmentId));
    }
    fetchResponse(dates);
  };

  const getAppointmentByDate = (date: Date): AppointmentDto | undefined => {
    const found = appointments?.find((app) => {
      return app.appointmentDate == date.toISOString();
    });
    return found;
  };

  return {
    weekOffset,
    setWeekOffset,
    dates,
    onChangeAppointment,
    getAppointmentByDate,
  };
};
