import React from "react";
import Colors from "src/shared/types/color";

interface StatusTagProps {
  tagColor: Colors;
  label: string;
}

const StatusTag = ({ tagColor, label }: StatusTagProps) => {
  return (
    <span className="flex items-center gap-x-[6px] px-2 py-[6px] rounded-[6px] bg-blue-50">
      <span style={{ backgroundColor: tagColor }} className="h-5 w-3 rounded-[2px]" />
      <span className="text-gray-600 text-sm">{label}</span>
    </span>
  );
};

export default StatusTag;
