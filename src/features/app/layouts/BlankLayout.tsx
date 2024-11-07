import { ReactNode } from "react";
import ScrollToTop from "~/components/scrollToTop/ScrollToTop";
import { Main } from "~/components/app/Main";
import { PageContainer } from "~/components/app/PageContainer";

type BlankLayoutType = {
  children: ReactNode;
};

export function BlankLayout({ children }: BlankLayoutType) {
  return (
    <>
      <ScrollToTop />
      <PageContainer>
        <Main>{children}</Main>
      </PageContainer>
    </>
  );
}
