import { extendSesionTime } from "~/features/authorization/api/AuthToPanelAdmin";
import {
  UserData,
  useSessionStore,
} from "~/features/authorization/store/useSessionStore";

export const useAccount = () => {
  const userToken = useSessionStore();
  const refreshSession = useSessionStore((state) => state.refreshSession);

  const extendSesion = async (user: UserData) => {
    const response = await extendSesionTime(user);
    refreshSession(
      response.accessToken,
      response.user,
      new Date(response.expirationDate)
    );
  };

  return {
    userToken,
    extendSesion,
  };
};
