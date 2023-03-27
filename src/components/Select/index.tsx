import React, {
  useState,
  useEffect,
  useMemo,
  useRef,
  ChangeEvent,
} from "react";
import Colors from "src/shared/types/color";
import dayjs from "src/shared/utils/dayjs";
import Button from "../Button";
import CalendarCheckOutlinedIcon from "../icons/CalendarCheckOutlinedIcon";
import ChevronDownIcon from "../icons/ChevronDownIcon";
import SearchOutlinedIcon from "../icons/SearchOutlinedIcon";

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
  required?: boolean;
  withSearch?: boolean;
  onSearch?: (val: string) => void;
}

const Select = ({
  containerClass = "",
  value,
  onChange,
  placeholder = "Select...",
  options = [],
  required = false,
  disabled = false,
  withSearch = false,
  onSearch = () => null,
}: SelectProps) => {
  const [shouldOpenDropdown, setShouldOpenDropdown] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleClickSelect = () => {
    if (!withSearch) setShouldOpenDropdown(true);
  };

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    onSearch(e.target.value);

    if (!shouldOpenDropdown) setShouldOpenDropdown(true);
  };

  const handleBlur = () => {
    if (withSearch) setShouldOpenDropdown(false);
  };

  useEffect(() => {
    if (shouldOpenDropdown && dropdownRef.current && !withSearch) {
      dropdownRef.current.focus();
    }
  }, [shouldOpenDropdown, withSearch, dropdownRef]);

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
        {withSearch && <SearchOutlinedIcon size={21} color={Colors.Gray600} />}
        <input
          ref={inputRef}
          readOnly={!withSearch}
          className={`w-full h-full outline-none ${
            !withSearch ? "cursor-pointer" : ""
          }`}
          onClick={handleClickSelect}
          onBlur={handleBlur}
          onChange={handleSearch}
          placeholder={placeholder}
          value={selectedLabel}
          required={required}
        />
        <ChevronDownIcon size={8} />
      </div>
      {shouldOpenDropdown && (
        <div
          ref={dropdownRef}
          className="options absolute top-[calc(100%+8px)] py-3 rounded-md w-full bg-white z-20 outline-none"
          tabIndex={withSearch ? 1 : 0}
          onBlur={() => setShouldOpenDropdown(false)}
        >
          {options.length === 0 && (
            <div className="text-center text-gray-400">No data found!</div>
          )}
          {options.length > 0 &&
            options.map((opt, key) => {
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
