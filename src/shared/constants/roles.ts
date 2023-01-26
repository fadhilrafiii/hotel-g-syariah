import { Role, Roles } from "src/shared/types/roles";

export const DEFAULT_ROUTE_BY_ROLE: Record<Roles, string> = {
  [Roles.Admin]: "/fo",
  [Roles.FO]: "/fo",
  [Roles.Manager]: "/fo",
  [Roles.CS]: "/fo",
};

export const RBAC: Record<string, Role[]> = {
  fo: [Roles.FO, Roles.Admin],
};
