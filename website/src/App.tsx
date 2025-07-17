import "./App.scss";
import { Routes, Route, Navigate } from "react-router-dom";
import { Home } from "./pages/Home";
import { AboutUs } from "./pages/AboutUs";
import { PriceList } from "./pages/PriceList";
import { Photos } from "./pages/Photos";
import { Contact } from "./pages/Contact";
import GlobalConfig from "./configs/GlobalConfig";
import PageNotFound from "./pages/PageNotFound";
import { Paths } from "./features/app/constants/Paths";
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
import { OptionView } from "./features/adminPanel/views/OptionView";
import { Option1 } from "./features/adminPanel/components/PanelOptions/Option1";
import { Option2 } from "./features/adminPanel/components/PanelOptions/Option2";
import { Option3 } from "./features/adminPanel/components/PanelOptions/Option3";
import { DashboardView } from "./features/adminPanel/views/DashboardView";
import { CalendarAddReservationView } from "./features/adminPanel/views/CalendarAddReservationView";
import { SummaryReservationView } from "./features/adminPanel/views/SummaryReservationView";
import { VerificationReservationView } from "./features/adminPanel/views/ReservationVerification";
import { useEnvironmentStore } from "./features/environment/environmentStore";

function App() {
  const isLoaded = useEnvironmentStore((state) => state.isLoaded);

  if (!isLoaded) {
    return <div>Ładowanie konfiguracji...</div>;
  }

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
          <Route index element={<DashboardView />} />
          <Route path={Paths.ADMIN.SCHEDULE.INDEX.routerConfig}>
            <Route
              index
              element={
                <Navigate
                  to={Paths.ADMIN.SCHEDULE.CALENDAR.routerConfig}
                  replace
                />
              }
            />

            <Route element={<ScheduleView />}>
              <Route
                path={Paths.ADMIN.SCHEDULE.CALENDAR.routerConfig}
                element={<CalendarTable />}
              />
              <Route
                path={Paths.ADMIN.SCHEDULE.RESERVATION.routerConfig}
                element={<ReservationTable />}
              />
              <Route
                path={Paths.ADMIN.SCHEDULE.TIMETABLE.routerConfig}
                element={<AppointmentTable />}
              />
            </Route>
          </Route>

          <Route
            path={Paths.ADMIN.CALENDAR_ADD_RESERVATION.absolute}
            element={<CalendarAddReservationView />}
          />
          <Route
            path={Paths.ADMIN.RESERVATION_SUMMARY.absolute}
            element={<SummaryReservationView />}
          />
          <Route
            path={Paths.ADMIN.RESERVATION_VERIFICATION.absolute}
            element={<VerificationReservationView />}
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
          <Route path={Paths.ADMIN.OPTION.INDEX.routerConfig}>
            <Route
              index
              element={
                <Navigate
                  to={Paths.ADMIN.OPTION.OPTION_ONE.routerConfig}
                  replace
                />
              }
            />
            <Route
              path={Paths.ADMIN.OPTION.OPTION_ONE.routerConfig}
              element={
                <OptionView>
                  <Option1 />
                </OptionView>
              }
            />
            <Route
              path={Paths.ADMIN.OPTION.OPTION_TWO.routerConfig}
              element={
                <OptionView>
                  <Option2 />
                </OptionView>
              }
            />
            <Route
              path={Paths.ADMIN.OPTION.OPTION_THREE.routerConfig}
              element={
                <OptionView>
                  <Option3 />
                </OptionView>
              }
            />
          </Route>
        </Route>

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </GlobalConfig>
  );
}

export default App;
