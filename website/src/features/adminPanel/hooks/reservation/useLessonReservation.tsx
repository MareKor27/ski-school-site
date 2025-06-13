import { useNavigate, useSearchParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { mapApiErrorToFormErrors } from "~/features/authorization/services/ErrorServices";
import { useEffect, useMemo, useState } from "react";
import { createReservation } from "../../api/AdminReservationApi";
import {
  ReservationType,
  CreateReservationDto,
} from "../../api/type/reservation.dto";
import { AppointmentDto } from "../../api/type/appointment.dto";
import { getAppointmentsForReservation } from "../../api/AdminAppointmentApi";

import { UserDto } from "../../api/type/user.dto";
import { Paths } from "~/features/app/constants/Paths";

const SERVER_MAX_RESERVATION_LENGHT = 3;

export const useLessonReservation = () => {
  // console.log("commponent Renderd");
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    watch,
    control,
  } = useForm<ReservationType>({
    mode: "onSubmit",
    defaultValues: {
      fullName: "",
      email: "",
      phoneNumber: "",
      purchasedTime: NaN,
      participants: NaN,
      ageOfParticipants: "",
      advancement: "",
      chosenEquipment: "WŁASNY",
      additionalComments: "",
      insuranceInformation: "",
      instructorId: "",
    },
  });
  const [sending, setSending] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const [todayReservation, setTodayReservation] = useState<Date>(new Date());
  const [allAppointments, setAllAppointments] = useState<AppointmentDto[]>([]);

  const instructorWithHours = useMemo<
    Record<string, { instructor: UserDto; hours: number }>
  >(() => {
    return procesInstructorsWithHours(allAppointments);
  }, [allAppointments]);

  const instructorDataSet = useMemo<any[]>(() => {
    return procesInstructorDataSet(instructorWithHours);
  }, [instructorWithHours]);

  const lessonLenght = useMemo<number>(() => {
    const instructorId = Number(watch("instructorId"));

    const dataFromInstructor = instructorDataSet.find(
      (element) => element.instructor.id == instructorId
    );

    if (dataFromInstructor) {
      return dataFromInstructor.hours;
    }
    return 0;
  }, [watch("instructorId")]);

  const navigate = useNavigate();

  useEffect(() => {
    // console.log("useEffect");
    const reservationDay = searchParams.get("dnia");
    let date;
    if (reservationDay) {
      date = parseCustomDate(reservationDay);
      setTodayReservation(date);
      readAllAppointmentsFromDate(date);
    }
  }, [searchParams]);

  async function readAllAppointmentsFromDate(todayReservation: Date) {
    // console.log("readAllAppointmentsFromDate");
    try {
      // console.log("before await");
      const respond = await getAppointmentsForReservation(
        todayReservation,
        SERVER_MAX_RESERVATION_LENGHT
      );
      // console.log("after await");
      console.log(respond.content);
      setAllAppointments(respond.content);
    } catch (error: any) {
      console.log(error);
    }
  }

  function procesInstructorsWithHours(
    allAppointments: AppointmentDto[]
  ): Record<string, { instructor: UserDto; hours: number }> {
    const localInstructorWithHours: Record<
      string,
      { instructor: UserDto; hours: number }
    > = {};

    //jak używam forEach do tworzenia to powinienem to zrobić lepiej GO WITH CHAT
    allAppointments.forEach((appointment) => {
      const key = appointment.instructor.name;
      if (!localInstructorWithHours[key]) {
        localInstructorWithHours[key] = {
          instructor: appointment.instructor,
          hours: 0,
        };
      }
      localInstructorWithHours[key].hours += 1;
    });
    return localInstructorWithHours;
  }

  function procesInstructorDataSet(
    instructorWithHours: Record<string, { instructor: UserDto; hours: number }>
  ): any[] {
    return Object.values(instructorWithHours);
    // console.log("instructorDataSet", instructorDataSet);
  }

  function parseCustomDate(str: string): Date {
    const isoString = str.replace(/-(\d{2}:\d{2})$/, "T$1");
    return new Date(isoString);
  }

  const addReservation = async (form: ReservationType) => {
    setSending(true);
    const { instructorId: instructorId, ...rest } = form;
    const reservation: CreateReservationDto = rest;

    // console.log("reservation", reservation, instructorId);
    const filteredReservationAppoitmentsIds = getReservationAppoitmentsIds(
      instructorId,
      reservation
    );
    console.log(
      "filteredAppointmentsByLenght",
      filteredReservationAppoitmentsIds
    );

    let reservationResponse;
    try {
      reservationResponse = await createReservation(
        reservation,
        filteredReservationAppoitmentsIds
      );
    } catch (error: any) {
      const mappedErrors = mapApiErrorToFormErrors<ReservationType>(error, [
        "fullName",
        "email",
        "phoneNumber",
        "purchasedTime",
        "participants",
        "ageOfParticipants",
        "advancement",
        "chosenEquipment",
        "additionalComments",
        "insuranceInformation",
      ]);

      const result = Object.values(mappedErrors);
      result.forEach((element) => {
        setError(element.field, { message: element.message });
      });
    }

    setSending(false);
    if (!reservationResponse) return;
    navigate(Paths.ADMIN.SCHEDULE.CALENDAR.absolute);
  };

  function getReservationAppoitmentsIds(
    instructorId: string,
    reservation: CreateReservationDto
  ): number[] {
    const filteredAppointmentsByInstructor = allAppointments.filter(
      (appointment) => appointment.instructor.id === Number(instructorId)
    );
    const purchasedTime = Number(reservation.purchasedTime);
    const filteredAppointmentsByLength = filteredAppointmentsByInstructor.slice(
      0,
      purchasedTime
    );
    return filteredAppointmentsByLength.map((appointment) => appointment.id);
  }

  const formatTitleDateReservation = (appDate: Date): string => {
    const date = new Date(appDate);
    const formattedDate = date.toLocaleDateString("pl-PL", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });
    let formatted = formattedDate.replace(",", "").split(" ");
    formatted = formatted.map(
      (word) => word.charAt(0).toUpperCase() + word.slice(1)
    );

    const finalFormatted = formatted.join(" ");
    return finalFormatted;
  };

  return {
    addReservation,
    register,
    errors,
    handleSubmit,
    sending,
    todayReservation,
    formatTitleDateReservation,
    allAppointments,
    instructorDataSet,
    lessonLenght,
    control,
  } as const;
};
