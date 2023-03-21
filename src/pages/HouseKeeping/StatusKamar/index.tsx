import StatusHouseKeeping from "../Dashboard/StatusHouseKeeping";
import ModalStatusKamar from "./AddNewTaskModal";
import HKRoomTable from "./HKRoomTable";
import HKRoomType from "./HKRoomType";

const HouseKeepingKamarPage = () => {
  return (
    <div className="flex flex-col gap-6 p-2">
      <div className="flex justify-between items-center">
        <StatusHouseKeeping />
        <ModalStatusKamar />
      </div>
      <HKRoomType />
      <HKRoomTable />
    </div>
  );
};

export default HouseKeepingKamarPage;
