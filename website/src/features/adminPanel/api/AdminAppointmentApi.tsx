import axios from "axios";
import { CollectionResponseDto } from "./type/collectionResponse.dto";
import { useSessionStore } from "~/features/authorization/store/useSessionStore";
import { AppointmentDto, CreateAppointmentDto } from "./type/appointment.dto";
import { ResponseDto } from "./type/response.dto";
import { UserDto } from "./type/user.dto";

const api = axios.create({
  baseURL: "http://localhost:3000",
});

api.interceptors.request.use(
  (config) => {
    const token = useSessionStore.getState().token;
    console.log("t", token);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    console.log("c", config);
    return config;
  },
  (error) => Promise.reject(error)
);

export async function createAppointment(date: Date) {
  const createAppointment: CreateAppointmentDto = {
    appointmentDate: date,
  };
  const response = await api.post<CreateAppointmentDto>(
    "/appointment",
    createAppointment
  );
  console.log(response);
  return response.data;
}

export async function getAppoitmentByDate(startDate: Date, endDate: Date) {
  const response = await api.get<ResponseDto<AppointmentDto>>(
    `/appointment/between/${startDate.toISOString()}/${endDate.toISOString()}`
  );
  return response.data;
}

// export async function readAppointmens(): Promise<
//   CollectionResponseDto<AppointmentDto>
// > {
//   const response = await api.get<CollectionResponseDto<AppointmentDto>>(
//     "/appointment"
//   );
//   return response.data;
// }

// export async function deleteAppointmen(
//   id: number
// ): Promise<ResponseDto<AppointmentDto>> {
//   const response = await api.delete<ResponseDto<AppointmentDto>>(
//     `/appointment${"/" + id}`
//   );
//   return response.data;
// }
