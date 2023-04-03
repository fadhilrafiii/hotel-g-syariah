import { useState } from "react";
import HKLostFoundTable from "./LostFoundTable";
import ModalLostFound from "./AddLostFoundModal";
import Button from "src/components/Button";

const HouseKeepingLostFoundPage = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <div className="flex flex-col gap-6 p-2">
      <div className="flex justify-between items-center">
        <h3 className="font-semibold text-2xl">
          Lost & Found <span className="text-base font-normal">{`(67)`}</span>
        </h3>
        <Button onClick={() => setIsOpenModal(true)}>
          <div>+ Tambah Barang Baru</div>
        </Button>
      </div>
      <div className="flex gap-2">
        <div className="text-sm font-medium bg-blue-600 rounded-3xl text-white py-1 px-3 cursor-pointer">
          Semua Barang
        </div>
        <div className="text-sm font-medium border-2 rounded-3xl py-1 px-3 cursor-pointer">
          Found
        </div>
        <div className="text-sm font-medium border-2 rounded-3xl py-1 px-3 cursor-pointer">
          Taken
        </div>
      </div>
      <HKLostFoundTable />

      {/* Modal */}
      <ModalLostFound
        isOpen={isOpenModal}
        onClose={() => setIsOpenModal(false)}
      />
    </div>
  );
};

export default HouseKeepingLostFoundPage;
