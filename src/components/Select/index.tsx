import React, { useState, useEffect, useMemo, useRef } from "react";
import dayjs from "src/shared/utils/dayjs";
import Button from "../Button";
import CalendarCheckOutlinedIcon from "../icons/CalendarCheckOutlinedIcon";
import ChevronDownIcon from "../icons/ChevronDownIcon";

import "./Select.scss";

export type OptionValue =
  | string
  | number
  | boolean
  | string[]
  | number[]
  | boolean[];

interface SelectProps {
  containerClass?: string;
  value: OptionValue;
  onChange: (val: OptionValue) => void;
  options: { label: string; value: OptionValue }[];
  placeholder?: string;
  disabled?: boolean;
  multi?: boolean;
}

const Select = ({
  containerClass = "",
  value,
  onChange,
  placeholder = "Pilih...",
  options = [],
  disabled = false,
  multi = false,
}: SelectProps) => {
  const [shouldOpenDropdown, setShouldOpenDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (shouldOpenDropdown && dropdownRef.current) {
      dropdownRef.current.focus();
    }
  }, [shouldOpenDropdown]);

  const selectedLabel = useMemo(
    () => options.find((opt) => opt.value === value)?.label,
    [value]
  );

  return (
    <div
      className={`container ${containerClass} relative h-[35px] ${
        disabled ? "pointer-events-none" : ""
      }`}
      tabIndex={0}
    >
      <div className="flex justify-between gap-x-2 items-center px-3 h-full rounded-md border border-gray-400 bg-white">
        <input
          readOnly
          className="w-full h-full outline-none cursor-pointer"
          onClick={() => setShouldOpenDropdown(true)}
          placeholder={placeholder}
          value={selectedLabel}
        />
        <ChevronDownIcon size={8} />
      </div>
      {shouldOpenDropdown && (
        <div
          ref={dropdownRef}
          className="options absolute top-[calc(100%+8px)] py-3 rounded-md w-full bg-white z-20"
          tabIndex={0}
          onBlur={() => setShouldOpenDropdown(false)}
        >
          {options.map((opt, key) => {
            const isSelected = opt.value === value;

            return (
              <div
                key={key}
                role="button"
                onClick={() => onChange(opt.value)}
                className="flex items-center px-3 py-1 gap-x-[6px] hover:bg-gray-100"
              >
                <span className={`${isSelected ? "font-semibold" : ""}`}>
                  {opt.label}
                </span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Select;
