import { useEffect, useState } from "react";
import {
  CreateReservationDto,
  ReservationDto,
} from "../../api/type/reservation.dto";
import {
  createReservation,
  readReservations,
} from "../../api/AdminReservationApi";
import { deleteReservations } from "../../api/AdminReservationApi";
import { updateAppointment } from "../../api/AdminAppointmentApi";
import { UpdateAppointmentDto } from "../../api/type/appointment.dto";
import { useNavigate } from "react-router-dom";

export const useReservation = () => {
  const [reservations, setReservations] = useState<ReservationDto[]>([]);
  const [reservation, setReservation] = useState<CreateReservationDto>({
    fullName: "",
    email: "",
    phoneNumber: "",
    purchasedTime: "ONEHOUR",
    participants: 0,
    ageOfParticipants: "",
    advancement: "",
    chosenEquipment: "WYPOŻYCZONY",
    additionalComments: "",
    insuranceInformation: "",
  });
  const [appointmentId, setAppointmentId] = useState<number>(0);
  const navigate = useNavigate();

  const setFormValue = <T extends keyof CreateReservationDto>(
    field: T,
    value: CreateReservationDto[T]
  ) => {
    setReservation((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };

  const addReservation = async () => {
    console.log("reservation: ", reservation);
    const reservationResponse = await createReservation(
      reservation,
      appointmentId
    );
    console.log(reservationResponse);

    // // update apointment reservation.id = rezerw.id
    // if (reservationId) {
    //   const updateAppo: UpdateAppointmentDto = {
    //     reservationId: reservationId,
    //   };
    //   appointmentResponse = await updateAppointment(
    //     parseInt(appointmentId),
    //     updateAppo
    //   );
    // }
    // console.log(appointmentResponse);
    // return appointmentResponse;

    //navigate("/administrator/kalendarz");
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
  }, []);

  return {
    reservations,
    handleDeleteReservation,
    addReservation,
    setAppointmentId,
    setFormValue,
  } as const;
};
