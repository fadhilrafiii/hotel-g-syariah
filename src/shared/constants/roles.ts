import { Role, Roles } from "src/shared/types/roles";
import { ModuleEnum } from "../types/module";

export const DEFAULT_ROUTE_BY_ROLE: Record<Roles, string> = {
  [Roles.Admin]: "/fo",
  [Roles.FO]: "/fo",
  [Roles.Manager]: "/fo",
  [Roles.CS]: "/fo",
};

export const RBAC: Record<ModuleEnum, Role[]> = {
  [ModuleEnum.FO]: [Roles.FO, Roles.Admin],
  [ModuleEnum.Banquet]: [Roles.FO, Roles.Admin],
  [ModuleEnum.Restaurant]: [Roles.FO, Roles.Admin],
  [ModuleEnum.HouseKeeping]: [Roles.FO, Roles.Admin],
  [ModuleEnum.Management]: [Roles.FO],
};
