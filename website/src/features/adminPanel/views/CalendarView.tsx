import { AdminPanel } from "../components/AdminPanel/AdminPanel";
import { Schedule } from "../components/Schedule/Schedule";
import { SideBarMenu } from "../components/SideBarMenu/SideBarMenu";

export function CalendarView() {
  return (
    <AdminPanel>
      <SideBarMenu />
      <Schedule />
    </AdminPanel>
  );
}
