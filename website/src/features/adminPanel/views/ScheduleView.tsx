import { BlankLayout } from "~/features/app/layouts/BlankLayout";
import { AdminPanel } from "../components/AdminPanel/AdminPanel";
import { Schedule } from "../components/Schedule/Schedule";
import { SideBarMenu } from "../components/SideBarMenu/SideBarMenu";
import { ReactNode } from "react";

type ScheduleViewType = {
  children: ReactNode;
};

export function ScheduleView({ children }: ScheduleViewType) {
  return (
    <BlankLayout>
      <AdminPanel>
        <SideBarMenu />
        <Schedule>{children}</Schedule>
      </AdminPanel>
    </BlankLayout>
  );
}
