import React, { useState, useEffect, useMemo, useRef } from "react";
import dayjs from "src/shared/utils/dayjs";
import Button from "../Button";
import CalendarCheckOutlinedIcon from "../icons/CalendarCheckOutlinedIcon";
import ChevronDownIcon from "../icons/ChevronDownIcon";

import "./TimeDropdown.scss";

const TIME_FORMAT = "YYYY-MM-DD HH:mm:ss";
const NOW = dayjs().endOf("day").format(TIME_FORMAT);

const options = [
  {
    label: "Hari ini",
    value: `${dayjs().startOf("day").format(TIME_FORMAT)}-${NOW}`,
  },
  {
    label: "7 Hari Terakhir",
    value: `${dayjs()
      .subtract(1, "week")
      .startOf("day")
      .format(TIME_FORMAT)}-${NOW}`,
  },
  {
    label: "1 Bulan Lalu",
    value: `${dayjs()
      .subtract(1, "month")
      .startOf("day")
      .format(TIME_FORMAT)}-${NOW}`,
  },
  {
    label: "12 Bulan Lalu",
    value: `${dayjs()
      .subtract(1, "year")
      .startOf("day")
      .format(TIME_FORMAT)}-${NOW}`,
  },
];

interface TimeDropdownProps {
  containerClass?: string;
  onChange: (value: string) => void;
}

const TimeDropdown = ({ containerClass = "", onChange }: TimeDropdownProps) => {
  const [selectedTime, setSelectedTime] = useState(options[0].value);
  const [shouldOpenDropdown, setShouldOpenDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    onChange(selectedTime);
  }, [selectedTime]);

  const selectedLabel = useMemo(
    () => options.find((opt) => opt.value === selectedTime)?.label,
    [selectedTime]
  );

  useEffect(() => {
    if (shouldOpenDropdown && dropdownRef.current) {
      dropdownRef.current.focus();
    }
  }, [shouldOpenDropdown]);

  return (
    <div className={`container ${containerClass} relative`}>
      <Button
        className="w-full"
        variant={Button.Variant.Filled}
        theme={Button.Theme.Secondary}
        startIcon={<CalendarCheckOutlinedIcon size={20} />}
        endIcon={<ChevronDownIcon size={8} />}
        onClick={() => setShouldOpenDropdown((prev) => !prev)}
      >
        {selectedLabel}
      </Button>
      {shouldOpenDropdown && (
        <div
          ref={dropdownRef}
          className="options absolute top-[calc(100%+8px)] py-3 rounded-md w-full bg-white"
          tabIndex={0}
          onBlur={() => setShouldOpenDropdown(false)}
        >
          {options.map((opt, key) => {
            const isSelected = opt.value === selectedTime;

            return (
              <div
                key={key}
                role="button"
                onClick={() => setSelectedTime(opt.value)}
                className="flex items-center px-3 py-1 gap-x-[6px]"
              >
                <span className={`${isSelected ? "opacity-100" : "opacity-0"}`}>
                  &#10004;
                </span>
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

export default TimeDropdown;
