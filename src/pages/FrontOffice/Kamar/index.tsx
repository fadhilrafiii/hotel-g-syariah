import { useState } from "react";
import { Range, RangeKeyDict } from "react-date-range";
import DateRangePicker, { DateRangePickerPopperPosition } from "src/components/DateRangePicker";
import AddSquareFilledIcon from "src/components/icons/AddSquareFilledIcon";
import PlusOutlinedIcon from "src/components/icons/PlusOutlinedIcon";
import StatusTag from "src/components/StatusTag";
import { useSnackbar } from "src/context/snackbar";
import Colors from "src/shared/types/color";
import { SnackbarTypes } from "src/shared/types/snackbar";

import dayjs from 'src/shared/utils/dayjs';

const FrontOfficeKamarPage = () => {
  const { open: showSnackbar } = useSnackbar()
  const [dateRange, setDateRange] = useState<Range>({
    startDate: dayjs().subtract(6, 'days').toDate(),
    endDate: dayjs().toDate(),
  });

  const handleChangeDateRange = (ranges: RangeKeyDict) => {
    if (dayjs(ranges.dateRange.endDate).diff(dayjs(ranges.dateRange.startDate), 'day') > 6) {
      showSnackbar({
        message: 'Only 7 days range is allowed!',
        type: SnackbarTypes.ERROR
      })
      return;
    }

    setDateRange(ranges.dateRange)
  }

  return <div className="flex flex-col gap-y-9">
    <div className="flex justify-between items-center">
      <div className="flex justify-start items-center gap-x-3">
        <StatusTag tagColor={Colors.Blue500} label="Reservasi" />
        <StatusTag tagColor={Colors.Primary500} label="Check In" />
        <StatusTag tagColor={Colors.Gray500} label="Check Out" />
        <StatusTag tagColor={Colors.Amber500} label="Perbaikan" />
      </div>
      <div className="flex justify-end items-center gap-x-6">
        <DateRangePicker
          ranges={[{ ...dateRange, key: 'dateRange' }]}
          position={DateRangePickerPopperPosition.BottomRight}
          onChange={handleChangeDateRange}
        />
        <button className="flex items-center gap-x-[10px] px-4 py-2 font-semibold drop-shadow text-white rounded-md bg-blue-600">
          <PlusOutlinedIcon color={Colors.White} size={20} />
          Reservasi Baru
        </button>
      </div>
    </div>
  </div>;
};

export default FrontOfficeKamarPage;
