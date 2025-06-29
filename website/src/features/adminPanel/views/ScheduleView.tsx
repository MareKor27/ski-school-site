import { BlankLayout } from "~/features/app/layouts/BlankLayout";
import { AdminPanel } from "../components/AdminPanel/AdminPanel";
import { Schedule } from "../components/Schedule/Schedule";
import { SideBarMenu } from "../components/SideBarMenu/SideBarMenu";

import { Outlet } from "react-router-dom";

// type ScheduleViewType = {
//   children: ReactNode;
// };

export function ScheduleView() {
  //{ children }: ScheduleViewType
  return (
    <BlankLayout>
      <AdminPanel>
        <SideBarMenu />
        <Schedule>
          <Outlet />
        </Schedule>
      </AdminPanel>
    </BlankLayout>
  );
}
