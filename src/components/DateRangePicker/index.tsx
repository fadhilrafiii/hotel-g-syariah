import React, { useMemo, useState } from "react";
import {
  createStaticRanges,
  DateRangePicker as ReactDateRangePicker,
  DateRangePickerProps as ReactDateRangePickerProps,
  Range,
  StaticRange,
} from "react-date-range";
import dayjs from "src/shared/utils/dayjs";

import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import Colors from "src/shared/types/color";
import CalendarOutlinedIcon from "../icons/CalendarOutlinedIcon";

export enum DateRangePickerPopperPosition {
  TopLeft,
  TopRight,
  TopCenter,
  BottomLeft,
  BottomRight,
  BottomCenter,
}

const staticRanges: StaticRange[] = createStaticRanges([
  {
    label: "This Week",
    range: () => ({
      startDate: dayjs().startOf("week").toDate(),
      endDate: dayjs().endOf("week").toDate(),
    }),
    isSelected(range: Range) {
      const definedRange: Range = this.range();

      return Boolean(
        dayjs(range.startDate).isSame(definedRange.startDate, "day") &&
          dayjs(range.endDate).isSame(definedRange.endDate, "day")
      );
    },
  },
  {
    label: "Last Week",
    range: () => ({
      startDate: dayjs().subtract(1, "week").startOf("week").toDate(),
      endDate: dayjs().subtract(1, "week").endOf("week").toDate(),
    }),
    isSelected(range: Range) {
      const definedRange: Range = this.range();

      return Boolean(
        dayjs(range.startDate).isSame(definedRange.startDate, "day") &&
          dayjs(range.endDate).isSame(definedRange.endDate, "day")
      );
    },
  },
  {
    label: "Next Week",
    range: () => ({
      startDate: dayjs().add(1, "week").startOf("week").toDate(),
      endDate: dayjs().add(1, "week").endOf("week").toDate(),
    }),
    isSelected(range: Range) {
      const definedRange: Range = this.range();

      return Boolean(
        dayjs(range.startDate).isSame(definedRange.startDate, "day") &&
          dayjs(range.endDate).isSame(definedRange.endDate, "day")
      );
    },
  },
  {
    label: "Last 2 Week",
    range: () => ({
      startDate: dayjs().subtract(2, "week").startOf("week").toDate(),
      endDate: dayjs().subtract(2, "week").endOf("week").toDate(),
    }),
    isSelected(range: Range) {
      const definedRange: Range = this.range();

      return Boolean(
        dayjs(range.startDate).isSame(definedRange.startDate, "day") &&
          dayjs(range.endDate).isSame(definedRange.endDate, "day")
      );
    },
  },
  {
    label: "Next 2 Week",
    range: () => ({
      startDate: dayjs().add(2, "week").startOf("week").toDate(),
      endDate: dayjs().add(2, "week").endOf("week").toDate(),
    }),
    isSelected(range: Range) {
      const definedRange: Range = this.range();

      return Boolean(
        dayjs(range.startDate).isSame(definedRange.startDate, "day") &&
          dayjs(range.endDate).isSame(definedRange.endDate, "day")
      );
    },
  },
  {
    label: "Start of This Month",
    range: () => ({
      startDate: dayjs().startOf("month").toDate(),
      endDate: dayjs().startOf("month").add(6, "days").toDate(),
    }),
    isSelected(range: Range) {
      const definedRange: Range = this.range();

      return Boolean(
        dayjs(range.startDate).isSame(definedRange.startDate, "day") &&
          dayjs(range.endDate).isSame(definedRange.endDate, "day")
      );
    },
  },
  {
    label: "End of This Month",
    range: () => ({
      startDate: dayjs().endOf("month").subtract(6, "days").toDate(),
      endDate: dayjs().endOf("month").toDate(),
    }),
    isSelected(range: Range) {
      const definedRange: Range = this.range();

      return Boolean(
        dayjs(range.startDate).isSame(definedRange.startDate, "day") &&
          dayjs(range.endDate).isSame(definedRange.endDate, "day")
      );
    },
  },
]);

interface DateRangePickerProps extends ReactDateRangePickerProps {
  position?: DateRangePickerPopperPosition;
}

const DateRangePicker = ({
  ranges,
  position = DateRangePickerPopperPosition.BottomLeft,
  ...props
}: DateRangePickerProps) => {
  const [shouldShowCalendar, setShouldShowCalendar] = useState(false);

  const startDate = ranges
    ? dayjs(ranges[0].startDate).format("MMM D, YYYY")
    : "Invalid Date";
  const endDate = ranges
    ? dayjs(ranges[0].endDate).format("MMM D, YYYY")
    : "Invalid Date";

  return (
    <div className="relative">
      <button
        className="flex items-center gap-x-[6px] font-semibold text-gray-600 text-base py-2 px-3 rounded-md drop-shadow bg-gray-100"
        onClick={() => setShouldShowCalendar((prev) => !prev)}
      >
        <CalendarOutlinedIcon size={20} />
        {`${startDate} - ${endDate}`}
      </button>
      {shouldShowCalendar && (
        <div
          className="absolute my-1 drop-shadow-md"
          style={{
            bottom: [
              DateRangePickerPopperPosition.TopCenter,
              DateRangePickerPopperPosition.TopLeft,
              DateRangePickerPopperPosition.TopRight,
            ].includes(position)
              ? "100%"
              : "unset",
            top: [
              DateRangePickerPopperPosition.BottomCenter,
              DateRangePickerPopperPosition.BottomLeft,
              DateRangePickerPopperPosition.BottomRight,
            ].includes(position)
              ? "100%"
              : "unset",
            left: [
              DateRangePickerPopperPosition.TopLeft,
              DateRangePickerPopperPosition.BottomLeft,
            ].includes(position)
              ? "0"
              : [
                  DateRangePickerPopperPosition.TopCenter,
                  DateRangePickerPopperPosition.BottomCenter,
                ].includes(position)
              ? "50%"
              : "unset",
            right: [
              DateRangePickerPopperPosition.TopRight,
              DateRangePickerPopperPosition.BottomRight,
            ].includes(position)
              ? "0"
              : "unset",
            transform: [
              DateRangePickerPopperPosition.TopCenter,
              DateRangePickerPopperPosition.BottomCenter,
            ].includes(position)
              ? "translateX(-50%)"
              : "unset",
          }}
        >
          <ReactDateRangePicker
            ranges={ranges}
            color={Colors.Primary600}
            rangeColors={[Colors.Primary500]}
            staticRanges={staticRanges}
            {...props}
          />
        </div>
      )}
    </div>
  );
};

export default DateRangePicker;
