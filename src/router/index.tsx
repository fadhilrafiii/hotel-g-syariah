import { Role } from "src/shared/types/roles";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

export enum RouteEnum {
  Private = "Private",
  Public = "Public",
}

interface RBACRouterProps {
  type: RouteEnum;
  userRole: Role;
  Component: JSX.Element;
}

const RBACRouter = ({ type, ...props }: RBACRouterProps) => {
  if (type === RouteEnum.Private) return <PrivateRoute {...props} />;

  return <PublicRoute {...props} />;
};

export default RBACRouter;
