import { useState } from "react";
import { login } from "../api/AuthToPanelAdmin";
import { useSessionStore } from "../store/useSessionStore";
import { useNavigate } from "react-router-dom";

export const useLogin = () => {
  type RegistretionType = {
    email: string;
    password: string;
  };

  const [account, setAccount] = useState<RegistretionType>({
    email: "",
    password: "",
  });

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

  const loginToSystem = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const response = await login(account.email, account.password);
    initializeSession(response.accessToken, response.payload);
    navigate("/administrator");
  };

  return { onChangeAccount, loginToSystem, account };
};
