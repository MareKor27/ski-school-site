import { useEffect, useState } from "react";
import {
  CreateReservationDto,
  ReservationDto,
  ReservationType,
} from "../../api/type/reservation.dto";
import {
  createReservation,
  readReservations,
} from "../../api/AdminReservationApi";
import { deleteReservations } from "../../api/AdminReservationApi";
import { useNavigate } from "react-router-dom";
import { useReservationStore } from "./useReservationStore";
import { useForm, UseFormReturn } from "react-hook-form";
import { mapApiErrorToFormErrors } from "~/features/authorization/services/ErrorServices";
import { Paths } from "~/features/app/constants/Paths";

export const useReservation = () => {
  const [reservations, setReservations] = useState<ReservationDto[]>([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    watch,
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

  // const setFormValue = <T extends keyof CreateReservationDto>(
  //   field: T,
  //   value: CreateReservationDto[T]
  // ) => {
  //   setReservation((prevState) => ({
  //     ...prevState,
  //     [field]: value,
  //   }));
  // };

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

  const handleDeleteReservation = async (id: number) => {
    const isConfirmed = window.confirm(
      "Czy na pewno chcesz usunąć tą rezerwacje?"
    );
    if (isConfirmed) {
      await deleteReservations(id);
    }
    fetchReservationResponse();
  };

  // refresh
  const fetchReservationResponse = async () => {
    const response = await readReservations();
    setReservations(response.content);
  };

  useEffect(() => {
    fetchReservationResponse();
  }, [resevationStore.appointmentsData]);

  return {
    reservations,
    handleDeleteReservation,
    addReservation,
    register,
    errors,
    handleSubmit,
    sending,
    // setFormValue,
  } as const;
};
