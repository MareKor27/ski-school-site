import { useEffect, useState } from "react";
import { UserForm } from "../../api/type/user.dto";
import { readUser } from "../../api/AdminUserApi";

export const useUserInputData = (userId: number | null) => {
  const [userForm, setUserForm] = useState<UserForm>({
    name: "",
    email: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const fetchUser = async (userId: number) => {
    const response = await readUser(userId);
    setUserForm({
      name: response.content.name,
      email: response.content.email,
    });
  };

  const handleShowEditUser = (user: UserForm) => {
    setUserForm({
      name: user.name,
      email: user.email,
    });
  };

  useEffect(() => {
    if (userId) {
      fetchUser(userId);
    } else {
      setUserForm({
        name: "",
        email: "",
      });
    }
  }, [userId]);

  return {
    userForm,
    handleInputChange,
    handleShowEditUser,
  } as const;
};
