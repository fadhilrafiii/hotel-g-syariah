import { dummy } from "./constants";
import { getStatusClassname } from "./utils";

const RoomsCount = () => {
  return (
    <div className="flex -mx-3">
      {dummy.map((data: any, index: number) => {
        const statusClassname = getStatusClassname(data.rooms.status);

        return (
          <div key={index} className="px-3 basis-1/3">
            <div className="bg-blue-50 rounded-lg h-full">
              <div className="flex">
                <div className="px-3 py-2 w-1/3">
                  <div className="text-xl font-semibold py-1">
                    {data.rooms.name}
                  </div>
                  <div
                    className={`text-xs font-semibold rounded-3xl w-12 text-center py-1 ${statusClassname}`}
                  >
                    {data.rooms.status}
                  </div>
                </div>
                <img
                  className="w-2/3 h-[100px] object-cover rounded-bl-lg rounded-tr-lg"
                  src={data.rooms.img}
                  alt={data.rooms.name}
                />
              </div>
              <div className="text-sm px-3 py-4">Jadwal Kegiatan Terbaru</div>
              <table className="bg-white border-separate rounded-lg border border-gray-400 border-b-0 w-[95%] mx-auto mb-2">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="border-b border-gray-400 text-sm py-3 px-2 text-left">
                      Waktu
                    </th>
                    <th className="border-b border-gray-400 text-sm py-3 px-2 text-left">
                      Kegiatan
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {data.act.map((data: any, index: number) => (
                    <tr key={index}>
                      <td className="border-b border-gray-400 text-sm py-3 px-2 text-left">
                        {data.time}
                      </td>
                      <td className="border-b border-gray-400 text-sm py-3 px-2 text-left">
                        {data.name}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default RoomsCount;
