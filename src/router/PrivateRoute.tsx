import cookies from "js-cookie";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { RBAC } from "src/shared/constants/roles";
import { Role } from "src/shared/types/roles";

interface RouteProps {
  Component: JSX.Element;
  userRole: Role;
}

const PrivateRoute = ({ Component, userRole }: RouteProps) => {
  const { pathname } = useLocation();

  // Check if login then redirect to login page;
  const isAuthenticated = cookies.get("token");
  if (!isAuthenticated) return <Navigate to="/login" />;

  // Check whether the user is authorized
  const isAuthorized = RBAC[pathname].includes(userRole);

  return (
    <>
      {Component}
      <Outlet />
    </>
  );
};

export default PrivateRoute;
