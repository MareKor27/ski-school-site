import { DefaultLayout } from "~/features/app/layouts/DefaultLayout";
import { ContactView } from "~/features/guest/views/ContactView";

export function Contact() {
  return (
    <DefaultLayout>
      <ContactView />
    </DefaultLayout>
  );
}
