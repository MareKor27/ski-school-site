import { ReactNode } from "react";
import { AdminPanel } from "../components/AdminPanel/AdminPanel";
import { PanelOptions } from "../components/PanelOptions/PanelOptions";
import { SideBarMenu } from "../components/SideBarMenu/SideBarMenu";

type OptionViewType = {
  children: ReactNode;
};

export function OptionView({ children }: OptionViewType) {
  return (
    <AdminPanel>
      <SideBarMenu />
      <PanelOptions>{children}</PanelOptions>
    </AdminPanel>
  );
}
