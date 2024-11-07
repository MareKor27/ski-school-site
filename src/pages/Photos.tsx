import { DefaultLayout } from "~/features/app/layouts/DefaultLayout";
import { PhotosView } from "~/features/guest/views/PhotosView";

export function Photos() {
  return (
    <DefaultLayout>
      <PhotosView />
    </DefaultLayout>
  );
}
