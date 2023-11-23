import "./App.css";
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

function App() {
  return (
    <>
      <PageContainer>
        <Navbar />
        <Main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/o-nas" element={<AboutUs />} />
            <Route path="/cennik" element={<PriceList />} />
            <Route path="/galeria" element={<Photos />} />
            <Route path="/kontakt" element={<Contact />} />
          </Routes>
        </Main>
        <Footer />
      </PageContainer>
    </>
  );
}

export default App;
