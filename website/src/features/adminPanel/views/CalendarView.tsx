import { AdminPanel } from "../components/AdminPanel/AdminPanel";
import { Calendar } from "../components/Calendar/Calendar";
import { SideBarMenu } from "../components/SideBarMenu/SideBarMenu";

export function CalendarView() {
  return (
    <AdminPanel>
      <SideBarMenu />
      <Calendar />
    </AdminPanel>
  );
}
