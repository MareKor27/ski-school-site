import { Loading } from "~/features/app/components/loading/Loading";
import { BlankLayout } from "~/features/app/layouts/BlankLayout";

export function LoadingPage() {
  return (
    <BlankLayout>
      <Loading />
    </BlankLayout>
  );
}
