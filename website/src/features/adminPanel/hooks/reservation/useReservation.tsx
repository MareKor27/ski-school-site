import { useEffect, useState } from "react";
import { ReservationDto } from "../../api/type/reservation.dto";
import { readReservations } from "../../api/AdminReservationApi";

export const useReservation = () => {
  const [reservation, setReservation] = useState<ReservationDto[]>([]);

  const fetchReservationResponse = async () => {
    const response = await readReservations();
    setReservation(response.content);
  };

  useEffect(() => {
    fetchReservationResponse();
  }, []);

  return {
    reservation,
    fetchReservationResponse,
  } as const;
};
