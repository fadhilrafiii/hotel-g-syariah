import React, { ReactNode } from "react";
import CloseOutlinedIcon from "../icons/CloseOutlinedIcon";

export enum DrawerPosition {
  Top,
  Bottom,
  Left,
  Right,
}

import "./Drawer.scss";

interface DrawerProps {
  isOpen: boolean;
  children: ReactNode;
  position: DrawerPosition;
  onClose: () => void;
}

const getHideTransformationByPosition = (position: DrawerPosition) => {
  if (position === DrawerPosition.Top) return "translateY(-100vh)";
  if (position === DrawerPosition.Bottom) return "translateY(100vh)";
  if (position === DrawerPosition.Left) return "translateX(-200vw)";
  if (position === DrawerPosition.Right) return "translateX(200vw)";
  else return "unset";
};

const Drawer = ({ isOpen, children, position, onClose }: DrawerProps) => {
  return (
    <div
      className="fixed top-0 left-0 right-0 bottom-0 z-50 transition-all bg-gray-800 bg-opacity-60"
      style={{
        transform: isOpen
          ? "translate(0, 0)"
          : getHideTransformationByPosition(position),
      }}
    >
      <div
        style={{
          height: [DrawerPosition.Top, DrawerPosition.Bottom].includes(position)
            ? "85%"
            : "100%",
          width: [DrawerPosition.Left, DrawerPosition.Right].includes(position)
            ? "85%"
            : "100%",
          top: position === DrawerPosition.Top ? 0 : "unset",
          bottom: position === DrawerPosition.Bottom ? 0 : "unset",
          left: position === DrawerPosition.Left ? 0 : "unset",
          right: position === DrawerPosition.Right ? 0 : "unset",
        }}
        className="drawer-content absolute bg-white overflow-auto"
      >
        <button
          type="button"
          className="absolute top-5 right-7 text-red-600 text-5xl inline"
          onClick={onClose}
        >
          <CloseOutlinedIcon size={20} />
        </button>
        {children}
      </div>
    </div>
  );
};

Drawer.Position = DrawerPosition;

export default Drawer;
