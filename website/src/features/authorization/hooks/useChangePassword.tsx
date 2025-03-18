import { useState } from "react";
import { changePassword } from "../api/AuthToPanelAdmin";
import { useNavigate } from "react-router-dom";

export const useChangePassword = (token: string) => {
  type ChangePasswordType = {
    firstPassword: string;
    secondPassword: string;
  };

  const navigate = useNavigate();
  const [passwords, setPasswords] = useState<ChangePasswordType>({
    firstPassword: "",
    secondPassword: "",
  });

  const onChangePasswords = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const { name, value } = event.target;
    setPasswords((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const changePasswordOnSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    if (passwords.firstPassword !== passwords.secondPassword) {
      window.confirm("Hasła nie są zgodne!");
      return;
    }
    const response = await changePassword(passwords.firstPassword, token);

    response.status == 201 ? navigate("/administrator/login") : "any";
  };

  return { onChangePasswords, changePasswordOnSubmit, passwords };
};
