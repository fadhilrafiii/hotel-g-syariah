import { useLocation } from "react-router-dom";
import { MODULES } from "src/shared/constants/modules";
import { RBAC } from "src/shared/constants/roles";
import Colors from "src/shared/types/color";
import { Module } from "src/shared/types/module";
import { Roles } from "src/shared/types/roles";
import AccountFilledIcon from "../icons/AccountFilledIcon";
import LockFilledIcon from "../icons/LockFilledIcon";
import NotificationFilledIcon from "../icons/NotificationFilledIcon";

const Navbar = () => {
  const { pathname } = useLocation();

  // TO DO: Remove dummy admin
  const { role = Roles.Admin } = JSON.parse(
    localStorage.getItem("user") || "{}"
  );

  return (
    <header className="flex justify-between items-center gap-x-2 p-6 fixed top-0 left-0 right-0 h-[75px] bg-white">
      <h3 className="text-2xl font-semibold text-green-600">G Syariah Hotel</h3>
      <div className="flex justify-center items-center gap-x-9">
        {MODULES.map((mod: Module) => {
          const isLocked = !RBAC[mod.path].includes(role);
          const isOpen = pathname.split("/")[1] === mod.path;

          return (
            <a
              key={mod.path}
              className={`flex items-center justify-center gap-x-2 ${
                isLocked ? "pointer-events-none" : ""
              }`}
              href={"/" + mod.path}
            >
              {isLocked && <LockFilledIcon color={Colors.Gray300} size={21} />}
              <span
                className={`text-lg font-primary ${
                  isLocked ? "text-gray-300" : "text-gray-600"
                } ${isOpen ? "border-b" : ""} border-gray-700`}
              >
                {mod.name}
              </span>
            </a>
          );
        })}
      </div>
      <div className="flex justify-end gap-x-4">
        <NotificationFilledIcon size={30} />
        <AccountFilledIcon size={30} />
      </div>
    </header>
  );
};

export default Navbar;
