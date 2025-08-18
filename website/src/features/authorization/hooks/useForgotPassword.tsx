import { useState } from "react";
import { forgotPassword } from "../api/AuthToPanelAdmin";
import { useNavigate } from "react-router-dom";
import { Paths } from "~/features/app/constants/Paths";

export const useForgotPassword = () => {
  type ForgotPasswordType = {
    email: string;
  };

  const navigate = useNavigate();
  const [email, setEmail] = useState<ForgotPasswordType>({
    email: "",
  });

  const onChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const { name, value } = event.target;
    setEmail((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const sendReminderLink = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(email.email);
    const response = await forgotPassword(email.email);
    response.status == 201 ? navigate(Paths.ADMIN.LOGIN.absolute) : "any";
  };

  return { onChangeEmail, sendReminderLink, email };
};
