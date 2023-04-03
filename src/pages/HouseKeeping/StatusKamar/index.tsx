import { useState } from "react";
import StatusHouseKeeping from "../Dashboard/StatusHouseKeeping";
import ModalStatusKamar from "./AddNewTaskModal";
import HKRoomTable from "./HKRoomTable";
import HKRoomType from "./HKRoomType";
import Button from "src/components/Button";

const HouseKeepingKamarPage = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <div className="flex flex-col gap-6 p-2">
      <div className="flex justify-between items-center">
        <StatusHouseKeeping />
        <Button onClick={() => setIsOpenModal(true)}>
          <div>+ Penugasan Baru</div>
        </Button>
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
