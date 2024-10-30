import "./App.scss";
import { Navbar } from "./components/app/Navbar";
import { Footer } from "./components/app/Footer";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { AboutUs } from "./pages/AboutUs";
import { PriceList } from "./pages/PriceList";
import { Photos } from "./pages/Photos";
import { Contact } from "./pages/Contact";
import { Main } from "./components/app/Main";
import { PageContainer } from "./components/app/PageContainer";
import GlobalConfig from "./configs/GlobalConfig";
import PageNotFound from "./pages/PageNotFound";
import ScrollToTop from "./components/scrollToTop/ScrollToTop";
import { SocialMedia } from "./components/socialMedia/SocialMedia";
import { GoToTop } from "./components/goToTop/GoToTop";

function App() {
  return (
    <GlobalConfig>
      <ScrollToTop />
      <PageContainer>
        <Navbar />
        <SocialMedia />
        <GoToTop />
        <Main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/o-nas" element={<AboutUs />} />
            <Route path="/cennik" element={<PriceList />} />
            <Route path="/galeria" element={<Photos />} />
            <Route path="/kontakt" element={<Contact />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Main>
        <Footer />
      </PageContainer>
    </GlobalConfig>
  );
}

export default App;
