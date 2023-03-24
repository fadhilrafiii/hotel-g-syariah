import { Dayjs } from "dayjs";
import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import Button from "src/components/Button";
import DatePicker from "src/components/DatePicker";
import Drawer from "src/components/Drawer";
import FieldContainer from "src/components/FieldContainer";
import InformationCircleOutlinedIcon from "src/components/icons/InformationCircleOutlinedIcon";
import SearchOutlinedIcon from "src/components/icons/SearchOutlinedIcon";
import InputNumber from "src/components/InputNumber";
import Colors from "src/shared/types/color";
import {
  AddReservationSteps,
  Reservation,
  ReservationType,
} from "src/shared/types/reservation";
import dayjs from "src/shared/utils/dayjs";
import ReservationStep from "./ReservationStep";
import ReservationTypeToggler from "./ReservationTypeToggler";

interface AddReservationProps {
  isOpen: boolean;
  onClose: () => void;
}

const AddReservation = ({ isOpen, onClose }: AddReservationProps) => {
  const [searchParams] = useSearchParams();
  const [reservation, setReservation] = useState<Reservation>({
    type: ReservationType.Individual,
    checkInDate: null,
    checkOutDate: null,
    numOfRoom: 1,
    numOfAdult: 0,
    numOfChildren: 0,
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

  const handleChangeNumber = (name: string, value: number) => {
    setReservation((prev: Reservation) => ({
      ...prev,
      [name]: value,
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
            <div className="px-3 w-1/6">
              <FieldContainer label="Tanggal Check In" required>
                <DatePicker
                  selected={reservation.checkInDate}
                  minDate={dayjs()}
                  onChange={(date: Dayjs | null) =>
                    handleChangeDate(date, "checkInDate")
                  }
                />
              </FieldContainer>
            </div>
            <div className="px-3 w-1/6">
              <FieldContainer label="Tanggal Check Out" required>
                <DatePicker
                  selected={reservation.checkOutDate}
                  minDate={dayjs()}
                  onChange={(date: Dayjs | null) =>
                    handleChangeDate(date, "checkOutDate")
                  }
                />
              </FieldContainer>
            </div>
            <div className="px-3 w-1/6">
              <FieldContainer label="Jumlah Kamar" required disabled>
                <InputNumber
                  value={reservation.numOfRoom}
                  onChange={(val: number) =>
                    handleChangeNumber("numOfRoom", val)
                  }
                  disabled={reservation.type === ReservationType.Individual}
                />
              </FieldContainer>
            </div>
            <div className="px-3 w-1/6">
              <FieldContainer label="Tamu Dewasa" required>
                <InputNumber
                  value={reservation.numOfAdult}
                  onChange={(val: number) =>
                    handleChangeNumber("numOfAdult", val)
                  }
                />
              </FieldContainer>
            </div>
            <div className="px-3 w-1/6">
              <FieldContainer label="Tamu Anak-anak" required>
                <InputNumber
                  value={reservation.numOfChildren}
                  onChange={(val: number) =>
                    handleChangeNumber("numOfChildren", val)
                  }
                />
              </FieldContainer>
            </div>
            <div className="px-3 w-1/6">
              <Button
                variant={Button.Variant.Filled}
                theme={Button.Theme.Primary}
                isCenter
                className="w-full"
                startIcon={
                  <SearchOutlinedIcon size={16} color={Colors.White} />
                }
              >
                Cari Kamar
              </Button>
            </div>
          </div>
        </section>
      </div>
    </Drawer>
  );
};

export default AddReservation;
