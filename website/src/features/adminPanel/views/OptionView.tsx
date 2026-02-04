import { ReactNode } from "react";
import { AdminPanel } from "../components/AdminPanel/AdminPanel";
import { PanelOptions } from "../components/PanelOptions/PanelOptions";
import { SideBarMenu } from "../components/SideBarMenu/SideBarMenu";
import { BlankLayout } from "~/features/app/layouts/BlankLayout";

type OptionViewType = {
  children: ReactNode;
};

export function OptionView({ children }: OptionViewType) {
  return (
    <BlankLayout>
      <AdminPanel>
        <SideBarMenu />
        <PanelOptions>{children}</PanelOptions>
      </AdminPanel>
    </BlankLayout>
  );
}
