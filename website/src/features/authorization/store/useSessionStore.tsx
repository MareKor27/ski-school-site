import { create } from "zustand";
import { NavigateFunction } from "react-router-dom";
import { Paths } from "~/features/app/constants/Paths";
import { extendSesionTime } from "../api/AuthToPanelAdmin";
export type Role = "CLIENT" | "INSTRUCTOR" | "ADMIN";
// export type Role = {
//   Client: "CLIENT";
//   Instructor: "INSTRUCTOR";
//   Admin: "ADMIN";
// };

export type UserData = {
  id: number;
  email: string;
  role: Role;
};

export type AuthState = {
  token: string | null;
  user: UserData | null;
  expirationDate: Date | null;
  refreshSession: (token: string, user: UserData, expirationDate: Date) => void;
  clear: () => void;
};

let logoutTimer: ReturnType<typeof setTimeout> | null = null;

const serializeSesion = (
  token: string,
  user: UserData,
  expirationDate: Date
) => {
  localStorage.setItem("token", token);
  localStorage.setItem("user", JSON.stringify(user));
  localStorage.setItem("expirationDate", JSON.stringify(expirationDate));
};

export const useSessionStore = create<AuthState>((set, get) => ({
  token: localStorage.getItem("token"),
  user: JSON.parse(localStorage.getItem("user")!),
  expirationDate: JSON.parse(localStorage.getItem("expirationDate")!),

  refreshSession: (token: string, user: UserData, expirationDate: Date) => {
    serializeSesion(token, user, expirationDate);
    set({ token, user, expirationDate });

    if (logoutTimer) clearTimeout(logoutTimer);

    const now = new Date().getTime();
    const expiration = new Date(expirationDate).getTime() - 30000;
    const timeout = expiration - now;

    logoutTimer = setTimeout(async () => {
      //If we want the user to have a session a certain amount of time
      //useSessionStore.getState().clear();

      //If we want the user  to have a session all the time and log out only at their request
      const response = await extendSesionTime(user);
      get().refreshSession(
        response.accessToken,
        response.user,
        new Date(response.expirationDate)
      );
    }, timeout);
  },

  clear: () => {
    set({ token: null, user: null, expirationDate: null });
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("expirationDate");

    if (logoutTimer) clearTimeout(logoutTimer);
  },
}));
