import { Paths } from "~/features/app/constants/Paths";
import { AdminPanel } from "../components/AdminPanel/AdminPanel";
import { CalendarAddReservation } from "../components/CalendarAddReservation.tsx/CalendarAddReservation";
import { SideBarMenu } from "../components/SideBarMenu/SideBarMenu";

export function CalendarAddReservationView() {
  return (
    <AdminPanel>
      <SideBarMenu />
      <CalendarAddReservation
        getSummaryLink={Paths.ADMIN.RESERVATION_SUMMARY.absolute}
      />
    </AdminPanel>
  );
}
