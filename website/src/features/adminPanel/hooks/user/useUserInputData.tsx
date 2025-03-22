import { useState } from "react";
import { UserDto } from "../api/type/user.dto";
import { ListMenuType } from "../services/CompanyStuffServices";

export const useUserInputData = (fetchResponse: () => void) => {
  const [userData, setUserData] = useState<UserDto>({
    id: 1,
    name: "",
    email: "",
    role: "INSTRUCTOR",
  });
  const [activeView, setActiveView] = useState<ListMenuType>("LIST");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleShowEditUser = (user: UserDto) => {
    setActiveView("EDIT");
    setUserData({
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
    });
  };

  const toggleTab = (tabIndex: ListMenuType) => {
    setActiveView(tabIndex);
    setUserData({
      id: 1,
      name: "",
      email: "",
      role: "INSTRUCTOR",
    });
  };

  const refreshView = () => {
    setActiveView("LIST");
    fetchResponse();
  };

  return {
    userData,
    activeView,
    handleInputChange,
    handleShowEditUser,
    toggleTab,
    refreshView,
  } as const;
};
