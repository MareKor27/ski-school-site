import { useState } from "react";
import { ListMenuType } from "../services/CompanyStuffServices";
import { UserDto } from "../api/type/user.dto";

export const useView = (setUserData: (user: UserDto) => void) => {
  const [activeView, setActiveView] = useState<ListMenuType>("LIST");

  const toggleTab = (tabIndex: ListMenuType) => {
    setActiveView(tabIndex);
    setUserData({
      id: 1,
      name: "",
      email: "",
      role: "INSTRUCTOR",
    });
  };

  return [activeView, setActiveView, toggleTab] as const;
};
