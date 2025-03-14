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
  initialize: (token: string, user: UserData) => void;
  clear: () => void;
};

export const useSessionStore = create<AuthState>((set) => ({
  token: localStorage.getItem("token"),
  user: JSON.parse(localStorage.getItem("user")!),

  initialize: (token: string, user: UserData) => {
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(user));
    set({ token, user });
  },

  clear: () => {
    set({ token: null, user: null });
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  },
}));

//zap i odcz
