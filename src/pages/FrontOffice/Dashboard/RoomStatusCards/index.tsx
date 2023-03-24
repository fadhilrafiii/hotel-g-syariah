import React from "react";
import StatusCard from "src/components/StatusCard";
import HotelOutlinedIcon from "src/components/icons/HotelOutlinedIcon";
import LogoutOutlinedIcon from "src/components/icons/LogoutOutlinedIcon";
import BookmarkOrderOutlinedIcon from "src/components/icons/BookmarkOrderOutlinedIcon";
import HomeRepairServiceOutlinedIcon from "src/components/icons/HomeRepairServiceOutlinedIcon";

const RoomStatusCards = () => {
  return (
    <section className="flex -mx-3">
      <div className="px-3 basis-1/4">
        <StatusCard
          color={StatusCard.Color.Green}
          text="Kamar Terisi"
          Icon={HotelOutlinedIcon}
          total={34}
        />
      </div>
      <div className="px-3 basis-1/4">
        <StatusCard
          color={StatusCard.Color.Gray}
          text="Kamar Checkout"
          Icon={LogoutOutlinedIcon}
          total={25}
        />
      </div>
      <div className="px-3 basis-1/4">
        <StatusCard
          color={StatusCard.Color.Blue}
          text="Kamar Reservasi"
          Icon={BookmarkOrderOutlinedIcon}
          total={29}
        />
      </div>
      <div className="px-3 basis-1/4">
        <StatusCard
          color={StatusCard.Color.Amber}
          text="Kamar Rusak/Perbaikan"
          Icon={HomeRepairServiceOutlinedIcon}
          total={7}
        />
      </div>
    </section>
  );
};

export default RoomStatusCards;
