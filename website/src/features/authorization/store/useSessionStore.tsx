import { create } from "zustand";
import { extendSesionTime } from "../api/AuthToPanelAdmin";
export type Role = "CLIENT" | "INSTRUCTOR" | "ADMIN";

export type UserData = {
  id: number;
  email: string;
  role: Role;
};

export type AuthState = {
  token: string | null;
  user: UserData | null;
  expirationDate: Date | null;
  logoutTimer: ReturnType<typeof setTimeout> | null;
  refreshSession: (token: string, user: UserData, expirationDate: Date) => void;
  clear: () => void;
};

const serializeSesion = (
  token: string,
  user: UserData,
  expirationDate: Date
) => {
  localStorage.setItem("token", token);
  localStorage.setItem("user", JSON.stringify(user));
  localStorage.setItem("expirationDate", expirationDate.toISOString());
};

export const useSessionStore = create<AuthState>((set, get) => ({
  token: localStorage.getItem("token"),
  user: JSON.parse(localStorage.getItem("user")!),
  expirationDate: localStorage.getItem("expirationDate")
    ? new Date(localStorage.getItem("expirationDate")!)
    : null,
  logoutTimer: null,

  refreshSession: (token: string, user: UserData, expirationDate: Date) => {
    serializeSesion(token, user, expirationDate);
    set({ token, user, expirationDate });

    const existingTimer = get().logoutTimer;
    if (existingTimer) clearTimeout(existingTimer);

    const now = new Date().getTime();
    const expiration = new Date(expirationDate).getTime() - 30000;
    const timeout = expiration - now;

    // logoutTimer = setTimeout(async () => {
    //   //If we want the user to have a session a certain amount of time
    //   //useSessionStore.getState().clear();

    //   //If we want the user  to have a session all the time and log out only at their request
    //   const response = await extendSesionTime(user);
    //   get().refreshSession(
    //     response.accessToken,
    //     response.user,
    //     new Date(response.expirationDate)
    //   );
    // }, timeout);

    const timer = setTimeout(async () => {
      try {
        const response = await extendSesionTime(user);
        get().refreshSession(
          response.accessToken,
          response.user,
          new Date(response.expirationDate)
        );
      } catch (error) {
        get().clear();
      }
    }, timeout);

    set({ logoutTimer: timer });
  },

  clear: () => {
    set({ token: null, user: null, expirationDate: null });
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("expirationDate");

    const existingTimer = get().logoutTimer;
    if (existingTimer) clearTimeout(existingTimer);
    set({ logoutTimer: null });
  },
}));
