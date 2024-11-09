import { DashboardView } from "~/features/adminPanel/views/DashboardView";
import { BlankLayout } from "~/features/app/layouts/BlankLayout";

export function AdminDashboard() {
  return (
    <BlankLayout>
      <DashboardView />
    </BlankLayout>
  );
}
