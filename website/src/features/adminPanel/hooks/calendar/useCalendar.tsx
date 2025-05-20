import { useState, useMemo, useEffect } from "react";
import { getAppoitmentsByDateForOneUser } from "../../api/AdminAppointmentApi";
import { readReservations } from "../../api/AdminReservationApi";
import { AppointmentDto } from "../../api/type/appointment.dto";
import { ReservationDto } from "../../api/type/reservation.dto";
import {
  getMondayOfOffset,
  getOffsetFromDate,
  getWeekDates,
} from "../../services/AppointmentServices";
import { useSearchParams } from "react-router-dom";
export type AppointmentTile = {
  appointment: AppointmentDto;
  nextAppointments: AppointmentDto[];
};

export const useCalendar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [weekOffset, setWeekOffset] = useState<number>(0);
  const [howManyDays, setHowManyDays] = useState<number>(7);
  const [appointments, setAppointments] = useState<AppointmentDto[]>([]);

  const SERVER_MAX_RESERVATION_LENGHT = 3;

  useEffect(() => {
    const tydzienParam = searchParams.get("tydzien");
    if (tydzienParam) {
      const today = new Date();
      const paramDate = new Date(tydzienParam);
      if (paramDate > today) {
        const offset = getOffsetFromDate(tydzienParam);
        setWeekOffset(offset);
      }
    }
  }, [searchParams]);

  const dates = useMemo(() => {
    const dates = getWeekDates({
      hour: 6,
      weekOffSet: weekOffset,
      daysCount: howManyDays,
    });
    return dates;
  }, [weekOffset]);

  /// DO ZMIANY DLA WSZYSTKICH
  const fetchAppointmentResponse = async (dates: Date) => {
    const response = await getAppoitmentsByDateForOneUser(
      new Date(dates),
      howManyDays
    );
    setAppointments(response.content);
  };

  const getAppointmentsByDate = (date: Date): AppointmentTile[] => {
    const responseAppointments: AppointmentDto[] = appointments.filter(
      (appointment) => appointment.appointmentDate == date.toISOString()
    );
    return responseAppointments.map((appointment) => {
      return {
        appointment,
        nextAppointments: getAppointmentMaxLenght(appointment),
      };
    });
  };

  const getAppointmentMaxLenght = (
    appointmentDto: AppointmentDto
  ): AppointmentDto[] => {
    const nextAppointments: AppointmentDto[] = [];
    let date = new Date(appointmentDto.appointmentDate);
    let hours = 0;

    while (hours < SERVER_MAX_RESERVATION_LENGHT - 1) {
      date.setHours(date.getHours() + 1);

      const nextAppo = appointments.find(
        (appointment) =>
          appointment.appointmentDate === date.toISOString() &&
          appointment.instructor.id === appointmentDto.instructor.id
      );

      if (!nextAppo) break;

      if (nextAppo.reservation === null) {
        nextAppointments.push(nextAppo);
      } else {
        break;
      }

      hours++;
    }

    return nextAppointments;
  };

  useEffect(() => {
    const monday = getMondayOfOffset(weekOffset);
    const tydzienParam = searchParams.get("tydzien");
    const formattedMonday = monday.toISOString().split("T")[0];
    if (tydzienParam !== formattedMonday) {
      setSearchParams(
        (prev) => {
          if (weekOffset) {
            prev.set("tydzien", monday.toISOString().split("T")[0]);
          } else {
            prev.delete("tydzien");
          }
          return prev;
        },
        { replace: false }
      );
    }

    fetchAppointmentResponse(dates[0]);
  }, [weekOffset]);

  return {
    dates,
    weekOffset,
    setWeekOffset,
    getAppointmentsByDate,
  } as const;
};
