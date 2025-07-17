import axios from "axios";
import { useSessionStore } from "~/features/authorization/store/useSessionStore";
import { ResponseDto } from "./type/response.dto";
import { CreateUserDto } from "./type/user.dto";
import { handleApiError } from "~/features/authorization/services/ErrorServices";
import { store } from "~/features/environment/EnironmentStoreProvider";
//baseURL: "/api/auth",
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

export async function createUser(
  name: string,
  email: string,
  iconColor: string
): Promise<ResponseDto<CreateUserDto>> {
  try {
    const response = await api.post<ResponseDto<CreateUserDto>>(
      "/auth/register",
      {
        name,
        email,
        iconColor,
      }
    );
    return response.data;
  } catch (error) {
    throw handleApiError(error);
  }
}
