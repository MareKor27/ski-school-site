import axios from "axios";
import { CollectionResponseDto } from "./type/collectionResponse.dto";
import { useSessionStore } from "~/features/authorization/store/useSessionStore";
import { CreateReservationDto, ReservationDto } from "./type/reservation.dto";
import { ResponseDto } from "./type/response.dto";
import { handleApiError } from "~/features/authorization/services/ErrorServices";
import { AppointmentDto } from "./type/appointment.dto";

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
  filteredReservationAppoitmentsIds: number[]
) {
  try {
    const response = await api.post<ResponseDto<ReservationDto>>(
      `/reservation`,
      { reservation, filteredReservationAppoitmentsIds }
    );
    return response.data;
  } catch (error) {
    throw handleApiError(error);
  }
}
