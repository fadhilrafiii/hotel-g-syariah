import { lazy, Suspense } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import RBACRouter, { RouteEnum } from "./router";
import { Roles } from "./shared/types/roles";

const LoginPage = lazy(() => import("src/pages/Login"));

// Front Office
const FrontOfficeDashboard = lazy(
  () => import("src/pages/FrontOffice/Dashboard")
);
const FrontOfficeKamarPage = lazy(() => import("src/pages/FrontOffice/Kamar"));

const App = () => {
  console.log("test");
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route
            path="/login"
            element={
              <RBACRouter
                type={RouteEnum.Public}
                userRole={Roles.Admin}
                Component={<LoginPage />}
              />
            }
          />
          <Route path="/fo">
            <Route
              index
              element={
                <RBACRouter
                  type={RouteEnum.Private}
                  userRole={Roles.Admin}
                  Component={<FrontOfficeDashboard />}
                />
              }
            />
            <Route
              path="kamar"
              element={
                <RBACRouter
                  type={RouteEnum.Private}
                  userRole={Roles.Admin}
                  Component={<FrontOfficeKamarPage />}
                />
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
};

export default App;
