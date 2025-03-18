import { BlankLayout } from "~/features/app/layouts/BlankLayout";
import { ChangePasswordView } from "~/features/authorization/views/ChangePasswordView";

export function ChangePassword() {
  return (
    <BlankLayout>
      <ChangePasswordView />
    </BlankLayout>
  );
}
