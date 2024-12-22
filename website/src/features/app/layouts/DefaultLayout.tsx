import { ReactNode } from "react";
import { SocialMedia } from "~/components/socialMedia/SocialMedia";
import { GoToTop } from "~/components/goToTop/GoToTop";
import { Navbar } from "~/components/app/Navbar";
import { Footer } from "~/components/app/Footer";
import ScrollToTop from "~/components/scrollToTop/ScrollToTop";
import { Main } from "~/components/app/Main";
import { PageContainer } from "~/components/app/PageContainer";

type DefaultLayoutType = {
  children: ReactNode;
};

export function DefaultLayout({ children }: DefaultLayoutType) {
  return (
    <>
      <ScrollToTop />
      <PageContainer>
        <Navbar />
        <SocialMedia />
        <GoToTop />
        <Main>{children}</Main>
        <Footer />
      </PageContainer>
    </>
  );
}
