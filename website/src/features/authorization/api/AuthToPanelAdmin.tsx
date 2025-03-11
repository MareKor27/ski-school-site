import axios from "axios";
import { UserData } from "../store/useSessionStore";

const api = axios.create({
  baseURL: "http://localhost:3000",
});

export type LoginResponeType = {
  accessToken: string;
  payload: UserData;
};

//react query i walidacja kodu

export async function login(
  email: string,
  password: string
): Promise<LoginResponeType> {
  const response = await api.post<LoginResponeType>("/login", {
    email,
    password,
  });
  return response.data;
}
