import { Role, Roles } from "src/shared/types/roles";

export const RBAC: Record<string, Role[]> = {
  "/fo/dashboard": [Roles.FO, Roles.Admin],
};
