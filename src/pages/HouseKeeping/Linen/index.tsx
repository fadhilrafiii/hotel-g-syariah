import { useState } from "react";

import AddLinenModal from "./AddLinenModal";
import LinenTable from "./LinenTable";

import PlusOutlinedIcon from "src/components/icons/PlusOutlinedIcon";
import Button from "src/components/Button";

const HouseKeepingLinenPage = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <div className="flex flex-col gap-6 p-2">
      <div className="flex justify-between items-center">
        <h3 className="font-semibold text-2xl">
          Linen <span className="text-base font-normal">{`(67)`}</span>
        </h3>
        <Button
          startIcon={<PlusOutlinedIcon size={20} />}
          onClick={() => setIsOpenModal(true)}
        >
          Tambah Linen Baru
        </Button>
      </div>
      <div className="flex gap-2">
        <div className="text-sm font-medium bg-blue-600 rounded-3xl text-white py-1 px-3 cursor-pointer">
          Semua
        </div>
        <div className="text-sm font-medium border-2 rounded-3xl py-1 px-3 cursor-pointer">
          Diambil
        </div>
        <div className="text-sm font-medium border-2 rounded-3xl py-1 px-3 cursor-pointer">
          Diterima
        </div>
      </div>
      <LinenTable />

      {/* Modal */}
      <AddLinenModal
        isOpen={isOpenModal}
        onClose={() => setIsOpenModal(false)}
      />
    </div>
  );
};

export default HouseKeepingLinenPage;
