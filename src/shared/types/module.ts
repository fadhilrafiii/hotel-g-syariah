import { FC } from "react";
import IconProps from "src/components/icons/shared";

export enum ModuleEnum {
  FO = "fo",
  Banquet = "banquet",
  Restaurant = "restaurant",
  HouseKeeping = "house-keeping",
  Management = "management",
}

export enum SubmoduleEnum {
  FODashboard = "fo",
  FOKamar = "fo/kamar",
  FOPindahKamar = "fo/pindah-kamar",
  FOTambahTagihan = "fo/tambah-tagihan",
  FOLaporan = "fo/laporan",
}

export interface Submodule {
  name: string;
  path: SubmoduleEnum;
  Icon: FC<IconProps>;
}

export interface Module {
  name: string;
  path: ModuleEnum;
}
