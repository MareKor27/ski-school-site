import { DefaultLayout } from "~/features/app/layouts/DefaultLayout";
import { HomeView } from "~/features/guest/views/main/HomeView";

export function Home() {
  return (
    <DefaultLayout>
      <HomeView />
    </DefaultLayout>
  );
}
