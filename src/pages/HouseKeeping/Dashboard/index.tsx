import RoomStatusCards from "src/pages/FrontOffice/Dashboard/RoomStatusCards";
import Rooms from "./Rooms";
import RoomsCount from "./RoomsCount";
import StatusHouseKeeping from "./StatusHouseKeeping";

const HouseKeepingDashboard = () => {
  return (
    <div className="flex flex-col gap-6 p-2">
      <StatusHouseKeeping />
      <RoomStatusCards />
      <Rooms />
      <RoomsCount />
    </div>
  );
};

export default HouseKeepingDashboard;
