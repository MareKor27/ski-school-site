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
import { AdminCalendar } from "./pages/AdminCalendar";
import { AdminDashboard } from "./pages/AdminDashboard";
import { AdminOption } from "./pages/AdminOption";
import { AdminCompanyStuff } from "./pages/AdminCompanyStuff";
import { Paths } from "./features/app/constants/Paths";

function App() {
  return (
    <GlobalConfig>
      <Routes>
        <Route index element={<Home />} />
        <Route path={Paths.ABOUT_US.absolute} element={<AboutUs />} />
        <Route path={Paths.PRICE_LIST.absolute} element={<PriceList />} />
        <Route path={Paths.GALLERY.absolute} element={<Photos />} />
        <Route path={Paths.CONTACT.absolute} element={<Contact />} />
        <Route path={Paths.ADMIN.INDEX.routerConfig}>
          <Route index element={<AdminDashboard />} />
          <Route path={Paths.ADMIN.LOGIN.absolute} element={<Login />} />
          <Route
            path={Paths.ADMIN.CALENDAR.absolute}
            element={<AdminCalendar />}
          />
          <Route path={Paths.ADMIN.OPTION.absolute} element={<AdminOption />} />
          <Route
            path={Paths.ADMIN.STUFF.absolute}
            element={<AdminCompanyStuff />}
          />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </GlobalConfig>
  );
}

export default App;
