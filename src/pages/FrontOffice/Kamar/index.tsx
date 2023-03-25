import { useState } from "react";
import { Range, RangeKeyDict } from "react-date-range";
import { useSearchParams } from "react-router-dom";
import Button from "src/components/Button";
import DateRangePicker, {
  DateRangePickerPopperPosition,
} from "src/components/DateRangePicker";
import AddSquareFilledIcon from "src/components/icons/AddSquareFilledIcon";
import PlusOutlinedIcon from "src/components/icons/PlusOutlinedIcon";
import StatusTag from "src/components/StatusTag";
import { useSnackbar } from "src/context/snackbar";
import Colors from "src/shared/types/color";
import { AddReservationSteps } from "src/shared/types/reservation";
import { SnackbarTypes } from "src/shared/types/snackbar";

import dayjs from "src/shared/utils/dayjs";
import AddReservation from "../AddReservation";

const FrontOfficeKamarPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const { open: showSnackbar } = useSnackbar();
  const [dateRange, setDateRange] = useState<Range>({
    startDate: dayjs().subtract(6, "days").toDate(),
    endDate: dayjs().toDate(),
  });
  const [isOpenAddReservationDrawer, setIsOpenReservationDrawer] = useState(
    Boolean(searchParams.get("add_reservation"))
  );

  const handleChangeDateRange = (ranges: RangeKeyDict) => {
    if (
      dayjs(ranges.dateRange.endDate).diff(
        dayjs(ranges.dateRange.startDate),
        "day"
      ) > 6
    ) {
      showSnackbar({
        message: "Only 7 days range is allowed!",
        type: SnackbarTypes.ERROR,
      });
      return;
    }

    setDateRange(ranges.dateRange);
  };

  const handleOpenAddReservationModal = () => {
    setSearchParams({ add_reservation: AddReservationSteps.RoomReservation });
    setIsOpenReservationDrawer(true);
  };

  const handleCloseAddReservationModal = () => {
    searchParams.delete("add_reservation");
    setSearchParams(searchParams);
    setIsOpenReservationDrawer(false);
  };

  return (
    <div className="flex flex-col gap-y-9">
      <div className="flex justify-between items-center">
        <div className="flex justify-start items-center gap-x-3">
          <StatusTag tagColor={Colors.Blue500} label="Reservasi" />
          <StatusTag tagColor={Colors.Primary500} label="Check In" />
          <StatusTag tagColor={Colors.Gray500} label="Check Out" />
          <StatusTag tagColor={Colors.Amber500} label="Perbaikan" />
        </div>
        <div className="flex justify-end items-center gap-x-6">
          <DateRangePicker
            ranges={[{ ...dateRange, key: "dateRange" }]}
            position={DateRangePickerPopperPosition.BottomRight}
            onChange={handleChangeDateRange}
          />
          <Button
            variant={Button.Variant.Filled}
            theme={Button.Theme.Primary}
            startIcon={<PlusOutlinedIcon size={20} />}
            className="w-auto"
            onClick={handleOpenAddReservationModal}
          >
            Reservasi Baru
          </Button>
        </div>
        <AddReservation
          isOpen={isOpenAddReservationDrawer}
          onClose={handleCloseAddReservationModal}
        />
      </div>
    </div>
  );
};

export default FrontOfficeKamarPage;
