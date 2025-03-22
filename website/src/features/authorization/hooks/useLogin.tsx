import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSessionStore } from "../store/useSessionStore";
import { login } from "../api/AuthToPanelAdmin";
import {
  FormErrorType,
  RegistretionType,
} from "../api/type/authorization-type";

export const useLogin = () => {
  const [account, setAccount] = useState<RegistretionType>({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState<Record<string, FormErrorType>>();
  const initializeSession = useSessionStore((state) => state.initialize);
  const navigate = useNavigate();

  const onChangeAccount = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const { name, value } = event.target;
    setAccount((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const loginToSystem = async () => {
    const response = await login(account.email, account.password);

    initializeSession(response.accessToken, response.payload);
    navigate("/administrator");
  };

  return { onChangeAccount, loginToSystem, account, errors, setErrors };
};
