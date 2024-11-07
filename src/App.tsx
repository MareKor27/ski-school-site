import "./App.scss";

import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { AboutUs } from "./pages/AboutUs";
import { PriceList } from "./pages/PriceList";
import { Photos } from "./pages/Photos";
import { Contact } from "./pages/Contact";
import GlobalConfig from "./configs/GlobalConfig";
import PageNotFound from "./pages/PageNotFound";
import { Login } from "./pages/Login";

function App() {
  return (
    <GlobalConfig>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/o-nas" element={<AboutUs />} />
        <Route path="/cennik" element={<PriceList />} />
        <Route path="/galeria" element={<Photos />} />
        <Route path="/kontakt" element={<Contact />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="/administrator/login" element={<Login />} />
      </Routes>
    </GlobalConfig>
  );
}

export default App;
