import React, { useEffect, useMemo, useState } from "react";
import {
  createAppointment,
  createAppointmentForInstructor,
  deleteAppointment,
  getAppoitmentsByDateForOneUser,
  setAppointmentsByDay,
} from "../../api/AdminAppointmentApi";
import { AppointmentDto } from "../../api/type/appointment.dto";
import {
  getWeekDates,
  hoursOfPossibleActions,
} from "../../services/AppointmentServices";
import { useSessionStore } from "~/features/authorization/store/useSessionStore";
import { readUser } from "../../api/AdminUserApi";

export const useAppointment = (location?: any) => {
  const [weekOffset, setWeekOffset] = useState<number>(0);
  const [appointments, setAppointments] = useState<AppointmentDto[]>();
  const [howManyDays, setHowManyDays] = useState<number>(7);

  const userToken = useSessionStore();

  const queryParams = new URLSearchParams(location.search);
  const userId = Number(queryParams.get("userid"));
  const [modificationLabel, setModificationLabel] = useState<string>("");

  const userForAppointments = useMemo<number>(() => {
    return userId ? userId : userToken.user?.id!;
  }, []);

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
      userForAppointments
    );
    setAppointments(response.content);
  };

  useEffect(() => {
    fetchResponse(dates);
  }, [weekOffset]);
  useEffect(() => {
    loadModificationLabel();
  }, []);

  const onChangeAppointment = async (
    date: Date,
    appointmentId: number | undefined,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (e.target.checked) {
      if (userId != 0) {
        await createAppointmentForInstructor(date, userId);
      } else {
        await createAppointment(date);
      }
    } else {
      appointmentId && (await deleteAppointment(appointmentId));
    }
    fetchResponse(dates);
  };

  const chengeAppointmentsByDay = async (
    chosenDate: Date,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    console.log(
      "chengeAppointmentsByDay",
      chosenDate,
      e.target.checked.valueOf(),
      userForAppointments
    );
    const request = await setAppointmentsByDay(
      chosenDate,
      e.target.checked.valueOf(),
      userForAppointments
    );
    console.log(request);
    fetchResponse(dates);
  };

  // const chengeAppointmentsByWeek = (
  //   chosenDate: Date,
  //   e: React.ChangeEvent<HTMLInputElement>
  // ) => {
  //   console.log(chosenDate, e);
  // };

  const getAppointmentByDate = (date: Date): AppointmentDto | undefined => {
    const found = appointments?.find((app) => {
      return app.appointmentDate == date.toISOString();
    });
    return found;
  };
  // const getAppointmentByDate = (
  //   currentDate: Date,
  //   hour: number
  // ): AppointmentDto | undefined => {
  //   const newDate = new Date(currentDate);
  //   newDate.setHours(hour, 0, 0, 0);

  //   const found = appointments?.find((app) => {
  //     return app.appointmentDate == newDate.toISOString();
  //   });
  //   return found;
  // };

  const loadModificationLabel = async () => {
    try {
      const ownerResponse = userToken.user?.id
        ? await readUser(userToken.user.id)
        : null;

      if (userId && userToken.user?.id != userId) {
        const instructorResponse = await readUser(userId);

        const ownerName = ownerResponse?.content.name || "Ktoś";
        const instructorName = instructorResponse.content.name;

        setModificationLabel(`${ownerName} modyfikuje ${instructorName}`);
      } else {
        setModificationLabel(`${ownerResponse?.content.name}`);
      }
    } catch (err) {
      console.error("Błąd przy pobieraniu danych użytkowników:", err);
    }
  };

  function hasAppointmentsOnDay(date: Date): boolean {
    const appointmentLenght = appointments?.filter((a) => {
      const dateA = new Date(a.appointmentDate).toLocaleDateString("pl-PL", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      });
      const dateB = new Date(date).toLocaleDateString("pl-PL", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      });
      // console.log(dateA, dateB);
      return dateA == dateB;
    }).length;
    return appointmentLenght == hoursOfPossibleActions.length;
  }

  return {
    weekOffset,
    setWeekOffset,
    dates,
    onChangeAppointment,
    getAppointmentByDate,
    userForAppointments,
    modificationLabel,
    chengeAppointmentsByDay,
    hasAppointmentsOnDay,
  };
};
