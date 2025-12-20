import { ReactNode } from "react";
import { SocialMedia } from "~/components/socialMedia/SocialMedia";
import { GoToTop } from "~/components/goToTop/GoToTop";
import { Navbar } from "~/components/app/Navbar";
import { Footer } from "~/components/app/Footer";
import ScrollToTop from "~/components/scrollToTop/ScrollToTop";
import { Main } from "~/components/app/Main";
import { PageContainer } from "~/components/app/PageContainer";
import { Background } from "~/features/app/types/FrontendTypes";

type DefaultLayoutType = {
  children: ReactNode;
  background?: Background;
};

export function DefaultLayout({ children, background }: DefaultLayoutType) {
  return (
    <>
      <ScrollToTop />
      <PageContainer background={background}>
        <Navbar />
        <SocialMedia />
        <GoToTop />
        <Main>{children}</Main>
        <Footer />
      </PageContainer>
    </>
  );
}
