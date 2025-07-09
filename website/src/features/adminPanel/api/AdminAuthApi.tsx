import axios from "axios";
import { useSessionStore } from "~/features/authorization/store/useSessionStore";
import { ResponseDto } from "./type/response.dto";
import { CreateUserDto } from "./type/user.dto";
import { handleApiError } from "~/features/authorization/services/ErrorServices";

const api = axios.create({
  baseURL: "/api/auth",
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

export async function createUser(
  name: string,
  email: string,
  iconColor: string
): Promise<ResponseDto<CreateUserDto>> {
  try {
    const response = await api.post<ResponseDto<CreateUserDto>>("/register", {
      name,
      email,
      iconColor,
    });
    return response.data;
  } catch (error) {
    throw handleApiError(error);
  }
}
