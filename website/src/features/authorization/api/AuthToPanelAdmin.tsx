import axios from "axios";
import { UserData, useSessionStore } from "../store/useSessionStore";
import { handleApiError } from "../services/ErrorServices";
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

export type LoginResponeType = {
  accessToken: string;
  user: UserData;
  expirationDate: string;
};

//react query i walidacja kodu

export async function login(
  email: string,
  password: string,
  recaptchaToken: string
): Promise<LoginResponeType> {
  console.log(recaptchaToken);
  try {
    const response = await api.post<LoginResponeType>("/auth/login", {
      email,
      password,
      recaptchaToken,
    });
    return response.data;
  } catch (error) {
    throw handleApiError(error);
  }
}

export async function changePassword(password: string, token: string) {
  const response = await api.post("/auth/reset-password", {
    password,
    token,
  });
  return response;
}

export async function forgotPassword(email: string) {
  const response = await api.post("/auth/forgot-password", { email });
  return response;
}

export async function extendSesionTime(
  user: UserData
): Promise<LoginResponeType> {
  const response = await api.post<LoginResponeType>("/auth/token", { user });
  return response.data;
}
