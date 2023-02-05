import React from "react";
import { useLocation } from "react-router-dom";
import { SUB_MODULES } from "src/shared/constants/modules";
import Colors from "src/shared/types/color";
import { ModuleEnum, Submodule, SubmoduleEnum } from "src/shared/types/module";
import { Role } from "src/shared/types/roles";
import DashboardFilledIcon from "../icons/DashboardFilledIcon";

const MenuItem = () => {};

const Sidebar = React.memo(() => {
  const { pathname } = useLocation();
  const module = pathname.split("/")[1] as ModuleEnum;

  const currentSubmodule = pathname.slice(1) as SubmoduleEnum;

  const menuList = SUB_MODULES[module] || [];

  return (
    <div className="w-[236px] py-7 px-3 rounded-r-[32px] bg-blue-50 h-full flex flex-col gap-y-3">
      {menuList.map(({ name, path, Icon }: Submodule) => {
        const isOpened = currentSubmodule === path;
        return (
          <a
            key={path}
            className={`flex items-center gap-x-2 p-3 rounded-xl ${
              isOpened ? "bg-green-600" : "bg-transparent"
            }`}
            href={"/" + path}
          >
            <Icon size={15} color={isOpened ? Colors.White : Colors.Gray700} />
            <span
              className={`text-base font-semibold ${
                isOpened ? "text-white" : "text-gray-700"
              }`}
            >
              {name}
            </span>
          </a>
        );
      })}
    </div>
  );
});

export default Sidebar;
