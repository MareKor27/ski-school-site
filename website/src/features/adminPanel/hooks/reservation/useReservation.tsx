import { useEffect, useState } from "react";
import { ReservationDto } from "../../api/type/reservation.dto";
import { readReservations } from "../../api/AdminReservationApi";
import { deleteReservations } from "../../api/AdminReservationApi";
import { useReservationStore } from "./useReservationStore";

export const useReservation = () => {
  const [reservations, setReservations] = useState<ReservationDto[]>([]);
  const resevationStore = useReservationStore();

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
  } as const;
};
