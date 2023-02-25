import React from "react";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { Dayjs } from "dayjs";

interface DatePickerProps {
  value: Dayjs | null;
  handleChange: (date: Dayjs | null) => void;
}

const DatePicker = ({ value, handleChange }: DatePickerProps) => {
  console.log("date", value);
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DesktopDatePicker
        inputFormat="DD MMM YYYY"
        value={value}
        className="!text-sm"
        onChange={handleChange}
        renderInput={(params) => {
          console.log(params);
          return <div />;
        }}
      />
    </LocalizationProvider>
  );
};

export default DatePicker;
