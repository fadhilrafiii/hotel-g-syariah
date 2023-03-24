import React, { useState, useEffect } from "react";
import ChevronDownIcon from "../icons/ChevronDownIcon";

interface InputNumberProps {
  value: number;
  disabled?: boolean;
  includeNegative?: boolean;
  onChange: (val: number) => void;
}

const InputNumber = ({
  value,
  includeNegative = false,
  onChange,
  disabled = false,
}: InputNumberProps) => {
  const [num, setNum] = useState<number>(value);

  const handleAddNumber = () => setNum((prev) => prev + 1);
  const handleSubtractNumber = () => setNum((prev) => prev - 1);

  useEffect(() => {
    onChange(num);
  }, [num]);

  return (
    <div className="rounded-md flex overflow-hidden border border-gray-400 h-[35px]">
      <input
        readOnly
        value={value}
        className="flex-grow py-2 px-3 outline-none w-full"
      />
      <div className="flex flex-col divide-y-[1px]">
        <button
          className="flex-grow px-2 bg-gray-50 border-l border-gray-400"
          type="button"
          onClick={handleAddNumber}
          disabled={disabled}
        >
          <ChevronDownIcon size={6} className="rotate-180" />
        </button>
        <button
          className="flex-grow px-2 bg-gray-50 border-l border-gray-400"
          type="button"
          onClick={handleSubtractNumber}
          disabled={disabled || (!includeNegative && value <= 0)}
        >
          <ChevronDownIcon size={6} />
        </button>
      </div>
    </div>
  );
};

export default InputNumber;
