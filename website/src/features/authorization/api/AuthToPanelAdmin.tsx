import axios from "axios";
import { UserData, useSessionStore } from "../store/useSessionStore";
import { handleApiError } from "../services/ErrorServices";

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

export type LoginResponeType = {
  accessToken: string;
  user: UserData;
  expirationDate: string;
};

//react query i walidacja kodu

export async function login(
  email: string,
  password: string
): Promise<LoginResponeType> {
  try {
    const response = await api.post<LoginResponeType>("/login", {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    throw handleApiError(error);
  }
}

export async function changePassword(password: string, token: string) {
  const response = await api.post("/reset-password", {
    password,
    token,
  });
  return response;
}

export async function forgotPassword(email: string) {
  const response = await api.post("/forgot-password", { email });
  return response;
}

export async function extendSesionTime(
  user: UserData
): Promise<LoginResponeType> {
  const response = await api.post<LoginResponeType>("/token", { user });
  return response.data;
}
