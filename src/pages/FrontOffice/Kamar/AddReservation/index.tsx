import { Dayjs } from "dayjs";
import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import Drawer from "src/components/Drawer";
import InformationCircleOutlinedIcon from "src/components/icons/InformationCircleOutlinedIcon";
import Modal from "src/components/Modal";
import {
  AddReservationSteps,
  Reservation,
  ReservationType,
} from "src/shared/types/reservation";
import ReservationStep from "./ReservationStep";
import ReservationTypeToggler from "./ReservationTypeToggler";

interface AddReservationProps {
  isOpen: boolean;
  onClose: () => void;
}

const AddReservation = ({ isOpen, onClose }: AddReservationProps) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [searchParams] = useSearchParams();
  const [reservation, setReservation] = useState<Reservation>({
    type: ReservationType.Individual,
    checkInDate: null,
    checkOutDate: null,
  });

  const currentStep = searchParams.get("add_reservation");

  const handleToggleReservationType = () => {
    setReservation((prev: Reservation) => ({
      ...prev,
      type:
        prev.type === ReservationType.Individual
          ? ReservationType.Group
          : ReservationType.Individual,
    }));
  };

  const handleChangeDate = (date: Dayjs | null, name: string) => {
    setReservation((prev: Reservation) => ({
      ...prev,
      [name]: date,
    }));
  };

  return (
    <Drawer position={Drawer.Position.Right} isOpen={isOpen} onClose={onClose}>
      <div className="w-full h-full py-7 px-6">
        <div className="mb-[72px]">
          <ReservationStep currentStep={currentStep as AddReservationSteps} />
        </div>
        <section>
          <div className="flex justify-between items-center mb-11">
            <div className="flex gap-x-6 items-center">
              <h3 className="text-2xl font-semibold text-gray-600">
                Reservasi Baru
              </h3>
              <ReservationTypeToggler
                type={reservation.type}
                onToggle={handleToggleReservationType}
              />
            </div>
            <div className="px-3 py-2 flex items-center gap-x-2 text-sm border border-blue-400 bg-blue-50 rounded-lg">
              <InformationCircleOutlinedIcon size={16} />
              {`Booking Detail: 1 Kamar - Rp 525.000`}
            </div>
          </div>
          <div className="flex -mx-3 items-end">
            <div className="px-3 basis-1/6"></div>
            <div className="px-3 basis-1/6"></div>
            <div className="px-3 basis-1/6"></div>
            <div className="px-3 basis-1/6"></div>
            <div className="px-3 basis-1/6"></div>
            <div className="px-3 basis-1/6"></div>
          </div>
        </section>
        <button onClick={() => setIsOpenModal(true)}>buka</button>
        <Modal
          title="Judul Modal"
          isOpen={isOpenModal}
          onClose={() => setIsOpenModal(false)}
          onPrimaryButtonClick={() => console.log("CLICKED!")}
          onSecondaryButtonClick={() => setIsOpenModal(false)}
        >
          Ini isinya
        </Modal>
      </div>
    </Drawer>
  );
};

export default AddReservation;
