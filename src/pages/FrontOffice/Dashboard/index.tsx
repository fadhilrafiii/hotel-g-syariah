import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import Button from "src/components/Button";
import PlusOutlinedIcon from "src/components/icons/PlusOutlinedIcon";
import TimeDropdown from "src/components/TimeDropdown";
import { AddReservationSteps } from "src/shared/types/reservation";
import AddReservation from "../AddReservation";
import GuestTable from "./GuestTable";
import Rooms from "./Rooms";
import RoomStatusCards from "./RoomStatusCards";
import TransactionChart from "./TransactionChart";

const FrontOfficeDashboard = () => {
  const [_, setSearchParams] = useSearchParams();
  const [filterTime, setFilterTime] = useState<string | null>(null);
  const [isOpenAddReservationDrawer, setIsOpenAddReservationDrawer] =
    useState(false);

  const handleChangeFilterTime = (value: string) => {
    setFilterTime(value);
  };

  const handleOpenAddReservationDrawer = () => {
    setSearchParams({ add_reservation: AddReservationSteps.RoomReservation });
    setIsOpenAddReservationDrawer(true);
  };

  return (
    <div className="flex flex-col gap-y-6 w-full">
      <div className="flex justify-end items-center gap-x-6">
        <TimeDropdown
          onChange={handleChangeFilterTime}
          containerClass="basis-[192px]"
        />
        <Button
          variant={Button.Variant.Filled}
          theme={Button.Theme.Primary}
          startIcon={<PlusOutlinedIcon size={20} />}
          onClick={handleOpenAddReservationDrawer}
        >
          Reservasi Baru
        </Button>
      </div>
      <RoomStatusCards />
      <Rooms />
      <div className="flex -mx-3 justify-start">
        <div className="basis-1/2 px-3 flex-shrink-0">
          <TransactionChart />
        </div>
        <div className="basis-1/2 px-3 flex-shrink-0">
          <GuestTable />
        </div>
      </div>
      <AddReservation
        isOpen={isOpenAddReservationDrawer}
        onClose={() => setIsOpenAddReservationDrawer(false)}
      />
    </div>
  );
};

export default FrontOfficeDashboard;
