import { AdminPanel } from "../components/AdminPanel/AdminPanel";
import { PanelOptions } from "../components/PanelOptions/PanelOptions";
import { SideBarMenu } from "../components/SideBarMenu/SideBarMenu";

export function OptionView() {
  return (
    <AdminPanel>
      <SideBarMenu />
      <PanelOptions />
    </AdminPanel>
  );
}
