import { AdminPanel } from "../components/AdminPanel/AdminPanel";
import { CompanyStuff } from "../components/CompanyStuff/CompanyStuff";
import { SideBarMenu } from "../components/SideBarMenu/SideBarMenu";

export function CompanyStuffView() {
  return (
    <AdminPanel>
      <SideBarMenu />
      <CompanyStuff />
    </AdminPanel>
  );
}
