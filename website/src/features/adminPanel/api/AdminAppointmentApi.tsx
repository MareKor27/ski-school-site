import axios from "axios";
import { CollectionResponseDto } from "./type/collectionResponse.dto";
import { useSessionStore } from "~/features/authorization/store/useSessionStore";
import {
  AppointmentDto,
  CreateAppointmentDto,
  UpdateAppointmentDto,
} from "./type/appointment.dto";
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

export async function getAppoitmentsByDateForOneUser(
  startDate: Date,
  howManyDays: number,
  user?: number
) {
  let options = "";
  if (user) {
    options += `?user=${user}`;
  }

  const endDate = new Date(startDate);
  endDate.setDate(startDate.getDate() + howManyDays);
  endDate.setHours(23, 59, 59, 999);
  const response = await api.get<ResponseDto<AppointmentDto[]>>(
    `/appointment/between/${startDate.toISOString()}/${endDate.toISOString()}${options}`
  );
  return response.data;
}

export async function updateAppointment(
  id: number,
  updatedAppointment: UpdateAppointmentDto
): Promise<ResponseDto<AppointmentDto>> {
  console.log(id, updatedAppointment);
  const response = await api.patch<ResponseDto<AppointmentDto>>(
    `/appointment${"/" + id}`,
    updatedAppointment
  );
  return response.data;
}

export async function deleteAppointment(
  id: number
): Promise<ResponseDto<AppointmentDto>> {
  const response = await api.delete<ResponseDto<AppointmentDto>>(
    `/appointment${"/" + id}`
  );
  return response.data;
}
