import AddSquareFilledIcon from "src/components/icons/AddSquareFilledIcon";
import BedFilledIcon from "src/components/icons/BedFilledIcon";
import DashboardFilledIcon from "src/components/icons/DashboardFilledIcon";
import SummaryFilledIcon from "src/components/icons/SummaryFilledIcon";
import SwapCircleFilledIcon from "src/components/icons/SwapCircleFilledIcon";
import { Module, ModuleEnum, Submodule, SubmoduleEnum } from "../types/module";

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

export const SUB_MODULES: Record<ModuleEnum, Submodule[]> = {
  [ModuleEnum.FO]: [
    {
      name: "Dashboard",
      path: SubmoduleEnum.FODashboard,
      Icon: DashboardFilledIcon,
    },
    {
      name: "Kamar",
      path: SubmoduleEnum.FOKamar,
      Icon: BedFilledIcon,
    },
    {
      name: "Pindah Kamar",
      path: SubmoduleEnum.FOPindahKamar,
      Icon: SwapCircleFilledIcon,
    },
    {
      name: "Tambah Tagihan",
      path: SubmoduleEnum.FOTambahTagihan,
      Icon: AddSquareFilledIcon,
    },
    {
      name: "Laporan",
      path: SubmoduleEnum.FOLaporan,
      Icon: SummaryFilledIcon,
    },
  ],
  [ModuleEnum.Banquet]: [
    {
      name: "Dashboard",
      path: SubmoduleEnum.FODashboard,
      Icon: DashboardFilledIcon,
    },
    {
      name: "Kamar",
      path: SubmoduleEnum.FOKamar,
      Icon: DashboardFilledIcon,
    },
    {
      name: "Pindah Kamar",
      path: SubmoduleEnum.FOPindahKamar,
      Icon: DashboardFilledIcon,
    },
    {
      name: "Tambah Tagihan",
      path: SubmoduleEnum.FOTambahTagihan,
      Icon: DashboardFilledIcon,
    },
    {
      name: "Laporan",
      path: SubmoduleEnum.FOLaporan,
      Icon: DashboardFilledIcon,
    },
  ],
  [ModuleEnum.Restaurant]: [
    {
      name: "Dashboard",
      path: SubmoduleEnum.FODashboard,
      Icon: DashboardFilledIcon,
    },
    {
      name: "Kamar",
      path: SubmoduleEnum.FOKamar,
      Icon: DashboardFilledIcon,
    },
    {
      name: "Pindah Kamar",
      path: SubmoduleEnum.FOPindahKamar,
      Icon: DashboardFilledIcon,
    },
    {
      name: "Tambah Tagihan",
      path: SubmoduleEnum.FOTambahTagihan,
      Icon: DashboardFilledIcon,
    },
    {
      name: "Laporan",
      path: SubmoduleEnum.FOLaporan,
      Icon: DashboardFilledIcon,
    },
  ],
  [ModuleEnum.HouseKeeping]: [
    {
      name: "Dashboard",
      path: SubmoduleEnum.FODashboard,
      Icon: DashboardFilledIcon,
    },
    {
      name: "Kamar",
      path: SubmoduleEnum.FOKamar,
      Icon: DashboardFilledIcon,
    },
    {
      name: "Pindah Kamar",
      path: SubmoduleEnum.FOPindahKamar,
      Icon: DashboardFilledIcon,
    },
    {
      name: "Tambah Tagihan",
      path: SubmoduleEnum.FOTambahTagihan,
      Icon: DashboardFilledIcon,
    },
    {
      name: "Laporan",
      path: SubmoduleEnum.FOLaporan,
      Icon: DashboardFilledIcon,
    },
  ],
  [ModuleEnum.Management]: [
    {
      name: "Dashboard",
      path: SubmoduleEnum.FODashboard,
      Icon: DashboardFilledIcon,
    },
    {
      name: "Kamar",
      path: SubmoduleEnum.FOKamar,
      Icon: DashboardFilledIcon,
    },
    {
      name: "Pindah Kamar",
      path: SubmoduleEnum.FOPindahKamar,
      Icon: DashboardFilledIcon,
    },
    {
      name: "Tambah Tagihan",
      path: SubmoduleEnum.FOTambahTagihan,
      Icon: DashboardFilledIcon,
    },
    {
      name: "Laporan",
      path: SubmoduleEnum.FOLaporan,
      Icon: DashboardFilledIcon,
    },
  ],
};
