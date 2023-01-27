import { Module, ModuleEnum } from "../types/module";

export const MODULES: Module[] = [
  {
    name: "Front Office",
    path: ModuleEnum.FO,
  },
  {
    name: "Banquet",
    path: ModuleEnum.Banquet,
  },
  {
    name: "Restoran",
    path: ModuleEnum.Restaurant,
  },
  {
    name: "House Keeping",
    path: ModuleEnum.HouseKeeping,
  },
  {
    name: "Management",
    path: ModuleEnum.Management,
  },
];
