import cookies from "js-cookie";
import { Navigate } from "react-router-dom";
import { Role } from "src/shared/types/roles";

interface RouteProps {
  Component: JSX.Element;
  userRole: Role;
}

const PublicRoute = ({ Component, userRole }: RouteProps) => {
  // Check if login then redirect to its dashboard;
  const isAuthenticated = cookies.get("token");
  const roleBasePath = "/" + userRole.toLowerCase();

  if (isAuthenticated) return <Navigate to={roleBasePath} />;

  return Component;
};

export default PublicRoute;
