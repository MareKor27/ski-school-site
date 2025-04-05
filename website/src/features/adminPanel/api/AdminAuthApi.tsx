import axios from "axios";
import { useSessionStore } from "~/features/authorization/store/useSessionStore";
import { ResponseDto } from "./type/response.dto";
import { CreateUserDto } from "./type/user.dto";
import { handleApiError } from "~/features/authorization/services/ErrorHandler";

const api = axios.create({
  baseURL: "http://localhost:3000/auth",
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
  email: string
): Promise<ResponseDto<CreateUserDto>> {
  try {
    const response = await api.post<ResponseDto<CreateUserDto>>("/register", {
      name,
      email,
    });
    return response.data;
  } catch (error) {
    throw handleApiError(error);
  }
}
