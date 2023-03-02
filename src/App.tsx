import { ApolloProvider } from "@apollo/client";
import { lazy, Suspense } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import client from "./clients";
import LoadingComponent from "./components/Loading";
import Snackbar from "./components/Snackbar";
import { SnackbarProvider, useSnackbarContext } from "./context/snackbar";
import RBACRouter, { RouteEnum } from "./router";
import { Roles } from "./shared/types/roles";

const LoginPage = lazy(() => import("src/pages/Login"));

// Front Office
const FrontOfficeDashboard = lazy(
  () => import("src/pages/FrontOffice/Dashboard")
);
const FrontOfficeKamarPage = lazy(() => import("src/pages/FrontOffice/Kamar"));

// House Keeping
const HouseKeepingDashboard = lazy(
  () => import("src/pages/HouseKeeping/Dashboard")
);
const HouseKeepingKamarPage = lazy(
  () => import("src/pages/HouseKeeping/StatusKamar")
);

const NotFoundPage = lazy(() => import("src/pages/NotFound"));

const App = () => {
  const snackbarCtx = useSnackbarContext();

  return (
    <Suspense fallback={<LoadingComponent />}>
      <div className="min-w-[1200px]">
        <SnackbarProvider value={snackbarCtx}>
          <ApolloProvider client={client}>
            <Snackbar />
            <BrowserRouter>
              <Routes>
                <Route path="*" element={<NotFoundPage />} />
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
                <Route path="/house-keeping">
                  <Route
                    index
                    element={
                      <RBACRouter
                        type={RouteEnum.Private}
                        userRole={Roles.Admin}
                        Component={<HouseKeepingDashboard />}
                      />
                    }
                  />
                  <Route
                    path="status-kamar"
                    element={
                      <RBACRouter
                        type={RouteEnum.Private}
                        userRole={Roles.Admin}
                        Component={<HouseKeepingKamarPage />}
                      />
                    }
                  />
                </Route>
              </Routes>
            </BrowserRouter>
          </ApolloProvider>
        </SnackbarProvider>
      </div>
    </Suspense>
  );
};

export default App;
