import { Paths } from "~/features/app/constants/Paths";
import { AdminPanel } from "../components/AdminPanel/AdminPanel";
import { CalendarAddReservation } from "../components/CalendarAddReservation.tsx/CalendarAddReservation";
import { SideBarMenu } from "../components/SideBarMenu/SideBarMenu";
import { BlankLayout } from "~/features/app/layouts/BlankLayout";

export function CalendarAddReservationView() {
  return (
    <BlankLayout>
      <AdminPanel>
        <SideBarMenu />
        <CalendarAddReservation
          getSummaryLink={Paths.ADMIN.RESERVATION_SUMMARY.absolute}
        />
      </AdminPanel>
    </BlankLayout>
  );
}
