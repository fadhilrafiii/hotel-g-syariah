export enum ModuleEnum {
  FO = "fo",
  Banquet = "banquet",
  Restaurant = "restaurant",
  HouseKeeping = "house-keeping",
  Management = "management",
}

export interface Module {
  name: string;
  path: ModuleEnum;
}
