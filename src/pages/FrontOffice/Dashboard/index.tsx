import GuestTable from "./GuestTable";
import Rooms from "./Rooms";
import RoomStatusCards from "./RoomStatusCards";

const FrontOfficeDashboard = () => {
  return (
    <div className="flex flex-col gap-y-6 w-full">
      <RoomStatusCards />
      <Rooms />
      <div className="flex -mx-3 justify-start">
        <div className="basis-1/2 px-3 flex-shrink-0">
          <GuestTable />
        </div>
        <div className="basis-1/2 px-3 flex-shrink-0">
          <GuestTable />
        </div>
      </div>
    </div>
  );
};

export default FrontOfficeDashboard;
