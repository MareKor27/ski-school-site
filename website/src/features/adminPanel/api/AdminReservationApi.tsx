import axios from "axios";
import { CollectionResponseDto } from "./type/collectionResponse.dto";
import { useSessionStore } from "~/features/authorization/store/useSessionStore";
import { CreateReservationDto, ReservationDto } from "./type/reservation.dto";
import { ResponseDto } from "./type/response.dto";
import { handleApiError } from "~/features/authorization/services/ErrorServices";

const api = axios.create({
  baseURL: "http://localhost:3000",
});

api.interceptors.request.use(
  (config) => {
    const token = useSessionStore.getState().token;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export async function readReservations(): Promise<
  CollectionResponseDto<ReservationDto>
> {
  const response = await api.get<CollectionResponseDto<ReservationDto>>(
    "/reservation"
  );
  return response.data;
}

export async function deleteReservations(
  id: number
): Promise<ResponseDto<ReservationDto>> {
  const response = await api.delete<ResponseDto<ReservationDto>>(
    `/reservation${"/" + id}`
  );
  return response.data;
}

export async function createReservation(
  reservation: CreateReservationDto,
  appointmentId: number
) {
  // try {
  //   const response = await api.post<ResponseDto<ReservationDto>>(
  //     `/reservation?appointment=${appointmentId}`,
  //     reservation
  //   );
  //   return response.data;
  // } catch (error: any) {
  //   if (error.response) {
  //     console.error(
  //       "Błąd serwera:",
  //       error.response.data.message || error.response.data
  //     );
  //   } else if (error.request) {
  //     console.error("Brak odpowiedzi od serwera");
  //   } else {
  //     console.error("Błąd aplikacji:", error.message);
  //   }
  // }
  try {
    const response = await api.post<ResponseDto<ReservationDto>>(
      `/reservation?appointment=${appointmentId}`,
      reservation
    );
    return response.data;
  } catch (error) {
    throw handleApiError(error);
  }
}
