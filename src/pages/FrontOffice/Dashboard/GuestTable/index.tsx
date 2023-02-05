import React from "react";
import { dummy } from "./constants";
import { getStatusClassname } from "./utils";

import "./GuestTable.scss";

const GuestTable = () => {
  return (
    <div className="bg-blue-50 px-6 py-5 rounded-lg">
      <h3 className="text-2xl font-semibold !leading-normal mb-5">Data Tamu</h3>
      <table className="bg-white rounded-lg">
        <thead className="border-b border-gray-400">
          <tr>
            <th className="text-lg py-3 px-2 text-left">Tamu</th>
            <th className="text-lg py-3 px-2 text-left">Kamar</th>
            <th className="text-lg py-3 px-2 text-left">Status</th>
          </tr>
        </thead>
        <tbody>
          {dummy.map((data: any, idx: number) => {
            const statusClassname = getStatusClassname(data.room.status);

            return (
              <tr
                key={idx}
                className={`border-b-[0.5px] border-gray-400 ${
                  idx % 2 === 1 ? "bg-gray-50" : "bg-white"
                }`}
              >
                <td>
                  <div className="font-semibold text-base">
                    {data.guest.name}
                  </div>
                  <div className="text-gray-600 text-xs">{data.guest.id}</div>
                </td>
                <td>
                  <div className="text-base">{data.room.name}</div>
                  <div className="text-gray-600 text-xs font-semibold ">
                    {data.room.id}
                  </div>
                </td>
                <td>
                  <span
                    className={`rounded-[24px] text-base ${statusClassname} py-1 px-4`}
                  >
                    {data.room.status}
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default GuestTable;
