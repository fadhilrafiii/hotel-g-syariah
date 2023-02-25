import React from "react";
import { ReservationType } from "src/shared/types/reservation";

interface ReservationTypeTogglerProps {
  type: ReservationType;
  onToggle: () => void;
}

const ReservationTypeToggler = ({
  type,
  onToggle,
}: ReservationTypeTogglerProps) => {
  return (
    <div className="flex gap-x-[1px]">
      <button
        type="button"
        className={`${
          type === ReservationType.Individual
            ? "bg-blue-600 font-semibold"
            : "bg-blue-400"
        } rounded-l-md text-white text-sm py-[10px] px-3`}
        onClick={onToggle}
      >
        {ReservationType.Individual}
      </button>
      <button
        type="button"
        className={`${
          type === ReservationType.Group
            ? "bg-blue-600 font-semibold"
            : "bg-blue-400"
        } rounded-r-md text-white text-sm py-[10px] px-3`}
        onClick={onToggle}
      >
        {ReservationType.Group}
      </button>
    </div>
  );
};

export default ReservationTypeToggler;
