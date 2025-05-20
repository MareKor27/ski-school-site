import { useEffect, useState } from "react";
import { ReservationDto } from "../../api/type/reservation.dto";
import { readReservations } from "../../api/AdminReservationApi";
import { deleteReservations } from "../../api/AdminReservationApi";

export const useReservation = () => {
  const [reservations, setReservations] = useState<ReservationDto[]>([]);

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
  //  TODO: musi siępo czyms odświeżać tylko po czym?

  return {
    reservations,
    handleDeleteReservation,
  } as const;
};
