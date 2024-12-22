import { BlankLayout } from "~/features/app/layouts/BlankLayout";
import { LoginView } from "~/features/authorization/views/LoginView";
export function Login() {
  return (
    <BlankLayout>
      <LoginView />
    </BlankLayout>
  );
}
