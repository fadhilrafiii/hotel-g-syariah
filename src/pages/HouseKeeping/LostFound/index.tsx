import React from "react";
import HKLostFoundTable from "./HKLostFoundTable";

const HouseKeepingLostFoundPage = () => {
  return (
    <div className="flex flex-col gap-6 p-2">
      <div className="flex justify-between items-center">
        <h3 className="font-semibold text-2xl">
          Lost & Found <span className="text-base font-normal">{`(67)`}</span>
        </h3>
        <button className="rounded-lg bg-blue-600 text-white px-3 py-1">
          + Tambah Barang Baru
        </button>
      </div>
      <div className="flex gap-2">
        <div className="text-sm font-medium bg-blue-600 rounded-3xl text-white py-1 px-3">
          Semua Barang
        </div>
        <div className="text-sm font-medium border-2 rounded-3xl py-1 px-3">
          Found
        </div>
        <div className="text-sm font-medium border-2 rounded-3xl py-1 px-3">
          Taken
        </div>
      </div>
      <HKLostFoundTable />
    </div>
  );
};

export default HouseKeepingLostFoundPage;
