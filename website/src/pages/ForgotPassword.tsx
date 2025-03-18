import { BlankLayout } from "~/features/app/layouts/BlankLayout";
import { ForgotPasswordView } from "~/features/authorization/views/ForgotPasswordView";

export function ForgotPassword() {
  return (
    <BlankLayout>
      <ForgotPasswordView />
    </BlankLayout>
  );
}
