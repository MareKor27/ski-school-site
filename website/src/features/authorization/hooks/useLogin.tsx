import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSessionStore } from "../store/useSessionStore";
import { login } from "../api/AuthToPanelAdmin";
import { RegistretionType } from "../api/type/authorization-type";
import { mapApiErrorToFormErrors } from "../services/ErrorServices";
import { UseFormReturn } from "react-hook-form";
import { Paths } from "~/features/app/constants/Paths";

export const useLogin = (
  setError: UseFormReturn<RegistretionType>["setError"]
) => {
  const [sending, setSending] = useState(false);
  const initializeSession = useSessionStore((state) => state.initialize);
  const navigate = useNavigate();

  const loginToSystem = async (email: string, password: string) => {
    setSending(true);
    let response;
    try {
      response = await login(email, password);
    } catch (error: any) {
      const mappedErrors = mapApiErrorToFormErrors<RegistretionType>(error, [
        "email",
        "password",
      ]);
      const result = Object.values(mappedErrors);

      result.forEach((element) => {
        setError(element.field, { message: element.message });
      });
      // setBackEndErrors(mappedErrors);
    }
    setSending(false);
    if (!response) return;

    initializeSession(response.accessToken, response.payload);
    navigate(Paths.ADMIN.INDEX.absolute);
  };

  return {
    loginToSystem,
    sending,
  };
};
