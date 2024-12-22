import { AdminPanel } from "../components/AdminPanel/AdminPanel";
import { Dashboard } from "../components/Dashboard/Dashboard";
import { SideBarMenu } from "../components/SideBarMenu/SideBarMenu";

export function DashboardView() {
  return (
    <AdminPanel>
      <SideBarMenu />
      <Dashboard />
    </AdminPanel>
  );
}
