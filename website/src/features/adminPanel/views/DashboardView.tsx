import { BlankLayout } from "~/features/app/layouts/BlankLayout";
import { AdminPanel } from "../components/AdminPanel/AdminPanel";
import { Dashboard } from "../components/Dashboard/Dashboard";
import { SideBarMenu } from "../components/SideBarMenu/SideBarMenu";

export function DashboardView() {
  return (
    <BlankLayout>
      <AdminPanel>
        <SideBarMenu />
        <Dashboard />
      </AdminPanel>
    </BlankLayout>
  );
}
