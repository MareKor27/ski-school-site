import "./App.scss";

import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { AboutUs } from "./pages/AboutUs";
import { PriceList } from "./pages/PriceList";
import { Photos } from "./pages/Photos";
import { Contact } from "./pages/Contact";
import GlobalConfig from "./configs/GlobalConfig";
import PageNotFound from "./pages/PageNotFound";
import { Paths } from "./features/app/constants/Paths";
import { AdminCalendarAddReservation } from "./pages/AdminCalendarAddReservation";
import { AdminDashboard } from "./pages/AdminDashboard";
import { AdminOption } from "./pages/AdminOption";
import { Login } from "./pages/Login";
import { ChangePassword } from "./pages/ChangePassword";
import { ForgotPassword } from "./pages/ForgotPassword";
import { ScheduleView } from "./features/adminPanel/views/ScheduleView";
import { CalendarTable } from "./features/adminPanel/components/Schedule/CalendarTable/CalendarTable";
import { AppointmentTable } from "./features/adminPanel/components/Schedule/AppointmentTable/AppointmentTable";
import { ReservationTable } from "./features/adminPanel/components/Schedule/ReservationsTable/ReservationTable";
import { CompanyStuffView } from "./features/adminPanel/views/CompanyStuffView";
import { UserManagement } from "./features/adminPanel/components/CompanyStuff/UserManagement/UserManagement";
import { UserCreateEditForm } from "./features/adminPanel/components/CompanyStuff/UserCreateEditForm/UserCreateEditForm";
import { AuthGuard } from "./features/app/guards/AuthGuard";

function App() {
  return (
    <GlobalConfig>
      <Routes>
        <Route index element={<Home />} />
        <Route path={Paths.ABOUT_US.absolute} element={<AboutUs />} />
        <Route path={Paths.PRICE_LIST.absolute} element={<PriceList />} />
        <Route path={Paths.GALLERY.absolute} element={<Photos />} />
        <Route path={Paths.CONTACT.absolute} element={<Contact />} />

        <Route path={Paths.ADMIN.LOGIN.absolute} element={<Login />} />
        <Route
          path={Paths.ADMIN.CHANGE_PASSWORD.absolute}
          element={<ChangePassword />}
        />
        <Route
          path={Paths.ADMIN.FORGOT_PASSWORD.absolute}
          element={<ForgotPassword />}
        />
        <Route path={Paths.ADMIN.INDEX.routerConfig} element={<AuthGuard />}>
          <Route index element={<AdminDashboard />} />
          <Route path={Paths.ADMIN.SCHEDULE.INDEX.routerConfig}>
            <Route
              path={Paths.ADMIN.SCHEDULE.CALENDAR.routerConfig}
              element={
                <ScheduleView>
                  <CalendarTable />
                </ScheduleView>
              }
            />
            <Route
              path={Paths.ADMIN.SCHEDULE.RESERVATION.routerConfig}
              element={
                <ScheduleView>
                  <ReservationTable />
                </ScheduleView>
              }
            />
            <Route
              path={Paths.ADMIN.SCHEDULE.TIMETABLE.routerConfig}
              element={
                <ScheduleView>
                  <AppointmentTable />
                </ScheduleView>
              }
            />
          </Route>

          <Route
            path={Paths.ADMIN.CALENDAR_ADD_RESERVATION.absolute}
            element={<AdminCalendarAddReservation />}
          />

          <Route path={Paths.ADMIN.STAFF.INDEX.routerConfig}>
            <Route
              index
              element={
                <CompanyStuffView>
                  <UserManagement />
                </CompanyStuffView>
              }
            />
            <Route
              path={Paths.ADMIN.STAFF.CREATE.routerConfig}
              element={
                <CompanyStuffView>
                  <UserCreateEditForm />
                </CompanyStuffView>
              }
            />
            <Route
              path={Paths.ADMIN.STAFF.EDIT.routerConfig}
              element={
                <CompanyStuffView>
                  <UserCreateEditForm />
                </CompanyStuffView>
              }
            />
          </Route>
          <Route path={Paths.ADMIN.OPTION.absolute} element={<AdminOption />} />
        </Route>

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </GlobalConfig>
  );
}

export default App;
