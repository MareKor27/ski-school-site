import { Navigate, Outlet } from "react-router-dom";
import { useSessionStore } from "~/features/authorization/store/useSessionStore";
import { Paths } from "../constants/Paths";

export function AuthGuard() {
  const token = useSessionStore((state) => state.token);

  if (!token) return <Navigate to={Paths.ADMIN.LOGIN.absolute} />;

  return <Outlet />;
}
