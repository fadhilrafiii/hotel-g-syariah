import Cookies from "js-cookie";
import { Navigate } from "react-router-dom";
import { DEFAULT_ROUTE_BY_ROLE } from "src/shared/constants/roles";
import { Role } from "src/shared/types/roles";

interface RouteProps {
  Component: JSX.Element;
  userRole: Role;
}

const PublicRoute = ({ Component, userRole }: RouteProps) => {
  // Check if login then redirect to its dashboard;
  const isAuthenticated = Cookies.get("auth");
  const defaultRolePath = DEFAULT_ROUTE_BY_ROLE[userRole];

  if (isAuthenticated) return <Navigate to={defaultRolePath} />;

  return Component;
};

export default PublicRoute;
