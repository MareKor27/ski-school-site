import { DefaultLayout } from "~/features/app/layouts/DefaultLayout";
import PageNotFoundView from "~/features/guest/views/main/PageNotFoundView";

const PageNotFound = () => {
  return (
    <DefaultLayout>
      <PageNotFoundView />
    </DefaultLayout>
  );
};

export default PageNotFound;
