import { useState } from "react";
import StatusHouseKeeping from "../Dashboard/StatusHouseKeeping";
import ModalStatusKamar from "./AddNewTaskModal";
import HKRoomTable from "./HKRoomTable";
import HKRoomType from "./HKRoomType";

const HouseKeepingKamarPage = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <div className="flex flex-col gap-6 p-2">
      <div className="flex justify-between items-center">
        <StatusHouseKeeping />
        <button
          className="rounded-md font-semibold bg-blue-600 text-white px-3 py-[6px]"
          onClick={() => setIsOpenModal(true)}
        >
          + Penugasan Baru
        </button>
      </div>
      <HKRoomType />
      <HKRoomTable />

      {/* Modal */}
      <ModalStatusKamar
        isOpen={isOpenModal}
        onClose={() => setIsOpenModal(false)}
      />
    </div>
  );
};

export default HouseKeepingKamarPage;
