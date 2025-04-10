import { create } from "zustand";
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

export const useSessionStore = create<AuthState>((set) => ({
  token: localStorage.getItem("token"),
  user: JSON.parse(localStorage.getItem("user")!),
  expirationDate: JSON.parse(localStorage.getItem("expirationDate")!),

  refreshSession: (token: string, user: UserData, expirationDate: Date) => {
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("expirationDate", JSON.stringify(expirationDate));
    set({ token, user, expirationDate });

    let timeA = new Date().getTime();
    let timeB = new Date(expirationDate).getTime();
    let timeC = timeB - timeA;

    console.log(timeC);
  },

  clear: () => {
    set({ token: null, user: null, expirationDate: null });
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("expirationDate");
  },
}));

//zap i odcz
