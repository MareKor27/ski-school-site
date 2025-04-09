import { useNavigate } from "react-router-dom";
import { useReservationStore } from "./useReservationStore";
import { useForm } from "react-hook-form";
import { mapApiErrorToFormErrors } from "~/features/authorization/services/ErrorServices";
import { Paths } from "~/features/app/constants/Paths";
import { useState } from "react";
import { createReservation } from "../../api/AdminReservationApi";
import {
  ReservationType,
  CreateReservationDto,
} from "../../api/type/reservation.dto";

export const useLessonReservation = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<ReservationType>({
    mode: "onSubmit",
    defaultValues: {
      fullName: "",
      email: "",
      phoneNumber: "",
      purchasedTime: "ONEHOUR",
      participants: NaN,
      ageOfParticipants: "",
      advancement: "",
      chosenEquipment: "WŁASNY",
      additionalComments: "",
      insuranceInformation: "",
      appointmentId: "",
    },
  });
  const [sending, setSending] = useState(false);
  const navigate = useNavigate();
  const resevationStore = useReservationStore();

  const addReservation = async (form: ReservationType) => {
    setSending(true);
    const { appointmentId, ...rest } = form;
    const reservation: CreateReservationDto = rest;

    let reservationResponse;
    try {
      reservationResponse = await createReservation(
        reservation,
        Number(appointmentId)
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

    console.log(reservationResponse);

    setSending(false);
    if (!reservationResponse) return;
    resevationStore.clearReservationData();
    navigate(Paths.ADMIN.SCHEDULE.CALENDAR.absolute);
  };

  return {
    addReservation,
    register,
    errors,
    handleSubmit,
    sending,
  } as const;
};
