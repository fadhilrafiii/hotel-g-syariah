import SelectAllIcon from "src/components/icons/SelectAllIcon";
import ChevronDownIcon from "src/components/icons/ChevronDownIcon";
import SearchOutlinedIcon from "src/components/icons/SearchOutlinedIcon";
import CaretDownIcon from "src/components/icons/CaretDownIcon";
import Button from "src/components/Button";

import { dummy } from "./constants";

const MAP_TABLE_HEAD = [
  { header: "ID Number" },
  { header: "Vendor" },
  { header: "Jumlah Linen" },
  { header: "Tanggal Masuk" },
  { header: "Tanggal Jadi" },
  { header: "Harga" },
  { header: "Status" },
];

const LinenTable = () => {
  return (
    <div className="bg-blue-50 px-3 pt-5 pb-12 rounded-lg h-full">
      <div className="flex gap-2 font-medium">
        <div className="flex items-center bg-white border border-gray-400 rounded-lg px-3 py-1 gap-2">
          <SearchOutlinedIcon />
          <input
            type="text"
            placeholder="Cari. . ."
            className="outline-none text-sm"
          />
        </div>
        <Button>Cari</Button>
        <Button theme={Button.Theme.White} className="shadow-md">
          <SelectAllIcon />
          Edit Massal
        </Button>
      </div>
      <table className="bg-white rounded-lg border-separate border border-gray-400 border-b-0 mx-auto my-4 w-full">
        <thead className="bg-gray-50 text-sm">
          <tr>
            <th className="px-3 py-2 text-left border-b border-gray-400">
              <input type="checkbox" />
            </th>
            {MAP_TABLE_HEAD.map((data, idx) => {
              const isUseArrowIcon =
                data.header !== "ID Number" && data.header !== "Harga";

              return (
                <th
                  key={idx}
                  className="font-semibold px-3 py-2 text-left border-b border-gray-400"
                >
                  <div className="flex items-center gap-2">
                    {data.header}
                    {isUseArrowIcon ? (
                      <ChevronDownIcon
                        className="cursor-pointer"
                        onClick={() => console.log("clicked")}
                        size={7}
                      />
                    ) : null}
                  </div>
                </th>
              );
            })}
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
                  #{data.id_number}
                </td>
                <td className="px-3 py-2 text-left border-b border-gray-400">
                  {data.vendor}
                </td>
                <td className="px-3 py-2 text-center border-b border-gray-400">
                  {data.jumlah}
                </td>
                <td className="px-3 py-2 text-left border-b border-gray-400">
                  {data.tgl_masuk}
                </td>
                <td className="px-3 py-2 text-left border-b border-gray-400">
                  {data.tgl_jadi}
                </td>
                <td className="px-3 py-2 text-left border-b border-gray-400">
                  Rp. {data.harga}
                </td>
                <td className="px-3 py-2 text-left border-b border-gray-400">
                  <div className="flex items-center justify-center gap-2 bg-blue-200 text-blue-800 font-medium text-xs text-center rounded-md w-20 py-1">
                    {data.status}
                    <CaretDownIcon />
                  </div>
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
          <button className="px-3 py-2">2</button>
          <button className="px-3 py-2 border-x border-gray-400">3</button>
          <button className="px-3 py-2">... </button>
          <button className="px-3 py-2 border-x border-gray-400">8</button>
          <button className="px-3 py-2">9</button>
          <button className="px-3 py-2 border-x border-gray-400">10</button>
          <button className="px-3 py-2">{`>`}</button>
        </div>
      </div>
    </div>
  );
};

export default LinenTable;
