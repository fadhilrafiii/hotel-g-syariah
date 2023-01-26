import { useQuery } from "@apollo/client";
import Cookies from "js-cookie";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { DEFAULT_ROUTE_BY_ROLE, RBAC } from "src/shared/constants/roles";
import { Role } from "src/shared/types/roles";

interface RouteProps {
  Component: JSX.Element;
  userRole: Role;
}

const PrivateRoute = ({ Component, userRole }: RouteProps) => {
  const { pathname } = useLocation();

  // Check if login then redirect to login page;
  const isAuthenticated = Cookies.get("auth");
  if (!isAuthenticated) return <Navigate to="/login" />;

  // Check whether the user is authorized
  const defaultRoleRoute = DEFAULT_ROUTE_BY_ROLE[userRole];
  const basePath = pathname.split("/")[1];
  const isAuthorized = RBAC[basePath].includes(userRole);
  if (!basePath || !isAuthorized) return <Navigate to={defaultRoleRoute} />;

  return (
    <>
      {Component}
      <Outlet />
    </>
  );
};

export default PrivateRoute;
