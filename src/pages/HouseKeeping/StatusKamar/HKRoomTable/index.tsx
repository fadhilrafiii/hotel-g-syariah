import { dummy } from "./constants";

const HKRoomTable = () => {
  return (
    <div className="bg-blue-50 px-3 pt-5 pb-12 rounded-lg h-full">
      <div className="flex gap-2 font-medium">
        <input
          type="text"
          placeholder="Cari. . ."
          className="px-3 rounded-lg border-2 text-sm"
        />
        <button className="rounded-lg bg-blue-600 text-sm border-2 border-blue-50 text-white py-1 px-3">
          Cari
        </button>
        <button className="rounded-lg bg-white text-sm border-2 py-1 px-3">
          Edit Massal
        </button>
      </div>
      <table className="bg-white rounded-lg border-separate border border-gray-400 mx-auto my-4 w-full">
        <thead className="bg-gray-50 text-sm">
          <tr>
            <th className="px-3 py-2 text-left border-b border-gray-400">
              <input type="checkbox" />
            </th>
            <th className="font-semibold px-3 py-2 text-left border-b border-gray-400">
              No Kamar
            </th>
            <th className="font-semibold px-3 py-2 text-left border-b border-gray-400">
              Tipe Kamar
            </th>
            <th className="font-semibold px-3 py-2 text-left border-b border-gray-400">
              HK Status
            </th>
            <th className="font-semibold px-3 py-2 text-left border-b border-gray-400">
              Staff HK
            </th>
            <th className="font-semibold px-3 py-2 text-left border-b border-gray-400">
              Note
            </th>
            <th className="font-semibold px-3 py-2 text-left border-b border-gray-400">
              Reservasi
            </th>
          </tr>
        </thead>
        <tbody>
          {dummy.map((data: any, index: number) => {
            return (
              <tr key={index} className="text-sm">
                <td className="px-3 py-2 text-left border-b border-gray-400 ">
                  <input type="checkbox" />
                </td>
                <td className="px-3 py-2 text-left border-b border-gray-400">
                  {data.room}
                </td>
                <td className="px-3 py-2 text-left border-b border-gray-400">
                  {data.type}
                </td>
                <td className="px-3 py-2 text-left border-b border-gray-400">
                  <p className="bg-red-200 text-red-800 w-14 font-medium text-xs rounded-md px-2 py-1">{data.status} -</p>
                </td>
                <td className="px-3 py-2 text-left border-b border-gray-400">
                  {data.staff}
                </td>
                <td className="px-3 py-2 text-left border-b border-gray-400">
                  {data.note}
                </td>
                <td className="px-3 py-2 text-left border-b border-gray-400">
                  <p className="bg-gray-200 text-gray-800 w-24 font-medium text-xs text-center rounded-xl px-2 py-1">{data.reserv}</p>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="flex justify-between px-4">
        <p className="text-sm">Showing 1 to 10 of 122 results</p>
        <div className="text-sm flex bg-white rounded-lg border border-gray-400">
          <button className="px-3 py-2 border-r border-gray-400">{`<`}</button>
          <button className="px-3 py-2 border-x border-gray-400 bg-gray-400 text-white">
            1
          </button>
          <button className="px-3 py-2 border-x border-gray-400">2</button>
          <button className="px-3 py-2 border-x border-gray-400">3</button>
          <button className="px-3 py-2 border-x border-gray-400">... </button>
          <button className="px-3 py-2 border-x border-gray-400">8</button>
          <button className="px-3 py-2 border-x border-gray-400">9</button>
          <button className="px-3 py-2 border-x border-gray-400">10</button>
          <button className="px-3 py-2 border-l border-gray-400">{`>`}</button>
        </div>
      </div>
    </div>
  );
};

export default HKRoomTable;
