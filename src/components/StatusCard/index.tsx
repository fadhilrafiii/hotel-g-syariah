import React, { FC, ReactNode } from "react";
import IconProps from "../icons/shared";

enum StatusCardColors {
  Green = "green",
  Fuchsia = "fuchsia",
  Blue = "blue",
  Amber = "amber",
}

interface StatusCardProps {
  color: StatusCardColors;
  text: string;
  Icon: FC<IconProps>;
  total: number;
}

const StatusCard = ({ color, text, Icon, total }: StatusCardProps) => {
  const bgColorClass = `bg-${color}-100`;
  const textColorClass = `text-${color}-800`;

  // For tailwind dynamic class
  // bg-green-100
  // text-green-800
  // bg-fuchsia-100
  // text-fuchsia-800
  // bg-blue-100
  // text-blue-800
  // bg-amber-100
  // text-amber-800

  return (
    <div
      className={`flex flex-col h-[144px] rounded-xl ${bgColorClass} justify-between min-w-[160px] pt-3 px-[14px]`}
    >
      <div
        style={{ wordSpacing: "100vw" }}
        className={`text-xl ${textColorClass} !leading-[1.2]`}
      >
        {text}
      </div>
      <div className="flex justify-between items-center">
        <Icon size={27} />
        <div
          className={`!leading-normal font-semibold text-5xl ${textColorClass}`}
        >
          {total}
        </div>
      </div>
    </div>
  );
};

StatusCard.Color = StatusCardColors;

export default StatusCard;
