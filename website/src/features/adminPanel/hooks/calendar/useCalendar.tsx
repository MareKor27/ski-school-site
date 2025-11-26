import { useState, useMemo, useEffect } from "react";
import { getAppoitmentsByDateForOneUser } from "../../api/AdminAppointmentApi";
import { AppointmentDto } from "../../api/type/appointment.dto";

import {
  getMondayOfOffset,
  getWeeksOffsetFromDate,
  getWeekDates,
  getDaysBetween,
  getTodayOffset,
} from "../../services/AppointmentServices";
import { useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";
export type AppointmentTile = {
  appointment: AppointmentDto;
  nextAppointments: AppointmentDto[];
};

export const useCalendar = () => {
  const SERVER_MAX_RESERVATION_LENGHT = 3;

  const [searchParams, setSearchParams] = useSearchParams();
  const [weekOffset, setWeekOffset] = useState<number>(0);
  const [howManyDays, setHowManyDays] = useState<number>(7);
  const [appointments, setAppointments] = useState<AppointmentDto[]>([]);
  const [isMobile, setIsMobile] = useState<boolean>(
    typeof window !== "undefined" ? window.innerWidth < 991 : false
  );

  onresize = () => {
    setIsMobile(window.innerWidth < 991);
  };

  useEffect(() => {
    const tydzienParam = searchParams.get("tydzien");

    if (tydzienParam) {
      const today = new Date();
      const paramDate = new Date(tydzienParam);

      if (paramDate > today) {
        const offset = isMobile
          ? getDaysBetween(today, paramDate)
          : getWeeksOffsetFromDate(tydzienParam);
        setWeekOffset(offset);
      }
    }
  }, [searchParams]);

  useEffect(() => {
    setHowManyDays(isMobile ? 1 : 7);
  }, [isMobile]);

  const dates = useMemo(() => {
    const dates = getWeekDates({
      hour: 6,
      weekOffSet: weekOffset,
      daysCount: howManyDays,
    });

    return dates;
  }, [weekOffset, howManyDays]);

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

  const copyToClipboard = (linkToDay: string, day: string) => {
    navigator.clipboard.writeText(linkToDay).then(() => {
      toast.info(`Link do ${day} skopiowany !`, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    });
  };

  useEffect(() => {
    const monday = isMobile
      ? getTodayOffset(weekOffset)
      : getMondayOfOffset(weekOffset);

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
  }, [weekOffset, howManyDays]);

  return {
    dates,
    weekOffset,
    setWeekOffset,
    getAppointmentsByDate,
    isMobile,
    copyToClipboard,
  } as const;
};
