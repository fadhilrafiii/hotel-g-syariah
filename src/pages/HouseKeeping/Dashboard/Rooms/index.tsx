import RoomCardHK from "src/components/RoomCardHK/RoomCardHK";
import { dummy } from "./constants";

const Rooms = () => {
  return (
    <div className="flex -mx-3">
      {dummy.map((data: any, index: number) => (
        <div className="px-3 basis-1/6">
          <RoomCardHK
            key={index}
            image={data.image}
            title={data.title}
            totalTerisi={data.terisi}
            totalDirty={data.dirty}
            totalClean={data.clean}
            totalVCI={data.vci}
            totalRepair={data.repair}
            totalRoom={
              data.terisi + data.dirty + data.clean + data.vci + data.repair
            }
            terisi={data.terisi}
            dirty={data.dirty}
            clean={data.clean}
            vci={data.vci}
            repair={data.repair}
          />
        </div>
      ))}
    </div>
  );
};

export default Rooms;
