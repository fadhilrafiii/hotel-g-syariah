export enum Roles {
  FO = "FO",
  CS = "CS",
  Manager = "Manager",
  Admin = "Admin",
}

export type Role = Roles.FO | Roles.CS | Roles.Manager | Roles.Admin;
