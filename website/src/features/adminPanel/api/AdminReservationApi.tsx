import axios from "axios";
import { CollectionResponseDto } from "./type/collectionResponse.dto";
import { useSessionStore } from "~/features/authorization/store/useSessionStore";
import { CreateReservationDto, ReservationDto } from "./type/reservation.dto";
import { ResponseDto } from "./type/response.dto";
import { handleApiError } from "~/features/authorization/services/ErrorServices";
import { RequestOptions } from "./type/paginationOptions.dto";
import { store } from "~/features/environment/EnironmentStoreProvider";
//baseURL: "/api",
const api = axios.create();

api.interceptors.request.use(
  (config) => {
    const token = useSessionStore.getState().token;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    const baseUrl = store.getState().apiBaseUrl;
    if (!baseUrl) throw new Error("Config not loaded");
    config.baseURL = baseUrl;
    return config;
  },
  (error) => Promise.reject(error)
);

export async function readReservations(
  requestOptions: RequestOptions
): Promise<CollectionResponseDto<ReservationDto>> {
  console.log(requestOptions);
  const response = await api.get<CollectionResponseDto<ReservationDto>>(
    "/reservation",
    {
      params: requestOptions,
    }
  );
  //WPROWADZIĆ
  console.log(response);
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

export async function setReservationStatus(
  lessonStatus: string,
  reservationId: number
) {
  const response = await api.patch<ResponseDto<ReservationDto>>(
    `/reservation${"/" + reservationId}`,
    { lessonStatus }
  );
  return response.data;
}

export async function checkReservationToken(token: string) {
  const response = await api.get<ResponseDto<ReservationDto>>(
    `auth/verification/${token}`
  );
  console.log("response data", response.data);
  return response.data;
}
