import axios from "axios";
import { useSessionStore } from "~/features/authorization/store/useSessionStore";
import { ResponseDto } from "./type/response.dto";
import { CreateUserDto } from "./type/user.dto";

const api = axios.create({
  baseURL: "http://localhost:3000/auth",
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

export async function register(
  name: string,
  email: string
): Promise<ResponseDto<CreateUserDto>> {
  const response = await api.post<ResponseDto<CreateUserDto>>("/register", {
    name,
    email,
  });
  return response.data;
}
