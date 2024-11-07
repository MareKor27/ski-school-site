import { DefaultLayout } from "~/features/app/layouts/DefaultLayout";
import { AboutUsView } from "~/features/guest/views/AboutUsView";

export function AboutUs() {
  return (
    <DefaultLayout>
      <AboutUsView />
    </DefaultLayout>
  );
}
