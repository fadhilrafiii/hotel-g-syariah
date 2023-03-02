import StatusHouseKeeping from "../Dashboard/StatusHouseKeeping";
import HKRoomTable from "./HKRoomTable";
import HKRoomType from "./HKRoomType";

const HouseKeepingKamarPage = () => {
  return (
    <div className="flex flex-col gap-6 p-2">
      <div className="flex justify-between items-center">
        <StatusHouseKeeping />
        <button className="rounded-lg bg-blue-600 text-white px-3 py-1">
          + Penugasan Baru
        </button>
      </div>
      <HKRoomType />
      <HKRoomTable />
    </div>
  );
};

export default HouseKeepingKamarPage;
