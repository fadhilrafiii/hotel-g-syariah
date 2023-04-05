import { Dayjs } from "dayjs";
import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import Button from "src/components/Button";
import Drawer from "src/components/Drawer";
import ChevronDownIcon from "src/components/icons/ChevronDownIcon";
import {
  BloodType,
  Gender,
  IDType,
  MarriageStatus,
} from "src/shared/types/guest";
import {
  AddReservationSteps,
  Reservation,
  ReservationType,
} from "src/shared/types/reservation";
import FillOrder from "./AddReservationPanel/FillOrder";
import RoomReservationPanel from "./AddReservationPanel/RoomReservation";
import ReservationStep from "./ReservationStep";

interface AddReservationProps {
  isOpen: boolean;
  onClose: () => void;
}

const AddReservation = ({ isOpen, onClose }: AddReservationProps) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [reservation, setReservation] = useState<Reservation>({
    type: ReservationType.Individual,
    checkInDate: null,
    checkOutDate: null,
    numOfRoom: 1,
    numOfAdult: 0,
    numOfChildren: 0,
    rooms: [],
    guest: {
      name: "",
      nik: "",
      birthPlace: "",
      birthDate: "",
      gender: Gender.Male,
      bloodType: BloodType.O,
      nationality: "",
      countryOrigin: "",
      province: "",
      city: "",
      address: "",
      religion: "",
      marriageStatus: MarriageStatus.NotMarried,
      job: "",
      phoneNumber: "",
      email: "",
      instance: "",
      idType: IDType.KTP,
      idImg: "",
    },
  });
  const currentStep = searchParams.get("add_reservation");

  const handleClickBack = () => {
    if (currentStep === AddReservationSteps.ConfirmOrder) {
      setSearchParams({ add_reservation: AddReservationSteps.FillOrderData });
    } else if (currentStep === AddReservationSteps.FillOrderData) {
      setSearchParams({ add_reservation: AddReservationSteps.RoomReservation });
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    console.log("SubmitHA!");
    e.preventDefault();
    if (currentStep === AddReservationSteps.FillOrderData)
      return setSearchParams({
        add_reservation: AddReservationSteps.ConfirmOrder,
      });
    else if (currentStep === AddReservationSteps.RoomReservation)
      return setSearchParams({
        add_reservation: AddReservationSteps.FillOrderData,
      });

    console.log("SUBMIT!");
  };

  return (
    <Drawer position={Drawer.Position.Right} isOpen={isOpen} onClose={onClose}>
      <form onSubmit={handleSubmit} className="h-full">
        <div className="relative w-full min-h-full py-7 px-6">
          <div className="mb-[72px]">
            <ReservationStep currentStep={currentStep as AddReservationSteps} />
          </div>
          <div>
            {currentStep === AddReservationSteps.RoomReservation && (
              <FillOrder
                reservation={reservation}
                setReservation={setReservation}
              />
            )}
          </div>
        </div>
        <div className="flex justify-center items-center border-t border-gray-400 p-6 gap-x-3 sticky bottom-0 left-0 right-0 bg-white">
          <Button
            variant={Button.Variant.Outlined}
            theme={Button.Theme.Secondary}
            isCenter
            startIcon={<ChevronDownIcon size={7} className="rotate-90" />}
            onClick={handleClickBack}
            disabled={
              !currentStep ||
              currentStep === AddReservationSteps.RoomReservation
            }
          >
            Kembali
          </Button>
          <Button
            type="submit"
            variant={Button.Variant.Outlined}
            theme={Button.Theme.Secondary}
            isCenter
            endIcon={<ChevronDownIcon size={7} className="-rotate-90" />}
          >
            Selanjutnya
          </Button>
        </div>
      </form>
    </Drawer>
  );
};

export default AddReservation;
