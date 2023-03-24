import React from "react";
import ReactDatePicker, { ReactDatePickerProps } from "react-datepicker";
import { Dayjs } from "dayjs";

import ChevronDownIcon from "../icons/ChevronDownIcon";

import dayjs from "src/shared/utils/dayjs";

import "react-datepicker/dist/react-datepicker.css";
import "./DatePicker.scss";

interface DatePickerProps
  extends Omit<
    ReactDatePickerProps,
    "selected" | "onChange" | "minDate" | "maxDate"
  > {
  selected?: Dayjs | null;
  onChange: (date: Dayjs | null) => void;
  minDate?: Dayjs | null;
  maxDate?: Dayjs | null;
}

const DatePicker = ({
  selected,
  onChange,
  minDate,
  maxDate,
  ...props
}: DatePickerProps) => {
  const handleChangeDate = (date: Date | null) => {
    onChange(dayjs(date));
  };

  return (
    <div className="relative flex items-center justify-between h-[35px] py-2 pr-3 rounded-md border border-gray-400">
      <ReactDatePicker
        placeholderText="Select Date..."
        {...props}
        popperPlacement="bottom-start"
        popperModifiers={[
          {
            name: "offset",
            options: {
              offset: [null, 8],
            },
          },
        ]}
        selected={selected?.toDate()}
        onChange={handleChangeDate}
        minDate={minDate?.toDate()}
        maxDate={maxDate?.toDate()}
        wrapperClassName="datepicker-wrapper"
        dateFormat={props.dateFormat || "dd-MM-yyyy"}
      />
      <ChevronDownIcon size={7} />
    </div>
  );
};

export default DatePicker;
