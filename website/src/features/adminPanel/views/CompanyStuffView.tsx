import { BlankLayout } from "~/features/app/layouts/BlankLayout";
import { AdminPanel } from "../components/AdminPanel/AdminPanel";
import { CompanyStuff } from "../components/CompanyStuff/CompanyStuff";
import { SideBarMenu } from "../components/SideBarMenu/SideBarMenu";
import { ReactNode } from "react";

type CompanyStuffViewType = {
  children: ReactNode;
};

export function CompanyStuffView({ children }: CompanyStuffViewType) {
  return (
    <BlankLayout>
      <AdminPanel>
        <SideBarMenu />
        <CompanyStuff>{children}</CompanyStuff>
      </AdminPanel>
    </BlankLayout>
  );
}
