import { DefaultLayout } from "~/features/app/layouts/DefaultLayout";
import { HomeView } from "~/features/guest/views/HomeView";

export function Home() {
  return (
    <DefaultLayout>
      <HomeView />
    </DefaultLayout>
  );
}
